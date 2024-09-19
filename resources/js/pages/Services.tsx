import {FunctionComponent, useEffect, useState} from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { ServiceCardsLayout } from "../components/Services/ServiceCardsLayout";
import { ServiceNav } from "../components/Services/ServiceNav";
import {fetchServices} from "../services/utils/api";
import {useDispatchTyped as useDispatch, useSelectorTyped as useSelector} from "../services/hooks/typedUseSelector";
import {getServices, handleGetServicesSuccess} from "../services/actions/servicesActions";
import {PreloaderComponent} from "../components/utils/PreloaderComponent";

export const Services: FunctionComponent = () => {
  const dispatch = useDispatch();
  const servicesData = useSelector(state => state.servicesState.servicesData)
  const [currentType, setCurrentType] = useState<"business" | "physical">(
    "physical",
  );
    useEffect(() => {
        !servicesData ? dispatch(getServices()) : null
    }, [servicesData]);
  return (
    <div className="">
      <SectionDescription
        header="услуги"
        BGImage="/webp/sectionHeader/books.webp"
        className={"sm:mb-6 lg:mb-10 2xl:mb-14"}
        imgPosition={"object-top"}
      />
        {servicesData ?
            <>
                <nav className={"pt-5 sm:mb-6 lg:mb-10"}>
                    <ServiceNav currentType={currentType} setCurrentType={setCurrentType}/>
                </nav>
                <div>
                    <ServiceCardsLayout
                        currentType={currentType}
                        className={"sm:mb-6 lg:mb-10"}
                    />
                </div>
            </> : <div className={"h-[100px] py-5 w-full sm:mb-6 lg:mb-10"}><PreloaderComponent/></div>
        }
        <CallUs employee={team[1]}></CallUs>
    </div>
  );
};
