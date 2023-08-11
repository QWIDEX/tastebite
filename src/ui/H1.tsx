const H1 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`sm:text-4xl text-3xl font-semibold leading-normal font-serif ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
