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
  const patternString = validationPattern? validationPattern.toString().slice(1, -1) : undefined;

    return ( !isPhone ?
    <input
      className={`${className} ${!(error) || error[label] ? errorStyle : ""} w-full rounded-[10px] border border-[#6A6A6A] px-3 py-2 placeholder:text-base placeholder:text-[#6A6A6A] focus:ring-1 focus:ring-red-600 lg:py-3 lg:placeholder:text-lg lg:placeholder:font-medium`}
      type={type}
      placeholder={placeholder}
      {...register(label, {
          required,
          pattern: validationPattern ? validationPattern : undefined,
          minLength: minLength,
      })}
    /> :
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
