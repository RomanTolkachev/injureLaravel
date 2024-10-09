import { FunctionComponent, InputHTMLAttributes } from "react";
import {
    UseFormRegister,
    Path,
    ValidationRule,
    Controller,
    Control,
    UseFormSetError,
    FieldErrors
} from "react-hook-form";
import InputMask from 'react-input-mask';
import {IInputs} from "./CallUs";

interface Pattern {
    value: RegExp;
    message: string;
}

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<any>,
    label: Path<IInputs>,
    required?: boolean,
    className?: string
    error?: FieldErrors<IInputs>,
    validationPattern?: Pattern
    minLength?: number,
    isPhone?: boolean,
    control?: Control<IInputs, any>
    setError?: UseFormSetError<IInputs>,
}

const errorStyle: string = 'border-red-600 focus:outline-red-600'

export const InputCustom: FunctionComponent<InputCustomProps> = ({
  type,
  placeholder,
  register,
  label,
  required,
  className,
  error,
  validationPattern,
  minLength,
  isPhone,
  control,
  setError
}) => {

    return ( !isPhone ?
        <div className={'relative'}>
            <input
                id={label}
                className={`${className} ${!(error) || error[label] ? errorStyle : ""}
                w-full rounded-[10px] border border-[#6A6A6A]
                px-3 py-2  placeholder-transparent
                focus:ring-1 focus:ring-red-600 lg:py-3
                lg:placeholder:text-lg lg:placeholder:font-medium
                peer appearance-none`}
                type={type}
                placeholder={placeholder}
                {...register(label, {
                    required,
                    pattern: validationPattern ? validationPattern : undefined,
                    minLength: minLength,
                })}
            />
            <label
                htmlFor={label}
                className={"absolute top-0 -translate-y-1/2 left-2 w-fit h-fit text-gray-600 bg-white z-[2] px-1.5 select-none leading-3 text-sm transition-all" +
                    " peer-focus:top-0 " +
                    " peer-focus:text-sm " +
                    " peer-focus:text-gray-600 " +
                    " peer-focus:left-2 " +
                    " peer-placeholder-shown:text-base  " +
                    " peer-placeholder-shown:left-4 " +
                    " peer-placeholder-shown:text-gray-400" +
                    " peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2"}
            >
                {placeholder}
            </label>
        </div>
        :
        <Controller
            name={label}
            control={control}
            rules={{pattern: validationPattern}}
            render={({field}) => (
                <InputMask
                    {...field}
                    className={`${!(error) || error[label] ? errorStyle : ""} w-full rounded-[10px] border border-[#6A6A6A] px-3 py-2 placeholder:text-base placeholder:text-[#6A6A6A] focus:ring-1 focus:ring-red-600 lg:py-3 lg:placeholder:text-lg lg:placeholder:font-medium`}
                    mask={"+7 (999) 999-99-99"}
              placeholder={"Tелефон"}
          >
          </InputMask>
      )}
      />
  );
};
