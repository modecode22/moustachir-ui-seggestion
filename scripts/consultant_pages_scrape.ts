import { pooledMap } from "https://deno.land/std@0.224.0/async/pool.ts";
import puppeteer, {
  Browser,
  Page,
} from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

// --- Predefined Consultant URLs ---
const consultantProfileUrls = [
  "https://moustachir.com/consultant/see02edf28f-5d69-4893-9a0e-cb5e558ad0f2",
  "https://moustachir.com/consultant/see03469852-b7a0-48c5-a652-deefe1bd3f95",
  "https://moustachir.com/consultant/see0c0d0708-ca99-43a3-8219-678e7cc3d1f8",
  "https://moustachir.com/consultant/see0c483838-095e-4133-beea-f4be56d3fd9d",
  "https://moustachir.com/consultant/see103c8db6-2641-4af9-a56e-7b431631859d",
  "https://moustachir.com/consultant/see1399caf0-7d82-4a5c-9a16-0e083cfdb491",
  "https://moustachir.com/consultant/see212693d3-03d6-452f-97da-5cbf21c43178",
  "https://moustachir.com/consultant/see2482e45b-6ff7-47dc-a6f7-638c9ad359b2",
  "https://moustachir.com/consultant/see26b1148f-7b6b-4a38-8dfc-45d0f707859f",
  "https://moustachir.com/consultant/see2b71fc96-9ec2-431e-ad7e-805222909d39",
  "https://moustachir.com/consultant/see30768496-1659-4d8b-8d27-d08aa05a7b24",
  "https://moustachir.com/consultant/see310100fa-7246-4c21-b418-578767cb4a0f",
  "https://moustachir.com/consultant/see31688b52-23fd-456d-a2b7-bec05aff82d8",
  "https://moustachir.com/consultant/see33764507-de67-4900-8de5-aab821cfd180",
  "https://moustachir.com/consultant/see3a956757-9740-41a2-887a-8560f0b210ca",
  "https://moustachir.com/consultant/see3c907e4d-1460-4e4f-9e83-1c5dd562e2f6",
  "https://moustachir.com/consultant/see3e837e67-a354-44db-a847-e3021007d3d6",
  "https://moustachir.com/consultant/see3ed676b9-6ec9-4cdd-a65c-eece5cc09136",
  "https://moustachir.com/consultant/see448bacb8-8c61-4af8-b1aa-2824088aee19",
  "https://moustachir.com/consultant/see47addbc3-cac2-41ce-bc9a-d7268327ec72",
  "https://moustachir.com/consultant/see47b50596-b7c5-4b93-9626-e516ea3f1f17",
  "https://moustachir.com/consultant/see49bb08dc-6059-454d-93e6-5c7f0e5f462d",
  "https://moustachir.com/consultant/see4c6771dc-156e-4950-9cb8-aeff5be03295",
  "https://moustachir.com/consultant/see5014fba9-e975-4400-b3bb-f1c7f9498fa6",
  "https://moustachir.com/consultant/see5181275c-56b5-4a13-8af2-cb9f7badc1a0",
  "https://moustachir.com/consultant/see51e99b97-7622-4cf3-95c0-7e6993d1a586",
  "https://moustachir.com/consultant/see53b7feb4-3e86-4eba-8c91-05a213b052e1",
  "https://moustachir.com/consultant/see561846ae-8477-48d9-bdf3-b442720be647",
  "https://moustachir.com/consultant/see57a3c892-5c65-49d7-90db-81cc5d6606f9",
  "https://moustachir.com/consultant/see580d14a8-be1e-46cb-8f23-47274fa8f562",
  "https://moustachir.com/consultant/see58d6c020-b7ed-407b-83bc-e49a6bd29887",
  "https://moustachir.com/consultant/see59951e7e-b09b-4fd0-ad07-e23f9fe44ca0",
  "https://moustachir.com/consultant/see5a1b3cec-c5e0-4197-9101-de9c2f762026",
  "https://moustachir.com/consultant/see5b6b11ae-a87c-44ea-a1f6-80bdbe0079fd",
  "https://moustachir.com/consultant/see5bd2f4ef-0341-492c-9ea0-e0dc7e6cb22e",
  "https://moustachir.com/consultant/see5cfd6494-a9ac-47fb-9f7d-47c18a48d7e3",
  "https://moustachir.com/consultant/see5dbe5f5f-d245-4f45-af52-7b9c545e13b3",
  "https://moustachir.com/consultant/see5e06cf27-2ea9-4226-a6e2-d290cbe143b8",
  "https://moustachir.com/consultant/see5eada8ff-7d1b-4a12-ac63-d6f9fe788fa5",
  "https://moustachir.com/consultant/see60d2769f-ad60-4f34-b3ae-13c421120eec",
  "https://moustachir.com/consultant/see6158a448-6f59-4e82-a8de-47959e5568bd",
  "https://moustachir.com/consultant/see61931894-0037-4088-b8df-1eb333ae9318",
  "https://moustachir.com/consultant/see62e91560-9eaf-4c96-84d0-bfae8d1554a0",
  "https://moustachir.com/consultant/see6336b2d3-2930-47e9-958e-6231abf380fb",
  "https://moustachir.com/consultant/see65c88b98-4d26-45d0-ac86-3c27718d3c1e",
  "https://moustachir.com/consultant/see67f5b738-b411-4217-b40e-4589c3eb4e29",
  "https://moustachir.com/consultant/see687de06f-e8fc-4792-b0e8-9230d92c3f5a",
  "https://moustachir.com/consultant/see69a553ed-ec08-45af-92e2-efbfcfacf48b",
  "https://moustachir.com/consultant/see6b8a9883-0730-4092-b230-1d387cbd9425",
  "https://moustachir.com/consultant/see6ba4c73f-c36f-4c7d-9d97-5c0d395ecc0f",
  "https://moustachir.com/consultant/see6f3e87ab-8258-4686-8f3d-fbecba1aa807",
  "https://moustachir.com/consultant/see72d9453e-84a9-405d-b7d2-acc1b5c7d91d",
  "https://moustachir.com/consultant/see74b75612-d829-4bc8-9349-f06052616d8d",
  "https://moustachir.com/consultant/see76019a39-4c1f-4f03-923f-9798f609eca6",
  "https://moustachir.com/consultant/see801a03ab-5bbc-4a89-b6ad-c3d06ec051b8",
  "https://moustachir.com/consultant/see83fef9a6-701f-4423-9d94-6b5315b784d8",
  "https://moustachir.com/consultant/see84392016-8b32-441b-938e-b8d8012c417a",
  "https://moustachir.com/consultant/see855360d6-10f0-4db8-88f3-6ab94fca6b43",
  "https://moustachir.com/consultant/see8754c50a-9dab-41f1-93dd-3a69cb6a71ed",
  "https://moustachir.com/consultant/see8b17d8b3-e208-4b26-9e95-515886918d56",
  "https://moustachir.com/consultant/see8e0b5362-8a4f-4f36-b906-b3cd7278be2a",
  "https://moustachir.com/consultant/see92f599fb-c7b9-44f9-9d70-62e9e635b4d1",
  "https://moustachir.com/consultant/see93031508-e7b6-487d-bc16-7ec304cc2a7b",
  "https://moustachir.com/consultant/see95019464-7569-4037-9e9f-79e04ac793d7",
  "https://moustachir.com/consultant/see96aab3b5-772f-464a-a2d9-0d1aa220d368",
  "https://moustachir.com/consultant/see985c0325-cbe6-42c5-976f-18f0164aed2d",
  "https://moustachir.com/consultant/see9a383585-e0f0-46f5-8187-30f87cb24653",
  "https://moustachir.com/consultant/see9f6b2bc6-09b3-43f4-a96d-57b5ef52c2da",
  "https://moustachir.com/consultant/seea5223428-5a0a-4d16-b69c-2dc9a0297ee2",
  "https://moustachir.com/consultant/seea58889ef-9849-4efa-88a5-736e6392108f",
  "https://moustachir.com/consultant/seea5b7240b-bdd9-42fc-9aad-6277e0adb404",
  "https://moustachir.com/consultant/seea901b62e-28d3-4b53-b7ed-d96ee7e03c92",
  "https://moustachir.com/consultant/seea98b63ab-8acc-433c-a650-9196f78a298e",
  "https://moustachir.com/consultant/seeac462f00-18de-417c-bd69-99ba6629cc8f",
  "https://moustachir.com/consultant/seeae2e94dd-6e1f-4a58-91e2-8768d4cf4745",
  "https://moustachir.com/consultant/seeb55b932f-5089-4c49-8e89-8f142a1a1aa9",
  "https://moustachir.com/consultant/seec4c0651f-fd4b-4d82-86e2-7bb192dbf1b6",
  "https://moustachir.com/consultant/seecbc0bfc5-c71a-4bff-ab23-2b58d4339529",
  "https://moustachir.com/consultant/seecd89031c-89d5-4f2a-8ce3-ec697aeb69ac",
  "https://moustachir.com/consultant/seece503243-e9db-4760-b2d1-37683895976c",
  "https://moustachir.com/consultant/seed2a05af2-3877-4a09-93cc-262dedd97f1e",
  "https://moustachir.com/consultant/seed57ce479-29be-4974-9deb-f1f1dc02fc05",
  "https://moustachir.com/consultant/seed79ff2ec-811c-4fef-8ad6-6d91d585c9e2",
  "https://moustachir.com/consultant/seed7b775d3-49d5-4e21-8758-4b3ea90312f4",
  "https://moustachir.com/consultant/seed81cdcf3-b873-4eec-9012-315ef09baed3",
  "https://moustachir.com/consultant/seedc4bc8f5-3dbb-470f-b103-08698abb185a",
  "https://moustachir.com/consultant/seedd9647fe-d991-4505-a88c-58ceb9002a87",
  "https://moustachir.com/consultant/seedfa2ce21-0227-4ee4-8f52-77442df9dcbd",
  "https://moustachir.com/consultant/seef452197a-0921-4700-a0db-c8c81a8af2b6",
  "https://moustachir.com/consultant/seef50f63b4-4dfc-4c07-bb31-648ea1d9ae79",
  "https://moustachir.com/consultant/seef5562ea4-59af-47d9-9b05-a431c7c614ff",
  "https://moustachir.com/consultant/seef5fc2d81-caf8-4ee5-ac47-e73543a22315",
  "https://moustachir.com/consultant/seefb7f13a3-6edf-4851-8d89-3a515f214474",
  "https://moustachir.com/consultant/seefc40a6e6-661d-44e0-83dc-2c3fbb9a71f5",
  "https://moustachir.com/consultant/seeff86e2e8-744b-43fc-bb4f-c33c60a40ad6",
];

// --- Configuration ---
const BASE_URL = "https://moustachir.com";
const AR_DETAIL_PAGE_BASE_URL = "https://moustachir.com/ar";
const MAX_CONCURRENCY = 10; // Number of pages to process in parallel
const DEBUG = true;
const CHROME_EXECUTABLE_PATH =
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
const PAGE_TIMEOUT = 60000; // Max time per page (ms)
const ELEMENT_TIMEOUT = 10000; // Max time to wait for an element (ms)

// --- Type Definition ---
type  Consultant = {
  name: string | null;
  profileUrl: string | null;
  imageUrl: string | null;
  fields: string[];
  description: string[] | null;
  pricePerHour: number | null;
  currency: string | null;
}

// Type for the result of processing a single URL (can be data or null on error)
type ProcessResult = Consultant | null;

// --- Helper Functions ---
// (Keep log and parsePrice functions as before)
function log(message: string, ...args: unknown[]) {
  if (DEBUG) {
    console.log(`[${new Date().toISOString()}] ${message}`, ...args);
  }
}

function parsePrice(priceString: string | null | undefined): {
  price: number | null;
  currency: string | null;
} {
  if (!priceString) {
    return { price: null, currency: null };
  }
  const match = priceString.match(/(\d+)\s*([A-Z]+)?/);
  if (match && match[1]) {
    const price = parseInt(match[1], 10);
    const currency = match[2] || "DA";
    return { price: isNaN(price) ? null : price, currency };
  }
  return { price: null, currency: null };
}

// --- Individual URL Processing Function ---
async function processUrl(
  browser: Browser,
  profileUrlBase: string
): Promise<ProcessResult> {
  let page: Page | null = null;
  const profileUrlAr = profileUrlBase.replace(
    BASE_URL,
    AR_DETAIL_PAGE_BASE_URL
  );
  log(`[Task Start] Processing: ${profileUrlAr}`);

  try {
    page = await browser.newPage();

    // --- Optimization: Block unnecessary resources ---
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const resourceType = req.resourceType();
      if (["image", "stylesheet", "font", "media"].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );
    // Viewport might be less critical if only extracting text, but keep for consistency
    await page.setViewport({ width: 1280, height: 800 });

    // Navigate directly to the Arabic detail page
    await page.goto(profileUrlAr, {
      waitUntil: "domcontentloaded",
      timeout: PAGE_TIMEOUT,
    }); // Faster wait condition
    log(`[Task Navigated] ${profileUrlAr}`);

    // --- Scrape data points ---
    const results = await Promise.allSettled([
      // Name (0)
      page
        .waitForSelector(".profile_left .consultant_text h3", {
          timeout: ELEMENT_TIMEOUT,
        })
        .then(() =>
          page?.$eval(
            ".profile_left .consultant_text h3",
            (h3) => h3.textContent?.trim() || null
          )
        ),
      // Image URL (1)
      page
        .waitForSelector(".profile_left .consultant_img img", {
          timeout: ELEMENT_TIMEOUT,
        })
        .then(() =>
          page?.$eval(
            ".profile_left .consultant_img img",
            (img) => img.getAttribute("src") || null
          )
        ),
      // Fields (2) - Allow this to fail more easily
      page
        .waitForSelector(".profile_left .consultant_field .field", {
          timeout: ELEMENT_TIMEOUT / 2,
        }) // Shorter timeout for optional fields
        .then(() =>
          page?.$$eval(".profile_left .consultant_field .field", (spans) =>
            spans.map((span) => span?.textContent?.trim() || "").filter(Boolean)
          )
        )
        .catch(() => []),
      // Description (3)
      page
        .waitForSelector("div.about_consultant ul li", {
          timeout: ELEMENT_TIMEOUT,
        })
        .then(() =>
          page?.$$eval("div.about_consultant ul li", (lis) =>
            lis
              .map((li) => li.textContent?.trim() || "")
              .filter((text) => text !== "")
          )
        ), // Price String (4)
      page
        .waitForSelector(".profile_left .contact_consultant h3", {
          timeout: ELEMENT_TIMEOUT,
        })
        .then(() =>
          page?.$eval(
            ".profile_left .contact_consultant h3",
            (h3) => h3.textContent?.trim() || null
          )
        ),
    ]);

    const name = results[0].status === "fulfilled" ? results[0].value : null;
    let imageUrl = results[1].status === "fulfilled" ? results[1].value : null;
    const fields: string[] =
      results[2].status === "fulfilled" && Array.isArray(results[2].value)
        ? results[2].value
        : []; // Ensure it's always a string array
    const description =
      results[3].status === "fulfilled" && Array.isArray(results[3].value)
        ? results[3].value
        : null;
    const priceString =
      results[4].status === "fulfilled" ? results[4].value : null;

    if (imageUrl && !imageUrl.startsWith("http")) {
      imageUrl = new URL(imageUrl, BASE_URL).href;
    }

    const priceData = parsePrice(priceString);

    log(`[Task Done] Successfully processed ${profileUrlAr}`);
    return {
      name: name,
      profileUrl: profileUrlBase,
      imageUrl: imageUrl,
      fields: fields,
      description: description,
      pricePerHour: priceData.price,
      currency: priceData.currency,
    };
  } catch (error) {
    log(
      `[Task Error] Failed processing ${profileUrlAr}:`,
      error instanceof Error ? error.message : error
    );
    return null; // Indicate failure for this URL
  } finally {
    if (page) {
      await page.close(); // Ensure page is closed to free memory
      log(`[Task Closed Page] ${profileUrlAr}`);
    }
  }
}

// --- Main Scraping Orchestration ---
async function runScraper(): Promise<ProcessResult[]> {
  let browser: Browser | null = null;
  const results: ProcessResult[] = [];

  log(
    `Starting parallel scraping for ${consultantProfileUrls.length} URLs with concurrency ${MAX_CONCURRENCY}...`
  );
  console.time("Total Scraping Time"); // Start timer

  try {
    log("Launching browser...");
    browser = await puppeteer.launch({
      executablePath: CHROME_EXECUTABLE_PATH,
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--disable-gpu",
      ],
    });

    const tasks = pooledMap(MAX_CONCURRENCY, consultantProfileUrls, (url) =>
      processUrl(browser!, url)
    );

    // Collect results as they finish
    for await (const result of tasks) {
      if (result) {
        // Only add successful results (non-null)
        results.push(result);
      }
      // Log progress periodically
      if (results.length % 10 === 0) {
        log(
          `Progress: ${results.length}/${consultantProfileUrls.length} URLs processed.`
        );
      }
    }
  } catch (error) {
    console.error(
      "An critical error occurred during the scraping orchestration:",
      error
    );
  } finally {
    if (browser) {
      log("Closing browser...");
      await browser.close();
      log("Browser closed.");
    }
    console.timeEnd("Total Scraping Time"); // End timer
  }

  log(
    `Scraping finished. Successfully extracted data for ${results.length}/${consultantProfileUrls.length} consultants.`
  );
  return results;
}

// --- Run the scraper ---
if (import.meta.main) {
  runScraper()
    .then(async (data) => {
      const successfulData = data.filter(
        (item): item is Consultant => item !== null
      ); // Type guard
      console.log(
        `\n--- Deno Parallel Scraping Results (${successfulData.length} successful) ---`
      );

      // Save to file
      try {
        const jsonData = JSON.stringify(successfulData, null, 2);
        await Deno.writeTextFile("consultants_data.json", jsonData);
        console.log(
          `\nData for ${successfulData.length} consultants saved to consultants_data.json`
        );
      } catch (saveError) {
        console.error("\nError saving data to file:", saveError);
      }
      // Optionally log the data too, but might be too large for console
      // console.log(JSON.stringify(successfulData, null, 2));
    })
    .catch((error) => {
      console.error("\scraper failed:", error);
    });
}
