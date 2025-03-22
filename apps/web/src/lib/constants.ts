import { PiBuildings, PiCalendarCheck, PiDevices, PiFileDashed, PiGraduationCap, PiOfficeChair } from "react-icons/pi";

export const URL = "https://moustachir-ui-seggestion.vercel.app";

export const navigation = [
  { name: "الرئيسية", href: "#" },
  { name: "خدماتنا", href: "#services" },
  { name: "مستشارونا", href: "#consultants" },
  { name: "من نحن", href: "#about" },
  { name: "اتصل بنا", href: "#contact" },
];

export const services = [
  {
    title: "مساحة العمل التشاركي",
    description: "نوفر خدمة كراء مكاتب وقاعات فردية وجماعية مجهزة للأفراد والمؤسسات",
    icon: PiOfficeChair,
  },
  {
    title: "دورات وحصص التدريبية",
    description: "نقدم لك دورات تدريبية و حصص تكوينية رفقة مدربين ذوي كفاءة عالية في مختلف المجالات",
    icon: PiGraduationCap,
  },
  {
    title: "توطين المؤسسات",
    description: "نوفر خدمات توطين المؤسسات وفق عروض مختلفة",
    icon: PiBuildings,
  },
  {
    title: "مستشير كوم",
    description:
      "نقدم خدمات تطوير المواقع والتطبيقات، التسويق الرقمي ومرافقة في تطوير إستراتيجية التسويق الرقمي للشركات",
    icon: PiDevices,
  },
  {
    title: "مركز إستشارات",
    description:
      "يمكنك حجز إستشارة عند أحد مستشارينا بمجرد نقرة واحدة عبر موقعنا moustachir.dz كما نقدم أيضا آستشارات حضورية",
    icon: PiCalendarCheck,
  },
  {
    title: "التوكيل لإنشاء المؤسسات",
    description:
      "نقوم بالنيابة عنكم بكل الإجراءات الإدارية والقانونية ونمثلكم لدى الإدارات المعنية لإنشاء مؤسستكم من الالف للياء",
    icon: PiFileDashed,
  },
];
