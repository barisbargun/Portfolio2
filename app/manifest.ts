import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My beautiful Portfolio",
    short_name: "Portfolio",
    description:
      "Hello, I'm Baris, a fullstack developer. I develop websites using React.js, Next.js, Express.js, and Tailwind CSS",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon/apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
    ],
  };
}
