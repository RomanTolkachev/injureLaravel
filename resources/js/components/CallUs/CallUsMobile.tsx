import { FunctionComponent } from "react";
import { ButtonCallUs } from "../buttons/ButtonCallUs";
import { IEmployee } from "../../services/utils/types";
import { ImgCustom } from "../utils/ImgCustom";

export const CallUsMobile: FunctionComponent<{ employee: IEmployee }> = ({
  employee,
}) => {
  return (
    <div className="relative mx-auto mb-10 w-[390px] overflow-hidden rounded-3xl pt-6 shadow-[0px_12px_51px_-12px_rgba(34,60,80,0.26);] md:hidden">
      <>
        <h2 className="mx-auto mb-2 w-fit text-4xl font-bold tracking-tight text-[#399DFF]">
          Остались вопросы?
        </h2>
        <span className="mb-5 block text-center text-lg font-semibold text-my-deep-gray">
          Оставьте заявку и мы ответим Вам.
        </span>
        <div className="relative left-1/2 mx-auto aspect-[2] h-[500px] -translate-x-1/2 overflow-hidden">
          <ImgCustom
            src={employee.photoCallUs}
            className="absolute bottom-0 left-1/2 z-[1] h-[90%] -translate-x-1/2"
          />
          <svg
            className="absolute w-full"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
          >
            <ellipse
              className="rotate-[-0deg]"
              ry="70%"
              rx="31%"
              id="svg_1"
              cy="76%"
              cx="62%"
              strokeWidth="0"
              stroke="#000"
              fill={employee.colourAccent}
            />
            <ellipse
              className="rotate-[3deg]"
              ry="67%"
              rx="31%"
              id="svg_1"
              cy="80%"
              cx="66%"
              strokeWidth="0"
              stroke="#000"
              fill={employee.colourMain}
            />
          </svg>
        </div>
        <div className="absolute left-1/2 top-0 z-[4] flex h-full w-full max-w-[480px] -translate-x-1/2 items-end px-10 pb-10">
          <ButtonCallUs>оставить заявку</ButtonCallUs>
        </div>
      </>
    </div>
  );
};
