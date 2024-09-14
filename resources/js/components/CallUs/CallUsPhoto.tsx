import { FunctionComponent } from "react";
import { IEmployee } from "../../services/utils/types";
import { ImgCustom } from "../utils/ImgCustom";

interface ICallUsPhotoProps {
  employee: IEmployee;
}

export const CallUsPhoto: FunctionComponent<ICallUsPhotoProps> = ({
  employee,
}) => {
  return (
    <div className="relative aspect-square h-full">
      <ImgCustom
        src={employee.photoCallUs}
        className="absolute left-1/2 top-0 z-[1] h-full -translate-x-[40%]"
      />
      <svg
        className="absolute -top-1/4 aspect-[3]"
        xmlns="http://www.w3.org/2000/svg"
        height="175%"
      >
        <ellipse
          className="rotate-[-7deg]"
          ry="50%"
          rx="16%"
          id="svg_1"
          cy="45%"
          cx="14.5%"
          strokeWidth="0"
          stroke="#000"
          fill={employee.colourAccent}
        />
        <ellipse
          className="rotate-[-2deg]"
          ry="50%"
          rx="16%"
          id="svg_1"
          cy="53%"
          cx="15.5%"
          strokeWidth="0"
          stroke="#000"
          fill={employee.colourMain}
        />
        <rect
          width="100%"
          height="100%"
          x="17%"
          y="0"
          fill={employee.colourMain}
        />
      </svg>
    </div>
  );
};
