import { FunctionComponent, useContext } from "react";
import { AnimationSettingsContext } from "./Carousel";

interface IProps {
    key: number;
    logoPath: string;
}

export const CarouselItem: FunctionComponent<IProps> = ({ logoPath, key }) => {
    const { spacing } = useContext(AnimationSettingsContext);
    return (
        <div key={key} className={`mr-${spacing} inline-block h-full w-fit`}>
            <img className={"h-full"} src={logoPath} alt={""} />
        </div>
    );
};
