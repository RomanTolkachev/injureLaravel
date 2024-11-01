import React, { useCallback, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { Portfolio } from "./pages/Portfolio";
import { Contacts } from "./pages/Contacts";
import { AnimatePresence } from "framer-motion";
import { AnimatedPageRouting } from "./components/utils/AnimatedPageRouting";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import Modal from "./components/Modal/Modal";
import { ServiceLongRead } from "./components/Modal/serviceLongRead";
import { ContainerIfNoBackground } from "./pages/ContainerIfNoBackground";
import { NewsLongRead } from "./components/Modal/NewsLongRead";

function App(): React.JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();

    const background: string = location.state && location.state.background;
    const isDynamicRoute = location.pathname.startsWith("/services/") || location.pathname.startsWith("/main/");
    const memoizedLocation = useMemo(() => {
        console.log(location)
        if (isDynamicRoute && background) {
            if (location.pathname.startsWith("/services/")) {
                return { ...location, pathname: "/services" };
            } else if (location.pathname.startsWith("/main")) {
                return { ...location, pathname: "/" };
            }
        }
        console.log(location)
        return location;
    }, [background, isDynamicRoute, location]);

    const closeModal = useCallback(() => {
        return navigate(-1);
    }, [navigate]);
    return (
        <>
            <div className="flex min-h-svh max-w-[100vw] flex-col overflow-x-hidden font-Inter">
                <Header />
                <section className="shrink grow">
                    <div className="h-[79px]"></div>
                    <AnimatePresence mode="wait">
                        <Routes
                            location={memoizedLocation}
                            key={memoizedLocation.pathname}
                        >
                            <Route
                                path="/"
                                element={
                                    <AnimatedPageRouting children={<Main />} />
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    <AnimatedPageRouting children={<About />} />
                                }
                            />
                            <Route
                                path="/services"
                                element={
                                    <AnimatedPageRouting
                                        children={<Services />}
                                    />
                                }
                            ></Route>
                            <Route
                                path={"services/:serviceId"}
                                element={
                                    <ContainerIfNoBackground
                                        children={<ServiceLongRead />}
                                    />
                                }
                            />
                            <Route
                                path={"main/:newsId"}
                                element={
                                    <ContainerIfNoBackground
                                        children={<NewsLongRead />}
                                    />
                                }
                            />
                            <Route
                                path="/team"
                                element={
                                    <AnimatedPageRouting children={<Team />} />
                                }
                            />
                            <Route
                                path="/portfolio"
                                element={
                                    <AnimatedPageRouting
                                        children={<Portfolio />}
                                    />
                                }
                            />
                            <Route
                                path="/contacts"
                                element={
                                    <AnimatedPageRouting
                                        children={<Contacts />}
                                    />
                                }
                            />
                        </Routes>
                    </AnimatePresence>
                </section>
                <Footer />
            </div>
            <AnimatePresence mode="wait">
                {background && (
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path={"services/:serviceId"}
                            element={
                                <Modal
                                    closeModal={closeModal}
                                    children={<ServiceLongRead />}
                                />
                            }
                        />
                        <Route
                            path={"main/:newsId"}
                            element={
                                <Modal
                                    closeModal={closeModal}
                                    children={<NewsLongRead />}
                                />
                            }
                        />
                    </Routes>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
