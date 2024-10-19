import {FunctionComponent, useEffect} from "react";
import {partners as logos} from "../../services/utils/partners";
import {motion, useAnimation} from "framer-motion";

interface IProps {
    className?: string
}


export const Carousel: FunctionComponent<IProps> = ({className}) => {
    const controls = useAnimation();
    const partners = [...logos]

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: ['0%', '-100%'],
                transition: {
                    x: {
                        duration: (partners.length) * 5,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }
                }
            });
        };
        startAnimation();
    }, [controls]);


    return (
        <div className={`${className} absolute max-w-screen-2xl overflow-hidden h-20 space-x-8 py-5 `}>
            <div className={'flex w-max h-full'}>
                <motion.div className={'w-max h-full space-x-8 inline-block'} animate={controls}>
                    {partners.map((logo, index) => {
                        return (
                            <motion.div key={index} className={"h-full w-fit inline-block"}>
                                <img className={'h-full'} src={logo.path} alt={""}/>
                            </motion.div>
                        )
                    })}
                </motion.div>
                <motion.div className={'w-max h-full space-x-8 inline-block'} animate={controls}>
                    {partners.map((logo, index) => {
                        return (
                            <motion.div key={index} className={"h-full w-fit inline-block"}>
                                <img className={'h-full'} src={logo.path} alt={""}/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>

        </div>
    )
}
