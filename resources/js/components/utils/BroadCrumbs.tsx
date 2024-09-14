import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelectorTyped as useSelector } from "../../services/hooks/typedUseSelector";
import { IMenuItem } from "../../services/utils/types";

export const BroadCrumbs: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const location = useLocation();
  const navList = useSelector((state) => state.headerState.navList);

  const getPath = (
    array: IMenuItem[],
    pathName: string,
  ): IMenuItem | undefined => {
    return array.find((item) => item.path === `${pathName}`);
  };

  const currentLocation = getPath(navList, location.pathname);

  return (
    <div className={`first-letter:capitalize ${className}`}>
      <div className="md:mb-5 lg:mb-7 xl:mb-10">
        <Link to={"/"} className="nav">
          главная
        </Link>
        <span> / </span>
        <span className={"capitalize"}>{currentLocation!.text}</span>
        {/*<Link className="" to={currentLocation!.path}>*/}
        {/*  {currentLocation!.text}*/}
        {/*</Link>*/}
      </div>
    </div>
  );
};
