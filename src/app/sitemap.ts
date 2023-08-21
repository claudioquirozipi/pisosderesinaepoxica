import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.pisosderesinaepoxica.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.pisosderesinaepoxica.com/aplicacion",
      lastModified: new Date(),
    },
  ];
}
