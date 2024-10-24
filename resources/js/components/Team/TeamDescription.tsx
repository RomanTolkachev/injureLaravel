import { FunctionComponent } from "react";

export const TeamDescription: FunctionComponent = () => {
    return (
        <div className={"rounded-2xl bg-white pb-6 sm:pb-8 md:pb-12 lg:pb-16"}>
            <h3
                className={
                    "mx-auto mb-2 w-fit text-center text-2xl font-bold first-letter:capitalize sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl"
                }
            >
                Ваша надёжная правовая опора
            </h3>
            <p
                className={
                    "md:text-md mx-auto w-fit max-w-[500px] px-4 text-center text-sm lg:px-0 lg:text-lg"
                }
            >
                Наша команда состоит из опытных профессионалов, готовых защитить
                ваши интересы. Опыт, преданность и глубокие знания каждого из
                нас обеспечивают вам уверенность и спокойствие в любой
                юридической ситуации. Доверьтесь нам — мы не подведём.
            </p>
        </div>
    );
};
