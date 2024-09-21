import { motion, useAnimation } from "framer-motion";
import { FunctionComponent, useEffect } from "react";
import { team } from "../../services/team";
import {
  useDispatchTyped as useDispatch,
  useSelectorTyped as useSelector,
} from "../../services/hooks/typedUseSelector";
import { setAboutAnimated } from "../../services/actions/animationActions";

const parentVariants = {
  start: {},
  end: {
    transition: {
      duration: 0.7,
      delayChildren: 0.4,
    },
  },
};

const childrenVariants = {
  start: {
    right: "40%",
  },
  end: (key: number) => ({
    translateX: `calc(${(team.length / 2) * -50 + (team.length / 2) * 5}% + ${key * 95}%)`,
    right: "50%",
    transition: {
      duration: 0.8,
    },
  }),
};

export const WeHaveSomethingToSay: FunctionComponent = () => {
  const dispatch = useDispatch();
  const shouldAnimate = useSelector(
    (state) => state.animationState.shouldAboutAnimate,
  );
  const controls = useAnimation();

  useEffect(() => {
    if (shouldAnimate) {
      controls.start("start").then(() => {
        return controls.start("end");
      });
    }
    return () => {
      if (shouldAnimate) {
        dispatch(setAboutAnimated());
      }
    };
  }, [controls, dispatch, shouldAnimate]);

  return (
    <div className={"mx-auto w-full max-w-screen-lg sm:px-16"}>
      <div className={"rounded-2xl bg-white py-6 sm:py-8 md:py-12 lg:py-16"}>
        <motion.div
          className={
            "relative mx-auto mb-4 h-24 w-full sm:mb-8 sm:h-28 md:mb-10 md:h-36 lg:mb-12 lg:h-44"
          }
          variants={parentVariants}
          animate={controls}
        >
          {team.map((item, key) =>
            shouldAnimate ? (
              <motion.div
                key={key}
                custom={key}
                className="absolute top-0 aspect-square h-full overflow-hidden rounded-full"
                variants={childrenVariants}
                style={{ zIndex: `${team.length - key}`, right: "40%" }}
              >
                <img src={item.photoTeam} alt="image3" />
              </motion.div>
            ) : (
              <div
                key={key}
                className="absolute top-0 aspect-square h-full overflow-hidden rounded-full"
                style={{
                  zIndex: `${team.length - key}`,
                  transform: `translateX(calc(${(team.length / 2) * -50 + (team.length / 2) * 5}% + ${key * 95}%))`,
                  right: "50%",
                }}
              >
                <img src={item.photoTeam} alt="image3" />
              </div>
            ),
          )}
        </motion.div>
        <h3
          className={
            "mx-auto mb-2 w-fit text-2xl font-bold first-letter:capitalize sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl"
          }
        >
          нам есть что сказать
        </h3>
        <p
          className={
            "md:text-md mx-auto w-fit max-w-[500px] px-4 text-center text-sm lg:px-0 lg:text-lg"
          }
        >
          Наша цель - защита прав и интересов клиентов и предоставление
          высококачественных услуг благодаря честному и законному подходу к
          бизнесу.
        </p>
      </div>
    </div>
  );
};
