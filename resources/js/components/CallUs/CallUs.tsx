import {FunctionComponent, useRef} from "react";
import { InputCustom } from "./InputCustom";
import { CallUsPhoto } from "./CallUsPhoto";
import { IEmployee } from "../../services/utils/types";
import { CallUsMobile } from "./CallUsMobile";
import {SubmitErrorHandler, SubmitHandler, useForm, useWatch} from "react-hook-form";


export interface IInputs {
    name: string;
    email: string;
    phone: string;
}

export const CallUs: FunctionComponent<{ employee: IEmployee }> = ({
  employee,
}) => {
  const
      {
      register,
      handleSubmit,
      watch,
      control,
      setError,
      formState:
          {errors, isValid, isDirty}
      } = useForm<IInputs>({mode: "onChange"});


  const onSubmit: SubmitHandler<IInputs> = data => {
      console.log(data, data.phone.length)
      console.log(errors)
  }
  const onError: SubmitErrorHandler<IInputs> = data => {
      console.log("где-то ошибка", data)
  }

  const forms = watch()
  console.log(forms)
  return (
    <>
      <div className="mx-auto mb-16 max-w-screen-xl px-16 max-md:hidden">
        <div className="flex h-[370px] w-full justify-center overflow-hidden rounded-2xl border-[#6A6A6A] shadow-2xl md:h-[370px] lg:h-[550px] lg:justify-around xl:h-[650px]">
          <div className="my-auto flex h-full max-h-[350px] max-w-[460px] flex-col items-center justify-around px-5 py-10 lg:max-h-[400px] xl:max-h-[450px]">
            <h2 className="justify-around font-extrabold text-my-blacker md:text-3xl lg:text-5xl xl:text-6xl">
              Контакты
            </h2>
            <span className="text-nowrap font-semibold text-my-blacker first-letter:capitalize max-[880px]:hidden md:text-sm lg:text-base xl:text-xl">
              будем рады ответить на ваши вопросы
            </span>
            <form
              className="flex w-full flex-col gap-2 px-5 xl:px-14"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <InputCustom
                  type="text"
                  placeholder="имя"
                  register={register}
                  label={'name'}
                  required
                  validationPattern={{value: /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё0-9]*$/, message: "имя"}}
                  error={errors}
                  minLength={3}
              />
              <InputCustom
                  placeholder="E-mail"
                  register={register}
                  label={'email'}
                  validationPattern={{value:/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,message:"'эмейл"}}
                  error={errors}
                  required={!forms.phone}
              />
              <InputCustom
                  type="tel"
                  placeholder="Номер телефона"
                  register={register}
                  label={"phone"}
                  control={control}
                  isPhone={true}
                  setError={setError}
                  error={errors}
                  validationPattern={{value:/^(?=(?:.*\d){11,}).*$/, message: "заполните все цифры"}}
                  required={!forms.email}
              />

              <button
                  className={
                    `${isDirty && isValid && Object.keys(errors).length === 0 ? 'bg-blue-600 text-white' : 'bg-red-200'} rounded-[10px] border border-[#6A6A6A] px-3 py-2 transition-all`
                  }>
                  отправить
              </button>
            </form>
          </div>
          <CallUsPhoto employee={employee} />
        </div>
      </div>
      <CallUsMobile employee={employee} />
    </>
  );
};
