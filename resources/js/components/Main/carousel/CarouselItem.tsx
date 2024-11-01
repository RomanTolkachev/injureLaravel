import { FunctionComponent, useContext } from "react";
import { AnimationSettingsContext } from "./Carousel";

interface IProps {
    key: number;
    logoPath: string;
}

export const CarouselItem: FunctionComponent<IProps> = ({ logoPath }) => {
    const { spacing } = useContext(AnimationSettingsContext);
    return (
        <div className="inline-block h-full w-fit" style={{ marginRight: `${spacing*4}px` }}>
            <img className={"h-full"} src={logoPath} alt={""} />
        </div>
    );
};
