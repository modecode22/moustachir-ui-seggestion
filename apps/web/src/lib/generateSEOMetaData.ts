import { Metadata } from "next/types";

type SEOParams = {
  title: string;
  description: string;
  imageUrl: string;
  canonicalUrl?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: "website" | "article" | "book" | "profile";
  locale?: string;
  siteName?: string;
}

export function generateSEOMetadata({
  title,
  description,
  imageUrl,
  canonicalUrl,
  keywords = ["Buisness", "Consultant", "Web Design", "UI/UX"],
  author = "Selance",
  type = "website",
  locale = "ar_DZ",
  siteName = "Moustachir | مستشير",
}: SEOParams): Metadata {
  const metadata: Metadata = {
    metadataBase: new URL("https://moustachir.dz"),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      locale,
      siteName,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  if (canonicalUrl) {
    metadata.alternates = { canonical: canonicalUrl };
  }

  if (keywords && keywords.length > 0) {
    metadata.keywords = keywords.join(", ");
  }

  if (author) {
    metadata.authors = [{ name: author }];
  }

  return metadata;
}
