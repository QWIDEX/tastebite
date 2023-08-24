import { UseFormRegisterReturn } from "react-hook-form";

const CheckboxInput = ({
  register,
  children,
  value,
}: {
  register: UseFormRegisterReturn;
  children: React.ReactNode;
  value: string;
}) => {
  return (
    <label className="group cursor-pointer flex items-center">
      <input
        className="cursor-pointer before:content[''] relative h-5 w-5 appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-9 before:w-9 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-[#ff642f] checked:bg-[#ff642f] checked:before:bg-[#ff642f] hover:before:opacity-10"
        type="checkbox"
        {...register}
        value={value}
      />
      <span className="ml-2 group-hover:text-[#ff642f]">{children}</span>
    </label>
  );
};

export default CheckboxInput;
