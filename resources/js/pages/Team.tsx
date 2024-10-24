import { FunctionComponent } from "react";
import { team } from "../services/team";
import { EmployeeCard } from "../components/Team/EmployeeCard";
import { IEmployee } from "../services/utils/types";
import { SectionDescription } from "../components/Header/SectionDescription";
import { AnimatePresence, motion } from "framer-motion";
import { TeamDescription } from "../components/Team/TeamDescription";
import { createPortal } from "react-dom";
import Modal from "../components/Modal/Modal";
import { CallUsModal } from "../components/Modal/CallUsModal";
import { closeCallUsModal } from "../services/actions/callUsActions";
import {
    useSelectorTyped as useSelector,
    useDispatchTyped as useDispatch,
} from "../services/hooks/typedUseSelector";

const teamVariants = {
    start: { opacity: 0 },
    end: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const teamItemVariant = {
    start: { opacity: 0 },
    end: {
        opacity: 1,
    },
};

export const Team: FunctionComponent = () => {
    const isCallUsModalOpen = useSelector(
        (state) => state.callUsModalState.isCallUsModalOpen,
    );
    const dispatch = useDispatch();
    return (
        <>
            <SectionDescription
                header="команда"
                BGImage="/webp/sectionHeader/handShake.webp"
                className={"mb-10 2xl:mb-14"}
            />
            <section className="container w-screen">
                <TeamDescription />
                <motion.ul
                    initial="start"
                    animate="end"
                    variants={teamVariants}
                    className=""
                >
                    {team.map((person: IEmployee, key) => {
                        return (
                            <motion.li
                                variants={teamItemVariant}
                                key={key}
                                className="[&>li]: mb-10"
                            >
                                <EmployeeCard person={person} />
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </section>
            {createPortal(
                <AnimatePresence mode="wait">
                    {isCallUsModalOpen && (
                        <Modal
                            children={<CallUsModal />}
                            closeModal={() => dispatch(closeCallUsModal())}
                        />
                    )}
                </AnimatePresence>,
                document.getElementById("portal") as HTMLElement,
            )}
        </>
    );
};
