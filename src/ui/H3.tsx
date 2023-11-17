const H3 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`sm:text-3xl text-2xl font-medium font-sans ${className}`}>
      {children}
    </h1>
  );
};

export default H3;
