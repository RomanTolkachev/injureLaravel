import React, { FunctionComponent } from "react";
import { Sprite } from "../Sprite";

export const Logo: FunctionComponent = () => {
  return (
    <div className="flex min-w-[120px] items-center">
      <Sprite logo={true} />
    </div>
  );
};
