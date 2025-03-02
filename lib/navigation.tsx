export interface NavigationProps {
  title?: string;
  link: string;
}

export const navigations: NavigationProps[] = [
  { title: "Home", link: "/" },
  { title: "Blog", link: "/blogs" },
  { title: "Member", link: "/member" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];
