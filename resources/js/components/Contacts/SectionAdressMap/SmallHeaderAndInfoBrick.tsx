import React, { FunctionComponent } from "react";

interface IBrick {
  headerContent?: string;
  spanContent?: string | number;
  className?: string;
  email?: string;
  telephone?: string;
}
export const SmallHeaderAndInfoBrick: FunctionComponent<IBrick> = ({
  headerContent,
  spanContent,
  className,
  email = null,
  telephone = null,
}) => {
  return telephone ? (
    <div className={`${className} flex flex-col`}>
      <a
        className="text-news-preview text-my-gray sm:text-sm sm:font-bold sm:text-my-gray-header"
        href={`mailto:${email}`}
      >
        {email}
      </a>
      <a className="text-xl" href={`tel:${telephone}`}>
        {telephone}
      </a>
    </div>
  ) : (
    <div className={`${className}`}>
      <h5 className="text-news-preview text-my-gray sm:text-sm sm:font-bold sm:text-my-gray-header">
        {headerContent}
      </h5>
      <span className="text-xl">{spanContent}</span>
    </div>
  );
};
