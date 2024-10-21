import React, { FunctionComponent } from "react";
import { Sprite } from "../Sprite";
import {Link} from "react-router-dom";

export const Logo: FunctionComponent = () => {
  return (
      <Link to={"./"}>
          <div className="flex shrink-0 grow-0 w-[120px] h-[27px] items-center">
              <Sprite logo={true} className={"text-white"}/>
          </div>
      </Link>
  );
};
