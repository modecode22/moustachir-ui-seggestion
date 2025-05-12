// --- Type Definition ---
type Consultant = {
    name: string;
    profileUrl: string;
    imageUrl: string;
    fields: string[];
    description: string[];
    pricePerHour: number;
    currency: string;
  }
  
  // --- Translation Mapping ---
  const fieldTranslations: Record<string, string> = {
    "Arts and Media": "الفنون والإعلام",
    "3D design and printing": "التصميم والطباعة ثلاثية الأبعاد",
    "Graphic design": "التصميم الجرافيكي",
    "Start-Ups": "الشركات الناشئة",
    "E-Commerce , COD Delivery and E-Payment.":
      "التجارة الإلكترونية، التوصيل عند الاستلام والدفع الإلكتروني",
    "Website programming": "برمجة مواقع الويب",
    "Application programming": "برمجة التطبيقات",
    "Entrepreneurs Consulting": "استشارات رواد الأعمال",
    "Economic and financial": "استشارات اقتصادية ومالية",
    "Export and import": "التصدير والاستيراد",
    Legal: "استشارات قانونية",
    "Content creation and digital marketing": "إنشاء المحتوى والتسويق الرقمي",
    "Educational and language": "استشارات تعليمية ولغوية",
    "Information and network security": "أمن المعلومات والشبكات",
    "Architectural and civil engineering": "الهندسة المعمارية والمدنية",
    "Cloud computing": "الحوسبة السحابية",
    "Operating systems": "أنظمة التشغيل",
    Agricultural: "استشارات زراعية",
    Marine: "استشارات بحرية",
    Insurance: "استشارات التأمين",
    Tourism: "استشارات سياحية",
    Nutrition: "استشارات التغذية",
    Social: "استشارات اجتماعية",
    Robotics: "الروبوتات",
    "Voice over": "التعليق الصوتي",
    "Artificial intelligence": "الذكاء الاصطناعي",
    "human resources": "الموارد البشرية",
    "Data analysis": "تحليل البيانات",
    industrial: "استشارات صناعية",
    "E-commerce": "التجارة الإلكترونية",
    Immobilier: "العقارات",
    Pharmaceutique: "استشارات صيدلانية",
  };
  
  // --- Main Processing Function ---
  async function translateConsultantsFields(
    inputFilePath: string,
    outputFilePath: string
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
        // Try to parse the entire file as JSON
        const parsed = JSON.parse(data);
  
        // --- Data Structure Detection ---
        if (Array.isArray(parsed)) {
          consultants = parsed;
        } else if (parsed && typeof parsed === "object") {
          // Look for an array property that contains consultant data
          const arrayProps = Object.keys(parsed).filter((key) =>
            Array.isArray(parsed[key])
          );
  
          for (const prop of arrayProps) {
            if (
              parsed[prop].length > 0 &&
              typeof parsed[prop][0] === "object" &&
              "name" in parsed[prop][0] &&
              "fields" in parsed[prop][0]
            ) {
              consultants = parsed[prop];
              break;
            }
          }
  
          if (consultants.length === 0) {
            console.error("No consultant data found in the JSON object");
            return;
          }
        } else {
          console.error("The parsed data is not an array or object");
          return;
        }
      } catch (parseError) {
        console.error("Failed to parse the file as JSON:", parseError);
        return;
      }
  
      // --- Process Consultants ---
      for (let i = 0; i < consultants.length; i++) {
        const consultant = consultants[i];
        console.log(
          `Translating fields for consultant ${i + 1}/${consultants.length}: ${consultant.name}`
        );
  
        // --- Field Translation ---
        if (Array.isArray(consultant.fields)) {
          const translatedFields: string[] = [];
          for (const field of consultant.fields) {
            // Case-insensitive lookup in the mapping
            const translatedField =
              Object.entries(fieldTranslations).find(
                ([en, _]) => en.toLowerCase() === field.toLowerCase()
              )?.[1] || field;
  
            translatedFields.push(translatedField);
          }
  
          consultant.fields = translatedFields;
        } else {
          console.warn(
            `Consultant ${consultant.name} has no fields array or it's not properly formatted`
          );
        }
      }
  
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
        JSON.stringify(consultants, null, 2)
      );
  
      console.log(
        `Translation completed successfully. Output saved to ${outputFilePath}`
      );
    } catch (error) {
      console.error("Error processing the JSON file:", error);
    }
  }
  
  // --- Main Execution ---
  if (import.meta.main) {
    // --- Parse Command Line Arguments ---
    const args = Deno.args;
  
    // Show usage if --help is specified
    if (args.includes("--help") || args.includes("-h")) {
      console.log(`
    Usage: deno run --allow-read --allow-write translate_fields.ts [input-file] [output-file]
    
    Translates consultant fields from English to Arabic.
    
    Arguments:
      input-file   Path to the input JSON file (default: consultants_data.json)
      output-file  Path to the output JSON file (default: translated_consultants.json)
    
    Options:
      -h, --help   Show this help message
      `);
      Deno.exit(0);
    }
  
    const inputFile = args[0] || "consultants_data.json";
    const outputFile = args[1] || "translated_consultants.json";
  
    // --- Run Translation Process ---
    translateConsultantsFields(inputFile, outputFile);
  }