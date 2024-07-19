export type SiteConfig = typeof siteConfig;

const navItems = [
  {
    label: "Search",
    href: "/search",
  },
  {
    label: "Docs",
    href: "/docs",
  },

  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  // {
  //   label: "About",
  //   href: "/about",
  // },
];

const siteConfig = {
  name: "Bible Vector Search",
  description: "Search Bible verses by meanings not key words",
  navItems: navItems,
  navMenuItems: navItems,
  links: {
    github: "https://github.com/Antioch-Tech/bible-vector-search-ui",
    docs: "",
    twitter: "",
    discord: "",
    sponsor: "https://github.com/sponsors/tim-hub",
  },
};

export { siteConfig };
