import { FunctionComponent, ReactNode } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { WeHaveSomethingToSay } from "../components/About/WeHaveSomethingToSay";
import { AboutBlock } from "../components/About/AboutBlock";
import { Sprite } from "../components/Sprite";
import {AboutItem} from "../components/About/AboutItem";
import {Questions} from "../components/About/Questions";
import principles from "../components/About/principles";

const globalGoals: ReactNode = (
    <div className={"p-6 sm:px-10"}>
        <h4
            className={
                "mb-3 pt-5 text-nowrap text-center text-xl font-bold first-letter:capitalize sm:mb-3 sm:text-start sm:text-xl md:mb-6 md:text-3xl lg:mb-10 lg:text-4xl"
            }
        >
            глобальные цели
        </h4>
        <p className={"max-sm:text-center text-sm sm:text-xs md:text-base lg:text-lg"}>
            Целью Компании является защита финансовых и имущественных интересов
            юридических и физических лиц с применением полного спектра правовых
            возможностей, которые предоставляет законодательство и судебная практика.
        </p>
    </div>
);

export const About: FunctionComponent = () => {
    return (
        <div className={"bg-my-white space-y-5 md:space-y-8"}>
            <SectionDescription
                header={"о компании"}
                BGImage="/webp/sectionHeader/about.webp"
                className={"mb-10 2xl:mb-14"}
                imgPosition={"object-bottom"}
            />
            <WeHaveSomethingToSay/>
            <AboutBlock
                leftSide={globalGoals}
                rightSide={
                <div className={"max-sm:w-[160px] pt-6 sm:pr-6 sm:pb-6 mx-auto aspect-square sm:w-full"}>
                    <Sprite court={true}/>
                </div>
            }/>
            <AboutBlock
                leftSide={
                    <AboutItem className={''}
                               bgClassName={'p-6'}
                               text={"Мы специализируемся как на разрешении коммерческих споров в рамках правового сопровождения юридических лиц и индивидуальных предпринимателей, процедурах банкротства и взаимодействии с государственными органами, так и на защите прав и интересов физических лиц по различным вопросам"}
                               header={"наша специализация"} />
                }
                rightSide={
                <>
                    <div className={"max-sm:w-[160px] pt-6 sm:pr-6 sm:pb-6 mx-auto aspect-square sm:w-full sm:hidden"}>
                        <Sprite className={"text-[#0884FF]"} book={true}/>
                    </div>
                    <div className={'h-full w-full max-sm:hidden rounded-2xl overflow-hidden'}>
                        <AboutItem
                            className={"bg-[#0884FF] overflow-hidden aspect-square text-white"}
                            bgClassName={"p-6"}
                            image={"url(/svg/headphones.svg)"}
                            header={"лицом к клиенту"}
                            text={"Наша команда юристов представляет интересы клиентов в судах по различным категориям споров, в органах государственной власти, на переговорах уже более 5 лет."}/>
                    </div>
                </>
                }
            />
            <AboutBlock
                leftSide={<AboutItem
                    className={"text-black"}
                    bgClassName={"bg-cover p-6"}
                    image={""}
                    header={"Истоки"}
                    text={"Компания была образована в июле 2020 года после выхода команды судебных юристов, а также юристов антимонопольной практики из состава крупных юридических фирм, как команда экспертов в области разрешения споров с особым акцентом на защиту бизнеса. В последствии команда была усилена юристами и адвокатами, специализацией которых является защита прав и интересов физических лиц. "} />
                }
                rightSide={<Sprite className={"p-6 max-sm:w-[210px]"} group={true}/> }
            />
            <AboutBlock
                gridClass={"gap-4"}
                cardClassName={"shadow-none"}
                leftSide={
                    <div className={"bg-[#0884FF] w-full h-full text-white rounded-2xl shadow-md"}>
                        <AboutItem
                            className={"py-9 [&_*]:text-center"}
                            bgClassName={"bg-contain px-6"}
                            image={"url(/svg/case.svg)"}
                            header={"сильные эксперты"}
                            pClassName={"mb-5 sm:mb-0"}
                            text={"Юристы имеют обширный опыт работы как на государственной службе и в государственных организациях, так и в коммерческих организациях, защищая интересы исполнителей государственных контрактов."}
                        />
                    </div>
                }
                rightSide={
                  <Questions className={"[&_button]:sm:mt-5"}/>
                }
            />
            <h3 className={"w-[390px] sm:w-[500px] mx-auto"}>
                <Sprite principles={true} />
            </h3>
            <section className={"sm:px-16 max-w-[390px] sm:max-w-screen-md grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto text-white"}>
                {principles.map(item => {
                    return (
                        <AboutItem className={`aspect-square rounded-2xl ${item.extraClass}`}
                                   header={item.headerText}
                                   text={item.infoText}
                                   image={item.backgroundImageUrl}
                                   bgClassName={`${item.bgClassName} flex flex-col justify-center sm:block`}
                                   headerClassName={"lg:text-xl pt-0 sm:pt-5"}
                                   pClassName={"lg:text-sm text-center sm:text-start"}/>
                    )
                })}
            </section>
            <CallUs employee={team[2]}/>
        </div>
    );
};
