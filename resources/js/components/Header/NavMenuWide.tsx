import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { ButtonHeader } from "../buttons/ButtonHeder";
import { IMenuItem } from "../../services/utils/types";

export const NavMenuWide: FunctionComponent<{ menuList: Array<IMenuItem> }> = ({
  menuList,
}) => {
  return (
    <nav className="hidden max-w-[600px] shrink grow gap-10 lg:block">
      <ul className="flex gap-6 text-header-nav font-semibold capitalize text-my-white xl:text-lg">
        {menuList.map((item, key) => {
          return (
            <li key={key}>
              <NavLink to={item.path}>
                <ButtonHeader children={item.text} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
