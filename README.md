# Personal Portfolio

In this portfolio you will find highlitted services, projects contact page.

## Powered by Next.js and Tailwindcss

Next.js is a framework of React.js. Next.js offers us some of advantages and this project benefits such as image optimization, server side rendering and etc.

[Explore portfolio](https://baris-portfolio2-app.vercel.app)

## Edit contents how you would like

In constants/index.ts file, you can edit texts and images then see your results.

```ts
type MenuLink = "main" | "services" | "portfolio" | "contact";
export const menuLinks: Record<MenuLink, IMenuLink> = {
  main: { name: "Homepage", link: "#main" },
  services: { name: "Services", link: "#services" },
  portfolio: { name: "Portfolio", link: "#portfolio" },
  contact: { name: "Contact", link: "#contact" },
};
```
