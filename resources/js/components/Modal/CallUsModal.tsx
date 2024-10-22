import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Form } from "../utils/Form";
import { Sprite } from "../Sprite";
import {
    useDispatchTyped as useDispatch,
    useSelectorTyped as useSelector,
} from "../../services/hooks/typedUseSelector";
import { closeCallUsModal } from "../../services/actions/callUsActions";
import { sendMessageProcessOver } from "../../services/actions/telegramBot";
import { PreloaderComponent } from "../utils/PreloaderComponent";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ButtonCallUs } from "../buttons/ButtonCallUs";

export const CallUsModal: FunctionComponent = () => {
    const dispatch = useDispatch();
    const isMessageSent = useSelector(
        (state) => state.telegramBotState.messageSent,
    );
    const messageSentSuccess = useSelector(
        (state) => state.telegramBotState.messageSentSuccess,
    );
    const navigate = useNavigate();
    const [shouldHandlePopstateInvoke, setShouldHandlePopstateInvoke] =
        useState<boolean>(true);

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
        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [shouldHandlePopstateInvoke]);

    const emptyForm: ReactNode = (
        <div
            className={
                "flex h-full w-full flex-col items-center justify-center gap-7"
            }
        >
            <div>
                <Sprite logo={true} className={"text-my-blue-light"} />
            </div>
            <h4 className="text-center text-lg font-semibold text-my-deep-gray">
                Оставьте заявку и мы ответим Вам.
            </h4>
            <Form className={"f-full z-13 flex justify-center"} />
        </div>
    );

    const handleClick = () => {
        setShouldHandlePopstateInvoke(false);
        dispatch(sendMessageProcessOver());
        dispatch(closeCallUsModal());
        navigate(-1);
    };

    return (
        <div
            className={
                "my-auto flex h-fit w-full flex-col items-center justify-center gap-7 max-lg:h-full"
            }
        >
            <AnimatePresence mode={"wait"}>
                {!isMessageSent ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {emptyForm}
                    </motion.div>
                ) : isMessageSent && messageSentSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClick}
                    >
                        <p
                            className={
                                "mb-10 text-center text-lg font-semibold text-my-deep-gray"
                            }
                        >
                            Мы получили Вашу заявку.
                            <br />
                            Наш специалист перезвонит в течении 15 минут.
                        </p>
                        <ButtonCallUs color={"blueColor"}>Назад</ButtonCallUs>
                    </motion.div>
                ) : isMessageSent ? (
                    <motion.div
                        className={"h-[100px] w-full py-5 sm:mb-6 lg:mb-10"}
                        key="preloader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <PreloaderComponent />
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};
