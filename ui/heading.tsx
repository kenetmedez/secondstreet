interface HeadingProps {
  heading?: string;
  style?: string;
}

const Heading = ({ heading, style }: HeadingProps) => {
  return <h1 className={style}>{heading}</h1>;
};

export default Heading;
