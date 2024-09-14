import {FunctionComponent} from "react";
import {Header} from "./Header/Header";
import {Footer} from "./Footer";
import {Outlet} from "react-router-dom";

export const Layout: FunctionComponent = () => {
    return (
        <>
            <Header />
            <section className="shrink grow">
                <div className="h-[79px]"></div>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}