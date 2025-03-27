import { Button } from "@repo/ui/button";
import LogoHead from "@repo/ui/icons/LogoHead";
import Image from "next/image";

const dummyFienlds = [
  { id: 1, name: "الشركات الناشئة" },
  { id: 2, name: "التصدير والاستيراد" },
  { id: 3, name: "التسويق الرقمي" },
  // { id: 4, name: "التجارة الإلكترونية" },
  // { id: 5, name: "التجارة الدولية" },
  { id: 6, name: "الاستثمار" },
] as const;

const researcherProfile = [
  {
    id: 1,
    details: "أستاذ باحث في التسويق بكلية الدراسات التجارية العليا HEC الجزائر، شغوف بتكنولوجيا المعلومات والاتصالات",
  },
  {
    id: 2,
    details:
      "حاصل على شهادة في التجارة الدولية ودرجة الماجستير في التسويق بعد أن أكمل فترة دراسية في تكنولوجيا المعلومات في جامعة هواري بومدين للعلوم والتكنولوجيا",
  },
  {
    id: 3,
    details:
      "يعمل على التسويق من خلال تكنولوجيا المعلومات والاتصالات في عملية تصدير المنتجات الجزائرية غير الهيدروكربونية",
  },
  {
    id: 4,
    details: "عضو مؤسس في مكتب البحوث والتحقيقات في التسويق",
  },
  {
    id: 5,
    details:
      "أطلق أول تطبيق استقصائي ACHO هدفه جعل التسويق وتكنولوجيا المعلومات والاتصالات المحور الاستراتيجي على مستوى الشركة الجزائرية",
  },
  {
    id: 6,
    details:
      "يقدم استشارات في مجال: ريادة الأعمال المؤسسات الناشئة Start-Up التصدير والإستيراد دراسة السوق، الذكاء الإقتصادي، إستراتيجية التسويق",
  },
] as const;

const page = () => {
  return (
    <section className="h-[100vh]">
      <div className="relative">
        <div className="p-sections shadow-custom bg-primary-500 from-primary-300 via-primary-400 relative flex h-[20rem] w-full items-center justify-between gap-4 overflow-hidden bg-gradient-to-tr from-10% via-60% to-70% py-4 lg:flex-row">
          <LogoHead pathClasses="stroke-primary-300" className="absolute w-180 md:w-full lg:mt-44" />
        </div>
        <div
          style={{ backgroundImage: "url('/noise.png')" }}
          className="pointer-events-none absolute inset-0 [z-index:-1] bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.015]"
        ></div>
        <section className="p-sections relative bottom-[4rem] flex w-full flex-row-reverse gap-4 sm:bottom-[6rem] md:bottom-[8rem] md:gap-8">
          <section className="grid w-full grid-rows-1 md:grid-rows-2">
            <section className="flex min-h-[2rem] items-center 2xl:min-h-[4rem]">
              <h4 className="z-10 flex h-full w-full flex-col justify-start text-5xl text-neutral-50 lg:text-7xl">
                <span className="font-serif">5000</span>
                <span className="bg-primary-300 w-fit rounded px-3 text-base lg:text-lg">دينار جزائري / الساعة</span>
              </h4>
            </section>
            <section className="flex flex-col justify-between gap-3 pt-2 md:flex-row md:pt-3">
              <div className="flex h-fit grow flex-col gap-2 md:gap-3">
                <h2 className="text-primary-500 text-3xl font-medium lg:text-5xl">بابا أحمد هشام</h2>
                <div className="hidden w-full flex-wrap gap-1 md:flex xl:max-w-[80%]">
                  {dummyFienlds.map((field) => (
                    <span
                      key={field.id}
                      className="bg-primary-300/80 inline-block rounded px-2 py-0.5 text-[9px] font-medium text-neutral-50 md:px-4 md:py-1 md:text-sm"
                    >
                      {field.name}
                    </span>
                  ))}
                </div>
              </div>
              <Button size="lg" variant="dark-solid" className="hidden min-w-52 self-end md:block">
                اطلب الاستشارة
              </Button>
            </section>
          </section>

          <div className="relative min-h-[8rem] min-w-[8rem] flex-shrink-0 self-start rounded p-0 sm:min-h-[12rem] sm:min-w-[12rem] md:min-h-[16rem] md:min-w-[16rem]">
            <Image
              src={"/HichamBABAAHMED.jpg"}
              fill
              className="absolute inset-0 m-0 rounded border-8 border-white/50 object-cover shadow-sm backdrop-blur-md"
              alt="profile page"
            />
          </div>
        </section>
        <div className="p-sections -mt-[3rem] flex flex-col gap-3">
          <div className="flex flex-wrap gap-1 md:hidden">
            {dummyFienlds.map((field) => (
              <span
                key={field.id}
                className="bg-primary-300/80 inline-block rounded px-2 py-0.5 text-xs font-medium text-neutral-50 md:px-4 md:py-1 md:text-sm"
              >
                {field.name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <Button variant="dark-solid" className="w-full md:hidden">
              اطلب الاستشارة
            </Button>
          </div>
        </div>
        <div className="p-sections">
          <section className="flex list-disc flex-col gap-3 rounded bg-white/80 p-6 py-9 shadow-xl shadow-neutral-100 xl:mr-[16rem]">
            {researcherProfile.map((re) => {
              return (
                <p key={re.id} className="max-w-7xl text-neutral-900 lg:text-xl xl:text-2xl">
                  ● {re.details}.
                </p>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
