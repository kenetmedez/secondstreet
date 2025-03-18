export interface NavigationProps {
  nav?: {
    pLink?: {
      title?: string;
      link?: string;
    };

    mlink?: { title?: string; link?: string }[];
  };
}

export const navigations: NavigationProps[] = [
  { nav: { pLink: { title: "Home", link: "/" } } },
  { nav: { pLink: { title: "Blog", link: "/blog" } } },
  {
    nav: {
      pLink: { title: "Member", link: "/member" },
      mlink: [
        { title: "Archangel Salem", link: "/member/archangel-salem" },
        { title: "Kenet Medez", link: "/member/kenet-medez" },
        { title: "KC Phariss", link: "/member/kc-phariss" },
        { title: "CJ Mendez", link: "/member/cj-mendez" },
        { title: "Nico Rollon", link: "/member/nico-rollon" },
        { title: "Jose Lobino", link: "/member/jose-lobino" },
        { title: "Federico Ceballos", link: "/member/kiko-ceballos" },
        { title: "Kenneth Fegarido", link: "/member/kenneth-fegarido" },
        { title: "Benedict Navarro", link: "/member/benedict-navarro" },
        { title: "Selwayne Phariss", link: "/member/ade-phariss" },
      ],
    },
  },
  { nav: { pLink: { title: "About", link: "/about" } } },
  { nav: { pLink: { title: "Contact", link: "/contact" } } },
];
