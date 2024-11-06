import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ButtonSquare } from "../../buttons/ButtonSquare";

interface IProps {
    className?: string;
    errorMessage: string;
}

export const FailedResponseMessage: FunctionComponent<IProps> = ({
    errorMessage,
}) => {
    return (
        <div className={"flex flex-col items-center sm:mb-6 lg:mb-10"}>
            <div className={"mx-auto h-[60px] w-fit py-5"}>{errorMessage}</div>
            <Link to={"/"}>
                <ButtonSquare className={"rounded-2xl px-10"} action={() => {}}>
                    на главную
                </ButtonSquare>
            </Link>
        </div>
    );
};
