import { FunctionComponent, PropsWithChildren } from "react";
import { motion } from "framer-motion";
interface IProps {
    className?: string;
    action: () => void;
}

export const ButtonSquare: FunctionComponent<PropsWithChildren<IProps>> = ({
    className,
    children,
    action,
}) => {
    return (
        <motion.button
            onClick={action}
            whileTap={{
                scale: 0.95,
            }}
            className={`${className} block w-full bg-white py-4 text-2xl font-bold uppercase text-[#236DA9] transition-colors duration-200 hover:bg-[#236DA9] hover:text-white`}
        >
            {children}
        </motion.button>
    );
};
