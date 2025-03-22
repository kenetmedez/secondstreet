export interface NavigationProps {
  nav?: {
    pLink?: {
      title?: string;
      link?: string;
    };

    mLink?: { title?: string; link?: string; img?: string }[];
  };
}

export const navigations: NavigationProps[] = [
  { nav: { pLink: { title: "Home", link: "/" } } },
  { nav: { pLink: { title: "Blog", link: "/blog" } } },
  {
    nav: {
      pLink: { title: "Member", link: "/member" },
      mLink: [
        {
          title: "Archangel Salem",
          link: "/member/archangel-salem",
          img: "/assets/team/angel.jpg",
        },
        {
          title: "Kenet Medez",
          link: "/member/kenet-medez",
          img: "/assets/team/kenet.jpg",
        },
        {
          title: "KC Phariss",
          link: "/member/kc-phariss",
          img: "/assets/team/kese.jpg",
        },
        {
          title: "CJ Mendez",
          link: "/member/cj-mendez",
          img: "/assets/team/batits.jpg",
        },
        {
          title: "Nico Rollon",
          link: "/member/nico-rollon",
          img: "/assets/team/nico.jpg",
        },
        {
          title: "Jose Lobino",
          link: "/member/jose-lobino",
          img: "/assets/team/blanch.jpg",
        },
        {
          title: "Federico Ceballos",
          link: "/member/kiko-ceballos",
          img: "/assets/team/kiko.jpg",
        },
        {
          title: "Kenneth Fegarido",
          link: "/member/kenneth-fegarido",
          img: "/assets/team/kenneth.jpg",
        },
        {
          title: "Benedict Navarro",
          link: "/member/benedict-navarro",
          img: "/assets/team/benedict.jpg",
        },
        {
          title: "Selwayne Phariss",
          link: "/member/ade-phariss",
          img: "/assets/team/ade.jpg",
        },
      ],
    },
  },
  { nav: { pLink: { title: "About", link: "/about" } } },
  { nav: { pLink: { title: "Contact", link: "/contact" } } },
];
