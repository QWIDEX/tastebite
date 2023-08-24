const H4 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`sm:text-2xl text-xl font-medium font-serif ${className}`}>
      {children}
    </h1>
  );
};

export default H4;
