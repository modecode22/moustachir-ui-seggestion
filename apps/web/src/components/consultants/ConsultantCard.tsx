import Image from "next/image";
import Link from "next/link";

type ConsultantCardProps = {
  consultant: {
    name: string;
    nameInArabic: string;
    profileUrl: string;
    imageUrl: string;
    fields: string[];
    pricePerHour: number;
    currency: string;
  };
};

export function ConsultantCard({ consultant }: ConsultantCardProps) {
  // Extract the consultant ID from the profile URL
  const consultantId = consultant.profileUrl.split('see')[1];
  
  return (
    <div className="group overflow-hidden">
      <Link href={`/consultants/${consultantId}`}>
        <div className="aspect-square w-full rounded object-cover object-top overflow-hidden">
          <Image 
            className="w-full h-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:grayscale-0 group-hover:aspect-[12/10] transform-gpu group-hover:scale-110" 
            src={consultant.imageUrl} 
            alt={consultant.nameInArabic}
            width={826}
            height={826}
          />
        </div>
        <div className="px-2 pt-4 sm:pb-0">
          <div className="flex justify-between">
            <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider group-hover:text-primary-600">{consultant.nameInArabic}</h3>
            <span className="text-primary-300 text-xs">
              {consultant.pricePerHour} {consultant.currency}
            </span>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex flex-wrap gap-1 max-w-[70%]">
              {consultant.fields.slice(0, 2).map((field, i) => (
                <span
                  key={i}
                  className="bg-neutral-100 shadow text-primary-500 inline-block translate-y-6 rounded px-2 py-0.5 text-xs opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ transitionDelay: `${i * 75}ms` }}
                >
                  {field}
                </span>
              ))}
              {consultant.fields.length > 2 && (
                <span className="text-neutral-500 translate-y-6 text-xs opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" 
                  style={{ transitionDelay: `${2 * 75}ms` }}>
                  +{consultant.fields.length - 2}
                </span>
              )}
            </div>
            <span className="text-primary-600 dark:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
              المزيد
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}