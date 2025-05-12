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
      for (let i = 0; i < consultants.length; i++) {
        const consultant = consultants[i];
        console.log(`Processing consultant ${i + 1}/${consultants.length}: ${consultant.name}`);
        
        // --- Name Translation ---
        if (nameTranslations && nameTranslations[consultant.name]) {
          consultant.nameInArabic = nameTranslations[consultant.name];
        } else {
          // Otherwise, add an empty string as placeholder
          consultant.nameInArabic = "";
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
  
      console.log(`Successfully added nameInArabic field to all consultants.`);
      console.log(`Output saved to: ${outputFilePath}`);
    } catch (error) {
      console.error("Error processing the JSON file:", error);
    }
  }
  
  // --- Main Execution ---
  if (import.meta.main) {
    // --- Parse Command Line Arguments ---
    const args = Deno.args;
  
    if (args.includes("--help") || args.includes("-h")) {
      console.log(`
    Usage: deno run --allow-read --allow-write add_arabic_names.ts [input-file] [output-file]
    
    Adds a nameInArabic field to each consultant in the JSON file.
    
    Arguments:
      input-file   Path to the input JSON file (default: consultants_data.json)
      output-file  Path to the output JSON file (default: consultants_with_arabic_names.json)
    
    Options:
      -h, --help   Show this help message
      `);
      Deno.exit(0);
    }
  
    const inputFile = args[0] || "data.json";
    const outputFile = args[1] || "data_with_arabic_names.json";
  
    // --- Name Translation Mapping ---
    const nameTranslations: Record<string, string> = {
      "NASREDDINE LAIB": "نصر الدين لعايب",
      "Hocine HADID": "حسين حديد",
      "Karim OULD AMMAR": "كريم ولد عمار",
      "Hicham BABA AHMED": "هشام بابا أحمد",
      "Attef Nasri": "عاطف ناصري",
      "Fethi Boukhors": "فتحي بوخرص",
      "Nor El Houda Bouzegaou": "نور الهدى بوزقاو",
      "Oualid Benkorichi": "وليد بن قريشي",
      "Leila Benyoucef": "ليلى بن يوسف",
      "BEDJA SELIM": "سليم بجة",
      "Ammar Abbaci": "عمار عباسي",
      "fatma sadouki": "فاطمة صدوقي",
      "Abdeldjebar Benabes": "عبد الجبار بن عباس",
      "Djafer moudjahid": "جعفر مجاهد",
      "Lotfi Your Machine": "لطفي يور ماشين",
      "Nabil Atmania": "نبيل عثمانية",
      "Karim Guiri": "كريم قيري",
      "Amer bouraiou": "عامر بوريو",
      "Mohamed Tahar Grairia": "محمد الطاهر قرايرية",
      "IDRISS ANNABI": "ادريس عنابي",
      "Mohammed EMBAREK": "مبارك محمد",
      "Billel Bounil": "بونيل بلال",
      "IHAB CHERITI": "إيهاب شريطي",
      "Amine ZAHRAOUI": "أمين زهراوي",
      "Abdelghani BOUNAH": "بوناح عبد الغني",
      "Abdebassat Telaidjia": "عبدالباسط ثلايجية",
      "omar fekhar": "عمر فخار",
      "fatiha Mounaouli": "فتيحة",
      "Aimad DJEHICHE": "عماد جهيش",
      "Nabil Hadj-Ahmed": "نبيل حاج أحمد",
      "Ouçama Ifrah": "أسامة إفراح",
      "ayata elfaidi": "الفايدي عياطة",
      "El Amine Derguine": "درڨين الامين",
      "Kheireddine Boulefa": "خيرالدين بولفعة",
      "tairi sourrour": "طايري سرور",
      "YAHIA ALMOUBOUDI": "يحيى المبودي",
      "Mohamed Nadji Mecheri": "محمد ناجي مشري",
      "Djelloul Bouida": "جلول بويدة",
      "RADHWANE BEN MBAREK": "بن مبارك رضوان",
      "Amira Irmal": "أميرة ارمال",
      "Ahmed BENDJELLOUL": "أحمد بن جلول",
      "nazim berarhi": "برارحي نزيم",
      "Karima BERRAYAH": "برايح كريمة",
      "Ayoub Boukhatem": "أيوب بوخاتم",
      "Djamel Eddine Hadjkouider": "حاج قويدر جمال الدين",
      "Ismail kahlouche": "اسماعيل كحلوش",
      "Adnane Mohamed Menai": "مناعي عدنان محمد",
      "Madjid Sedjal": "عبد المجيد سجال",
      "Abdelhak Bendjebara": "عبدالحق بن جبارة",
      "Mustapha Islem ZOUAGHI": "مصطفى اسلام زواغي",
      "Karim ikhlef": "كريم إخلاف",
      "abderrahim abdellaoui": "عبد الرحيم عبد اللاوي",
      "Tadjeddine Bachir": "تاج الدين بشير",
      "hichem houadji": "هشام هواجي",
      "Mohamed Lamine Mehri": "محمد الأمين مهري",
      "ali maamri": "علي معمري",
      "Ammar Nazim NOUAIL": "عمار نزيم",
      "thamer zebda": "ثامر زبدة",
      "Samir kebour": "سمير كبور",
      "Yaakoub Benarab": "يعقوب بن عراب",
      "HELLASSA Oussama": "أسامة حلاسة",
      "yacine abidat": "ياسين عبيدات",
      "Mohamed Lakhdar Boussaha": "بوساحة محمد لخضر",
      "OKBA GHERBI": "عقبة غربي",
      "Djallal Bouabdallah": "بو عبد الله جلال",
      "Fawzi berrahma": "فوزي برحمة",
      "youssef Boudjema": "بوجمعة يوسف",
      "ABDELBAKI MOKHTARI": "مختاري عبد الباقي",
      "Mohamed BOUCHERIT": "بوشريط محمد رضا",
      "Adel Sahraoui": "عادل صحراوي",
      "Mounir BELALI": "منير بلالي",
      "Hamza Ben Aoun": "حمزة بن عون",
      "Jaber HADBOUNE": "جابر حدبون",
      "Shams Shaba": "شابا شمس",
      "MOHAMED SABHI SANADIKI": "صناديقي محمد صبحي",
      "Fateh Eddine KEZZIM": "قزيم فاتح الدين",
      "waheb BENMBAREK": "عبد الوهاب بن مبارك",
      "FATHi GASMI": "فتحي قاسمي",
      "chemseddine habhoub": "شمس الدين حبحوب",
      "mouna abdellaoui": "عبد اللاوي منى",
      "Assia BESSALEM": "آسيا بسالم",
      "Zouhir MEKDADE": "زهير مقداد",
      "Ilyes Chouikhi": "إلياس شويخي"
    };
  
    // --- Run Translation Process ---
    addArabicNameField(inputFile, outputFile, nameTranslations);
  }