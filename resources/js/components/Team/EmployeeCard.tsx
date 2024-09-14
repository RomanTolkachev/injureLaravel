import { FunctionComponent } from "react";
import { IEmployee } from "../../services/utils/types";
import { BGTeam } from "../SVG/BGTeam";
import { Sprite } from "../Sprite";
import { ImgCustom } from "../utils/ImgCustom";

interface IEmployeeCard {
  person: IEmployee;
}

export const EmployeeCard: FunctionComponent<IEmployeeCard> = ({ person }) => {
  return (
    <>
      <div className="mx-auto hidden w-full max-w-[1024px] shadow-lg md:flex [&>div]:basis-1/2">
        <div className="relative">
          <BGTeam className="absolute" />
          <div className="absolute h-full px-5 py-10 text-my-white">
            <div className="flex h-full flex-col">
              <h3 className="mb-8 font-bold md:text-lg lg:text-2xl">
                {person.bio}
              </h3>
              <span className="shrink grow text-xs lg:text-base">
                {person.experience}
              </span>
              <img
                src="/webp/signature.webp"
                className="relative float-end block aspect-video h-1/6 w-1/3"
                alt="signature"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#162d2e]">
          <ImgCustom
            src={person.photoTeam}
            className="h-full w-full object-cover"
            alt="team"
          />
        </div>
      </div>

      <div className="mx-auto w-full min-w-[340px] max-w-[400px] overflow-hidden rounded-2xl shadow-xl sm:w-[400px] md:hidden">
        <div className="aspect-square w-full bg-[#162d2e]">
          <ImgCustom
            src={person.photoTeam}
            className="h-full w-full object-cover"
            alt="photoTeam"
          />
        </div>
        <div className="relative aspect-square w-full text-my-white">
          <Sprite bottomEmployeeCard={true} className="absolute" />
          <div className="absolute flex h-full flex-col overflow-y-auto">
            <div className="px-5 py-8">
              <h3 className="mb-5 text-center text-xl font-bold">
                {person.bio}
              </h3>
              <p className="min-h-fit shrink grow text-[0.87rem] lg:text-base">
                {person.experience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
