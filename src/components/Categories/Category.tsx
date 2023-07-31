import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Category = ({
  label,
  src,
  size = 158,
  className = "",
}: {
  label: string;
  src: string | StaticImport;
  size?: number;
  className?: string;
}): React.ReactElement => {
  return (
    <div
      className={`flex group justify-center cursor-pointer items-center gap-2 flex-col ${className}`}
    >
      <Image
        height={size}
        className="rounded-full group-hover:scale-[105%] shadow-md group-hover:shadow-lg  transition-all duration-300"
        alt={`${label} Category`}
        width={size}
        src={src}
      />
      <h2
        className={`text-base group-hover:text-[#ff642f] sm:text-lg transition-all duration-300 font-semibold leading-normal`}
      >
        {label}
      </h2>
    </div>
  );
};

export default Category;
