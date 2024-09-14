import { FunctionComponent } from "react";

export const HeaderNews: FunctionComponent = () => {
  return (
    <div className="flex w-full justify-between border-b-2 border-b-my-main-blue px-1 py-2 font-black lg:py-4">
      <h2 className="text-lg uppercase tracking-tighter text-my-main-blue sm:text-xl md:text-2xl">
        актуальные новости
      </h2>
      <button className="mt-auto hidden h-fit align-text-bottom text-xs text-my-deep-gray sm:block md:text-sm">
        смотреть все новости
      </button>
    </div>
  );
};
