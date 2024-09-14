import { FunctionComponent } from "react";
import { InputCustom } from "./InputCustom";
import { CallUsPhoto } from "./CallUsPhoto";
import { IEmployee } from "../../services/utils/types";
import { CallUsMobile } from "./CallUsMobile";

export const CallUs: FunctionComponent<{ employee: IEmployee }> = ({
  employee,
}) => {
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
              action=""
            >
              <InputCustom type="text" placeholder="имя" />
              <InputCustom type="email" placeholder="E-mail" />
              <InputCustom type="tel" placeholder="Номер телефона" />
            </form>
          </div>
          <CallUsPhoto employee={employee} />
        </div>
      </div>
      <CallUsMobile employee={employee} />
    </>
  );
};
