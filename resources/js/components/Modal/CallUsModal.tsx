import {FunctionComponent, ReactNode, useEffect, useState} from "react";
import {Form} from "../utils/Form";
import {Sprite} from "../Sprite";
import {useDispatchTyped as useDispatch, useSelectorTyped as useSelector} from "../../services/hooks/typedUseSelector";
import {closeCallUsModal} from "../../services/actions/callUsActions";
import {sendMessageProcessOver} from "../../services/actions/telegramBot";
import { PreloaderComponent } from "../utils/PreloaderComponent";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {ButtonCallUs} from "../buttons/ButtonCallUs";


export const CallUsModal: FunctionComponent = () => {
    const dispatch = useDispatch();
    const isMessageSent = useSelector(state => state.telegramBotState.messageSent);
    const messageSentSuccess = useSelector(state => state.telegramBotState.messageSentSuccess);
    const navigate = useNavigate();
    const [shouldHandlePopstateInvoke, setShouldHandlePopstateInvoke] = useState<boolean>(true)

    useEffect(() => {

        const handlePopState = () => {
            if (shouldHandlePopstateInvoke) {
                if (isMessageSent) {
                    dispatch(closeCallUsModal());
                    dispatch(sendMessageProcessOver());
                } else {
                    dispatch(closeCallUsModal());
                }
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        }
    }, [shouldHandlePopstateInvoke]);

    const emptyForm: ReactNode = (
        <div className={"h-full w-full flex flex-col justify-center items-center gap-7"}>
            <div><Sprite logo={true} className={"text-my-blue-light"}/></div>
            <h4 className="text-center text-lg font-semibold text-my-deep-gray">
                    Оставьте заявку и мы ответим Вам.
            </h4>
            <Form className={'f-full flex justify-center z-13'}/>
        </div>
    )

    const handleClick = () => {
        setShouldHandlePopstateInvoke(false);
        dispatch(sendMessageProcessOver());
        dispatch(closeCallUsModal());
        navigate(-1)
    };

    return (
        <div className={'absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-7'}>
            <AnimatePresence mode={"wait"}>
                {!isMessageSent ? (
                    <motion.div key="form" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        {emptyForm}
                    </motion.div>
                ) : isMessageSent && messageSentSuccess ? (
                    <motion.div
                                key="success" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                onClick={handleClick}>
                        <p className={"text-center mb-10 text-lg font-semibold text-my-deep-gray"}>
                            Мы получили Вашу заявку.<br/>
                            Наш специалист перезвонит в течении 15 минут.
                        </p>
                        <ButtonCallUs color={"blueColor"}>Назад</ButtonCallUs>
                    </motion.div>
                ) : isMessageSent ? (
                    <motion.div className={'h-[100px] py-5 w-full sm:mb-6 lg:mb-10'} key="preloader" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <PreloaderComponent/>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
};
