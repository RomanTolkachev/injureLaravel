import {FunctionComponent} from "react";

interface IProps {
    className?: string
}

export const PreloaderComponent: FunctionComponent<IProps> = ({className}) => {
    return (
        <div className={`${className}`}>
            <div className="preloader"></div>
        </div>
    )
}
