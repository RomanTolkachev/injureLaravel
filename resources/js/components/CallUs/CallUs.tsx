import { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import { CallUsPhoto } from "./CallUsPhoto";
import { IEmployee } from "../../services/utils/types";
import { CallUsMobile } from "./CallUsMobile";
import { Form } from "../utils/Form";
import {
    useSelectorTyped as useSelector,
    useDispatchTyped as useDispatch,
} from "../../services/hooks/typedUseSelector";
import { AnimatePresence, motion } from "framer-motion";
import { PreloaderComponent } from "../utils/PreloaderComponent";
import { sendMessageProcessOver } from "../../services/actions/telegramBot";

export const CallUs: FunctionComponent<{ employee: IEmployee }> = ({
    employee,
}) => {
    const formWideRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const isMessageSent = useSelector(
        (state) => state.telegramBotState.messageSent,
    );
    const isModalOpen = useSelector(
        (state) => state.callUsModalState.isCallUsModalOpen,
    );
    const messageSentSuccess = useSelector(
        (state) => state.telegramBotState.messageSentSuccess,
    );

    const emptyForm: ReactNode = (
        <motion.div
            key="formWide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Form />
        </motion.div>
    );

    const preloader: ReactNode = (
        <motion.div
            className={"flex h-[228px] items-center"}
            key="preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={"h-[100px] w-full py-5"}>
                <PreloaderComponent />
            </div>
        </motion.div>
    );

    const successElement: ReactNode = (
        <motion.div
            className={"flex h-[228px] items-center"}
            key="successWide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <p
                className={
                    "mb-10 text-center text-lg font-semibold text-my-deep-gray"
                }
            >
                Мы получили Вашу заявку.
                <br />
                Наш специалист перезвонит
                <br /> в течении 15 минут.
            </p>
        </motion.div>
    );

    useEffect(() => {
        const showEmptyForm = (): void => {
            dispatch(sendMessageProcessOver())();
        };
    }, [isMessageSent, messageSentSuccess, formWideRef.current]);

    return (
        <>
            <div
                ref={formWideRef}
                className="ancor mx-auto mb-16 max-w-screen-xl px-16 max-md:hidden"
            >
                <div className="flex h-[370px] w-full justify-center overflow-hidden rounded-2xl border-[#6A6A6A] shadow-2xl md:h-[370px] lg:h-[550px] lg:justify-around xl:h-[650px]">
                    <div className="my-auto flex h-full max-h-[350px] max-w-[460px] flex-col items-center justify-center px-5 lg:max-h-[400px] xl:max-h-[450px]">
                        <h2 className="justify-around font-extrabold text-my-blacker md:text-3xl lg:text-5xl xl:text-6xl">
                            Контакты
                        </h2>
                        <span className="mb-4 text-nowrap font-semibold text-my-blacker first-letter:capitalize max-[880px]:hidden md:text-sm lg:text-base xl:text-xl">
                            будем рады ответить на ваши вопросы
                        </span>
                        <AnimatePresence mode={"wait"}>
                            {!isMessageSent
                                ? emptyForm
                                : isMessageSent && messageSentSuccess
                                  ? successElement
                                  : preloader}
                        </AnimatePresence>
                    </div>
                    <CallUsPhoto employee={employee} />
                </div>
            </div>
            <CallUsMobile employee={employee} />
        </>
    );
};
