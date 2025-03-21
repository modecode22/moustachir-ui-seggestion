import { URL } from "@/lib/constants";

export default async function sitemap() {
 
  // General routes
  const generalRoutes = ["", "about", "contact-us",].map((route) => ({
    url: `${URL}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...generalRoutes];
}
