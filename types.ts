export interface Post  {
    _id: string;
    title: string;
    excerpt: string;
    body: string;
    mainImage: MainImage;
    alt: string;
  };
  
  export interface MainImage {
    image: SanityImage;
    alt?: string;
  }
  
  export interface SanityImage {
    priority?: boolean | false;
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }
  