interface TextProps {
  children?: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={`text-center font-rock text-yellow-400 ${className}`}>
      {children}
    </p>
  );
};

export default Text;
