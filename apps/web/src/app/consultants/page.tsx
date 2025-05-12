import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/generateSEOMetaData";
import { ConsultantsList } from "@/components/consultants/ConsultantsList";

export const metadata: Metadata = generateSEOMetadata({
  title: "مستشارونا | مستشير",
  description: "تعرف على أفضل المستشارين المختصين في مختلف المجالات",
  imageUrl: "/og-consultants.jpg",
  canonicalUrl: "/consultants",
});

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen p-sections w-full">


      {/* Main Content */}
      <section className="my-26">
        {/* Consultants list component */}
        <ConsultantsList />
      </section>
    </main>
  );
}