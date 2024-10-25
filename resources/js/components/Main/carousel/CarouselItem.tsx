import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface IProps {
    key: number;
    logoPath: string;
    spacing?: number;
}

export const CarouselItem: FunctionComponent<IProps> = ({
    logoPath,
    key,
    spacing = 8,
}) => {
    return (
        <motion.div
            key={key}
            className={`mr-${spacing} inline-block h-full w-fit`}
        >
            <img className={"h-full"} src={logoPath} alt={""} />
        </motion.div>
    );
};
