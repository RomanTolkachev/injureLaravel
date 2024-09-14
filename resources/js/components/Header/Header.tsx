import React, { FunctionComponent, useState } from "react";
import { NavMenuWide } from "./NavMenuWide";
import { ButtonHeroOrder } from "../buttons/ButtonHeroOrder";
import { Logo } from "./Logo";
import { BurgerButton } from "../buttons/BurgerButton";
import { createPortal } from "react-dom";
import { Burger } from "./Burger";
import { Overlay } from "../utils/Overlay";
import { useSelectorTyped as useSelector } from "../../services/hooks/typedUseSelector";

export const Header: FunctionComponent = () => {
  const menuList = useSelector((store) => store.headerState.navList);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  return (
    <header className="fixed z-10 h-[79px] w-full border-b border-my-gray-medium bg-my-main-blue p-1.5 max-sm:px-4">
      <div className="container flex h-full items-center justify-between gap-9">
        <Logo />
        <NavMenuWide menuList={menuList} />
        <ButtonHeroOrder telephone="123-456-7890">
          оставить заявку
        </ButtonHeroOrder>
        <div>{burgerOpen}</div>
        <BurgerButton
          burgerOpen={burgerOpen}
          onClickHandler={() => setBurgerOpen(!burgerOpen)}
          className={"fixed right-0 top-0 z-[3] h-[79px] w-[79px] lg:hidden"}
        />
        <div className="max-h-svh">
          <Burger
            menuList={menuList}
            burgerOpen={burgerOpen}
            setBurgerOpen={setBurgerOpen}
            className="fixed right-0 top-[85px] w-full rounded-lg bg-my-blue-light"
          />
        </div>

        {createPortal(
          <Overlay visible={burgerOpen} setBurgerOpen={setBurgerOpen} />,
          document.getElementById("portal") as HTMLElement,
        )}
      </div>
    </header>
  );
};
