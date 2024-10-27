import { IServiceItem } from "./types";
import { IInputs } from "../../components/utils/Form";

// Запрашиваем список услуг

export const LOCAL_URL: "http://127.0.0.1:8000/api" = "http://127.0.0.1:8000/api";
export const BASE_URL: "https://in-jure.com/api" = "https://in-jure.com/api";

export const fetchServices = (): Promise<IServiceItem[]> => {
    return fetch(`${BASE_URL}/services`).then((res) => checkResponse(res));
};

export const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

// Телеграм бот

export const TOKEN: "7980373138:AAF80eIZELBkL2PI_8V4SYdDQQ8ZIBa9YnU" =
    "7980373138:AAF80eIZELBkL2PI_8V4SYdDQQ8ZIBa9YnU";
export const API_URL: `https://api.telegram.org/bot${string}/sendMessage` = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// export const CHAT_ID: -1002160220956 = -1002160220956; // моя
export const CHAT_ID: -1002305038177 = -1002305038177;

export const sendRequest = (data: IInputs) => {
    let message: string = `Заявка с сайта
      Имя: ${data.name}
      Почта: ${data.email ? data.email : "почта не указана"}
      Телефон: ${data.phone ? data.phone : "телефон не указан"}`;

    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
        }),
    }).then((res) => checkResponse(res));
};

// Запрос новостей

const NEWS_PER_REQUEST: number = 4;

export const getFourNews = (page: number) => {
    return fetch(`${LOCAL_URL}/news/?page=${page}&rows=${NEWS_PER_REQUEST}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }}
    ).then(res => checkResponse(res))
}
