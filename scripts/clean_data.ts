const newUrl= "https://moustachir.dz/ar/consultant/book/" 


// --- Type Definition ---
type Consultant = {
    name: string;
    nameInArabic?: string;
    profileUrl: string;
    imageUrl: string;
    fields: string[];
    description: string[];
    pricePerHour: number;
    currency: string;
  }
  
  // --- Main Processing Function ---
  async function addArabicNameField(
    inputFilePath: string,
    outputFilePath: string,
    nameTranslations?: Record<string, string> // Optional mapping of name translations
  ): Promise<void> {
    try {
      console.log(`Reading from: ${inputFilePath}`);
  
      // --- File Validation ---
      try {
        await Deno.stat(inputFilePath);
      } catch {
        console.error(`Input file not found: ${inputFilePath}`);
        return;
      }
  
      // --- Read and Parse JSON ---
      const data = await Deno.readTextFile(inputFilePath);
      let consultants: Consultant[] = [];
  
      try {
        consultants = JSON.parse(data);
      } catch (error) {
        console.error("Failed to parse the file as JSON:", error);
        return;
      }
  
      // --- Process Consultants ---
      const updatedConsultants = consultants.map((consultant) => {
        // Remove "https://moustachir.com/consultant/" from the profile URL
        const profileId = consultant.profileUrl.replace("https://moustachir.com/consultant/see", "");
        const newUrl = "https://moustachir.dz/ar/consultant/book/";
        return {...consultant, bookPageUrl: newUrl + profileId};
      });
  
      // --- Output Directory Creation ---
      const lastSlashIndex = outputFilePath.lastIndexOf("/");
      if (lastSlashIndex !== -1) {
        const outputDir = outputFilePath.substring(0, lastSlashIndex);
        try {
          await Deno.mkdir(outputDir, { recursive: true });
        } catch (_) {
          // Directory might already exist, ignore
        }
      }
  
      // --- Write Output File ---
      await Deno.writeTextFile(
        outputFilePath,
        JSON.stringify(updatedConsultants, null, 2)
      );
  
      console.log(`Successfully added nameInArabic field to all consultants.`);
      console.log(`Output saved to: ${outputFilePath}`);
    } catch (error) {
      console.error("Error processing the JSON file:", error);
    }
  }
  
  // --- Main Execution ---
  if (import.meta.main) {
  
  
    const inputFile = "data_with_arabic_names.json";
    const outputFile =  "data_with_arabic_names_and_book_page_urls.json";

  
    // --- Run Translation Process ---
    addArabicNameField(inputFile, outputFile, );
  }