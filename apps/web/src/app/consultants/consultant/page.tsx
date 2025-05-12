"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LogoHead from "@repo/ui/icons/LogoHead";
import Image from "next/image";
import { consultantsData } from "@/components/consultants/consultants-data";
import Link from "next/link";
import { cn } from "@repo/ui/lib/utils";
import { buttonVariants } from "@repo/ui/stylesui/buttons";

// Define the consultant data type as it comes from the data source
type ConsultantData = {
  name: string;
  nameInArabic: string;
  profileUrl: string;
  imageUrl: string;
  fields: string[];
  pricePerHour: number;
  currency: string;
  bookPageUrl: string;
  description?: string[]; 
};

// Create a separate component that uses useSearchParams
const ConsultantContent = () => {
  const searchParams = useSearchParams();
  const consultantId = searchParams.get("id");
  const [consultant, setConsultant] = useState<ConsultantData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (consultantId) {
      // Find the consultant data based on the ID in the URL
      const found = consultantsData.find(c => c.profileUrl.includes(consultantId));
      if (found) {
        // Ensure found consultant has a description property
        setConsultant({
          ...found,
          description: found.description || []
        });
      }
      setLoading(false);
    }
  }, [consultantId]);

  if (loading) {
    return (
      <section className="min-h-[100vh] p-sections flex items-center justify-center">
        <div className="text-2xl text-neutral-500">جاري التحميل...</div>
      </section>
    );
  }

  if (!consultant) {
    return (
      <section className="min-h-[100vh] p-sections flex flex-col items-center justify-center gap-4">
        <div className="text-2xl text-neutral-500">لم يتم العثور على المستشار</div>
        <Link className={cn(buttonVariants({variant: "primary-solid"}))} href="/consultants">العودة إلى قائمة المستشارين</Link>
      </section>
    );
  }

  return (
    <section className="min-h-[100vh] pb-20">
      <div className="relative">
        <div className="p-sections shadow-custom bg-primary-500 from-primary-300 via-primary-400 relative flex md:h-[20rem] h-[12rem] w-full items-center justify-between gap-4 overflow-hidden bg-gradient-to-tr from-10% via-60% to-70% py-4 lg:flex-row">
          <LogoHead pathClasses="stroke-primary-300" className="absolute w-180 md:w-full lg:mt-44" />
        </div>
        <div
          style={{ backgroundImage: "url('/noise.png')" }}
          className="pointer-events-none absolute inset-0 [z-index:-1] bg-[size:180px] bg-repeat opacity-[0.035] dark:opacity-[0.015]"
        ></div>
        <section className="p-sections relative bottom-[4rem] flex w-full flex-row-reverse gap-4 sm:bottom-[6rem] md:bottom-[8rem] md:gap-8">
          <section className="flex flex-col w-full lg:gap-0 md:gap-12 sm:gap-6 lg:grid grid-rows-1 md:grid-rows-2">
            <h4 className="z-10 flex w-full flex-col justify-start text-5xl text-neutral-50 lg:text-7xl">
              <span className="font-serif">{consultant.pricePerHour}</span>
              <span className="bg-primary-300 w-fit rounded px-3 text-base lg:text-lg">{consultant.currency} / الساعة</span>
            </h4>
            <section className="flex flex-col justify-between gap-3 pt-2 md:flex-row md:pt-3">
              <div className="flex h-fit grow flex-col gap-2 md:gap-3">
                <h2 className="text-primary-500 text-3xl font-medium lg:text-5xl">{consultant.nameInArabic}</h2>
                <div className="hidden w-full flex-wrap gap-1 md:flex xl:max-w-[80%]">
                  {consultant.fields.map((field, index) => (
                    <span
                      key={index}
                      className="bg-primary-300/80 inline-block rounded px-2 py-0.5 text-[9px] font-medium text-neutral-50 md:px-4 md:py-1 md:text-sm"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
              <Link className={cn(buttonVariants({variant: "dark-solid", size:"lg"}),"hidden  min-w-52 self-end md:flex")}  href={consultant.bookPageUrl} target="_blank">
                اطلب الاستشارة
              </Link>
            </section>
          </section>

          <div className="relative min-h-[8rem] min-w-[8rem] flex-shrink-0 self-start rounded p-0 sm:min-h-[12rem] sm:min-w-[12rem] md:min-h-[16rem] md:min-w-[16rem]">
            <Image
              src={consultant.imageUrl}
              fill
              className="absolute inset-0 m-0 rounded border-8 border-white/50 object-cover shadow-sm backdrop-blur-md"
              alt={consultant.nameInArabic}
            />
          </div>
        </section>
        <div className="p-sections -mt-[3rem] flex flex-col gap-3">
          <div className="flex flex-wrap gap-1 md:hidden">
            {consultant.fields.map((field, index) => (
              <span
                key={index}
                className="bg-primary-300/80 inline-block rounded px-2 py-0.5 text-xs font-medium text-neutral-50 md:px-4 md:py-1 md:text-sm"
              >
                {field}
              </span>
            ))}
          </div>
          <div className="pb-6 flex items-center gap-3 md:hidden">
            <Link  className={cn(buttonVariants({variant: "dark-solid", size:"lg"}),"w-full md:hidden")} href={consultant.bookPageUrl} target="_blank">
              اطلب الاستشارة
            </Link>
          </div>
        </div>
        <div className="p-sections">
          <section className="flex flex-col flex-wrap gap-3 rounded sm:bg-white/80 sm:p-6 sm:py-9 py-6 sm:shadow-xl shadow-neutral-100 xl:mr-[16rem]">
          <p className="max-w-7xl text-neutral-800 xl:text-lg">
            {consultant.description?.join(' ،')}
              </p>
            {!consultant.description?.length && (
              <p className="max-w-7xl text-neutral-800 xl:text-lg">
                لا يوجد وصف متاح لهذا المستشار حاليًا.
              </p>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

// Loading fallback for Suspense
const ConsultantLoading = () => {
  return (
    <section className="min-h-[100vh] p-sections flex items-center justify-center">
      <div className="text-2xl text-neutral-500">جاري التحميل...</div>
    </section>
  );
};

// Main component that wraps the ConsultantContent in Suspense
const ConsultantPage = () => {
  return (
    <Suspense fallback={<ConsultantLoading />}>
      <ConsultantContent />
    </Suspense>
  );
};

export default ConsultantPage;