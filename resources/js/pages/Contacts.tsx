import React, { FunctionComponent } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { SectionAddressMapMytischi } from "../components/Contacts/SectionAdressMap/SectionAddressMapMytischi";
import { SectionAddressMapArchangelsk } from "../components/Contacts/SectionAdressMap/SectionAddressMapArchangelsk";

export const Contacts: FunctionComponent = () => {
    return (
        <>
            <SectionDescription
                header="контакты"
                BGImage="/webp/sectionHeader/contacts.webp"
                className={"mb-10 2xl:mb-14"}
            />
            <SectionAddressMapMytischi
                className={"border-b-[1.5px] border-b-my-main-blue"}
            />
            <SectionAddressMapArchangelsk />
            <CallUs employee={team[3]} />;
        </>
    );
};
