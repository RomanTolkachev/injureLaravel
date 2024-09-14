import { FunctionComponent, InputHTMLAttributes } from "react";

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputCustom: FunctionComponent<InputCustomProps> = ({
  type,
  placeholder,
}) => {
  return (
    <input
      className="w-full rounded-[10px] border border-[#6A6A6A] px-3 py-2 placeholder:text-base placeholder:text-[#6A6A6A] focus:ring-1 focus:ring-red-600 lg:py-3 lg:placeholder:text-lg lg:placeholder:font-medium"
      type={type}
      placeholder={placeholder}
    />
  );
};
