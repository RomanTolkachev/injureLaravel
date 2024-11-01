import { FunctionComponent, useContext } from "react";
import { AnimationSettingsContext } from "./Carousel";

interface IProps {
    key: number;
    logoPath: string;
}

export const CarouselItem: FunctionComponent<IProps> = ({ logoPath, key }) => {
    const { spacing } = useContext(AnimationSettingsContext);
    return (
        <div key={key} className="inline-block h-full w-fit" style={{ marginRight: `${spacing*4}px` }}>
            <img className={"h-full"} src={logoPath} alt={""} />
        </div>
    );
};
