import {IServiceItem} from "./types";

export const BASE_URL: "http://127.0.0.1:8000/api" = "http://127.0.0.1:8000/api";

export const fetchServices = ():Promise<IServiceItem[]> => {
    return fetch(`${BASE_URL}/services`)
        .then(res => checkResponse(res))
}

export const checkResponse = <T>(res: Response):Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
