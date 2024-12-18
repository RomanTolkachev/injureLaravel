import React, {FunctionComponent, InputHTMLAttributes} from "react";
import {
    UseFormRegister,
    Controller,
    Control,
    UseFormSetError,
} from "react-hook-form";
import InputMask from 'react-input-mask';
import {IInputs} from "../utils/Form";

interface Pattern {
    value: RegExp;
    message: string;
}

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<any>,
    label: string,
    required?: boolean,
    className?: string
    error?: any,
    validationPattern?: Pattern
    minLength?: number,
    isPhone?: boolean,
    control?: Control<IInputs>
    setError?: UseFormSetError<IInputs>,
    isSubmitted?: boolean
    validationValue?: string
    id: string
}

const errorStyle: string = 'border-red-600 focus:outline-red-600'

export const InputCustom: FunctionComponent<InputCustomProps> = ({
  type,
  placeholder,
  register,
  label,
  className,
  error,
  validationPattern,
  minLength,
  isPhone,
  control,
  isSubmitted,
  validationValue,
  id
}) => {
    return ( !isPhone ?
        <>
            <div className={'relative'} onClick={e => e.stopPropagation()}>
                <input
                    id={id}
                    className={`${className} ${!(error) || error[label] ? errorStyle : ""}
                        w-full rounded-[10px] border border-[#6A6A6A]
                        px-3 py-2  placeholder-transparent
                        focus:ring-1 focus:ring-red-600 lg:py-3
                        peer appearance-none placeholder-select-none`
                    }
                    type={type}
                    placeholder={placeholder}
                    {...register(label, {
                        pattern: validationPattern ? validationPattern : undefined,
                        minLength: minLength,
                        required: label === "name" ? "обязательное поле" : false,
                        validate: value => {
                            if (validationValue) {
                                return true
                            } else  {
                                return value ? true : "заполните одно из полей"
                            }
                        }
                    })}

                />
                <label
                    htmlFor={id}
                    className={"select-none absolute hover:cursor-text top-0 -translate-y-1/2 left-2 w-fit h-fit text-gray-600 bg-white z-[2] px-1.5 leading-3 text-sm transition-all" +
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
                {error && error[label] && isSubmitted
                    ? <span className={"absolute bottom-[calc(0px+2px)] translate-y-1/2 right-4 leading-3 bg-white text-red-600 text-sm px-1.5 select-none"}>
                        {error[label]?.message}
                      </span>
                    : null
                }
            </div>
        </>
            :
        <Controller
            name={label as any}
            control={control}
            rules={{pattern: validationPattern ? validationPattern : undefined,
                    validate: value => {
                        if (validationValue) {
                        return true
                        } else  {
                        return value ? true : "заполните одно из полей"
                    }}}}
            render={({field}) => (
                <div className={'relative'}>
                    <InputMask
                        {...field}
                        id={id}
                        className={
                            `${!(error) || error[label] ? errorStyle : ""}
                            w-full rounded-[10px] border border-[#6A6A6A]
                            px-3 py-2  placeholder-transparent
                            focus:ring-1 focus:ring-red-600 lg:py-3
                            lg:placeholder:text-lg lg:placeholder:font-medium
                            peer appearance-none placeholder-select-none`
                        }
                        mask={"+7 (999) 999-99-99"}
                        placeholder={"Tелефон"}>

                    </InputMask>
                    <label
                        htmlFor={id}
                        className={"select-none absolute hover:cursor-text top-0 -translate-y-1/2 left-2 w-fit h-fit text-gray-600 bg-white z-[2] px-1.5 leading-3 text-sm transition-all" +
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
                    {error && error[label] && isSubmitted
                        ? <span className={"absolute bottom-[calc(0px+2px)] translate-y-1/2 right-4 leading-3 bg-white text-red-600 text-sm px-1.5 select-none"}>
                        {error[label]?.message}
                      </span>
                        : null
                    }
                </div>
            )}
        />
    );
};
