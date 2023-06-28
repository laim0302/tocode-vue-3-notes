export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "http://localhost:8080/" : "https://site.name",
};

export const app = {
  title: "Template",
};

/////////// Эти ссылки живут в routes.js /////
// export const links = [
//   {
//     title: "Home",
//     alias: "home",
//     url: "/",
//   },
//   {
//     title: "About",
//     alias: "about",
//     url: "/about",
//   },
// ];
