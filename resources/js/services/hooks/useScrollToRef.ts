import React, {  useCallback } from "react";


const useScrollToRef = (): (ref: React.ForwardedRef<HTMLLIElement>) => Promise<void> => {
    return useCallback((ref: any): Promise<void> => {
        return new Promise((resolve) => {
            if (ref.current) {
                const topPosition = ref.current.getBoundingClientRect().top + window.scrollY - 81;
                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth",
                });
                setTimeout(resolve, 500); // Задержка соответствует времени скролла
            } else {
                resolve();
            }
        });
    }, []);
};

export default useScrollToRef;
