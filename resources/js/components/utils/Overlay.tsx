import React, {
  Dispatch,
  FunctionComponent,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollLock } from "../../services/hooks/useScrollLock";

interface IInterfaceProps {
  visible?: boolean;
  setBurgerOpen?: Dispatch<SetStateAction<boolean>>;
}

export const Overlay: FunctionComponent<IInterfaceProps> = ({
  visible,
  setBurgerOpen,
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const overlayRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      setBurgerOpen!(false);
    };
    if (overlayRef.current) {
      overlayRef.current?.addEventListener("click", handleClick);
    }
  }, [setBurgerOpen]);

  useEffect(() => {
    visible ? lockScroll() : unlockScroll();
  }, [visible, lockScroll, unlockScroll]);

  return (
    <div ref={overlayRef}>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 z-[5] h-dvh w-screen bg-black"
            key="modal"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            animate={{ opacity: 0.7 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
