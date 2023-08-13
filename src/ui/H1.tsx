const H1 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`font-serif text-5xl font-semibold  ${className}`}>
      {children}
    </h1>
  );
};

export default H1;
