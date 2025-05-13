import { Button } from "@repo/ui/button";
import Link from "next/link";
import { ConsultantCard } from "../consultants/ConsultantCard";
import { consultantsData } from "../consultants/consultants-data";

export default function ConsultantsSection() {
  const featuredConsultants = consultantsData.slice(0, 10);
  return (
    <section
      id="consultants"
      className="p-sections bg-white/80 py-20 shadow-xl shadow-neutral-100 transition-transform duration-1000"
    >
      <div className="mx-auto">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-primary-500 text-right text-5xl font-bold lg:text-6xl">مستشارونا</h2>
          <Link href="/consultants">
            <Button variant="primary-outline" size="lg" className="whitespace-nowrap hidden md:block">
              عرض الكل
            </Button>
          </Link>
        </div>
        <p className="mb-10 max-w-4xl text-lg text-neutral-700">
          نقدم لكم نخبة من أفضل المستشارين في مختلف المجالات، تمت دعوتهم بعناية لتقديم خبراتهم وتجاربهم لمساعدتكم في
          تحقيق أهدافكم.
        </p>
        <div className="mt-12">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {featuredConsultants.map((consultant, index) => (
              <ConsultantCard key={index} consultant={consultant} />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/consultants" className="inline-block">
            <Button variant="primary-outline" size="lg">
              عرض جميع المستشارين
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
