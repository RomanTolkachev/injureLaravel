import React, { FunctionComponent } from "react";
import { Params, useParams } from "react-router-dom";
import { services } from "../../services";
import { ImgCustom } from "../utils/ImgCustom";

interface IProps {
  className?: string;
}

export const ServiceLongRead: FunctionComponent<IProps> = ({ className }) => {
  const { serviceId }: Params<string> = useParams();
  const article = services.filter((item) => item.id === serviceId);
  return (
    <article className={`${className} flex h-fit w-full flex-col px-8`}>
      <div className="h-fit">
        <h4
          className={
            "mb-4 w-full text-center text-xl font-bold sm:mb-8 sm:text-3xl"
          }
        >
          {article[0].title}
        </h4>
        <div className={"relative mb-4 aspect-[2.5] w-full sm:mb-8"}>
          <ImgCustom
            src={article[0].image}
            className={"absolute h-full w-full object-cover"}
          />
          <div
            className={"absolute top-0 h-full w-full bg-[#000D8199] opacity-60"}
          ></div>
        </div>
        <div
          // prettier-ignore
          className="font-Georgia
          h-fit pb-20
          [&>h5]:text-center [&>h5]:font-semibold [&>h5]:first-letter:capitalize
          [&>p]:indent-8 [&>p]:mb-2
          [&_ul]:list-inside [&_ul]:list-disc [&_ul]:indent-4
          [&_li]:first-letter:capitalize [&_ul]:space-y-2
          [&_h6]:inline-block"
          dangerouslySetInnerHTML={{ __html: article[0].content }}
        ></div>
      </div>
    </article>
  );
};
