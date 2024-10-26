import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { SmallHeaderAndInfoBrick } from "./SmallHeaderAndInfoBrick";
import { Sprite } from "../../Sprite";

interface ILegal {
  className?: string;
  registerNumberType?: string;
  registerNumber?: string | number;
  TIN?: string | number;
  legalForm?: string;
  legalBody?: string;
}

export const Legal: FunctionComponent<ILegal> = ({
  className,
  registerNumberType = "ОГРНИП/ОГРН",
  registerNumber = "номер ОГРНИП",
  TIN = "номер ИНН",
  legalForm = "юр. форма",
  legalBody = "название юр. лица",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const motionHide = {
    height: 0,
  };
  const motionShow = {
    height: "fit-content",
  };

  const rotate = {
    rotate: "180deg",
  };
  return (
    <div
      className={`${className} grid w-full grid-cols-1 grid-rows-[auto_auto] gap-1`}
    >
      <div className={"w-fit"}>
        <motion.button
          onClick={handleClick}
          className={"grid grid-cols-[auto_auto] place-items-center place-content-start w-fit text-nowrap text-news-preview text-my-gray"}
        >
          <span className="inline-block first-letter:capitalize">
            {isOpen ? "скрыть" : "показать"} юридическую информацию
          </span>
          <motion.span
            animate={isOpen ? rotate : ""}
            className="h-[30px] text-my-gray w-[30px] flex justify-start"
          >
            <Sprite arrow={true} className={"w-fit mr-auto"} />
          </motion.span>
        </motion.button>
        <motion.ul // мобилка
          className={"space-y-1 overflow-hidden w-fit h-0 sm:flex sm:flex-col"}
          animate={isOpen ? motionShow : motionHide}
        >
          <li>
            <SmallHeaderAndInfoBrick
              headerContent={registerNumberType}
              spanContent={registerNumber}
            />
          </li>
          <li>
            <SmallHeaderAndInfoBrick headerContent={"ИНН"} spanContent={TIN} />
          </li>
          <li>
            <SmallHeaderAndInfoBrick
              className={"text-nowrap"}
              headerContent={legalForm}
              spanContent={legalBody}
            />
          </li>
        </motion.ul>
      </div>
      {/*<div className={"hidden md:block"}>*/}
      {/*  <SmallHeaderAndInfoBrick*/}
      {/*    headerContent={registerNumberType}*/}
      {/*    spanContent={registerNumber}*/}
      {/*  />*/}
      {/*  <SmallHeaderAndInfoBrick headerContent={"ИНН"} spanContent={TIN} />*/}
      {/*  <SmallHeaderAndInfoBrick*/}
      {/*    className={"text-nowrap"}*/}
      {/*    headerContent={legalForm}*/}
      {/*    spanContent={legalBody}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};
