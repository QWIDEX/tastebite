const H2 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`sm:text-4xl text-3xl font-semibold font-serif ${className}`}
    >
      {children}
    </h1>
  );
};

export default H2;
