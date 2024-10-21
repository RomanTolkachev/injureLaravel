import {FunctionComponent, useEffect, useMemo} from "react";
import {InputCustom} from "../CallUs/InputCustom";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {sendCallUsRequest} from "../../services/actions/telegramBot";
import {useDispatchTyped as useDispatch, useSelectorTyped as useSelector} from "../../services/hooks/typedUseSelector";
import { v4 as uuidv4 } from 'uuid';

export interface IInputs {
    name: string,
    email: string,
    phone: string,
}

interface IProps {
    className?: string
}

//* В InputCustom есть пропс name-имя для поля формы, которое тянется в функцию API.
//* пропс id динамически связывает label и input

export const Form: FunctionComponent<IProps> = ({className}) => {

    const dispatch = useDispatch();
    const isMessageSent = useSelector(state => state.telegramBotState.messageSent);
    const memoIds = useMemo(() => {
        return [
            {inputName: 'name', id: uuidv4()},
            {inputName: 'email', id: uuidv4()},
            {inputName: 'phone', id: uuidv4()},
        ]
    }, [])


    const
        {
            register,
            handleSubmit,
            watch,
            reset,
            control,
            setValue,
            setError,
            clearErrors,
            formState:
                {errors, isValid, isDirty, isSubmitted}
        } = useForm<IInputs>({mode: "onChange"});

    const forms = watch();

    useEffect(() => {
        if (forms.email && errors[(memoIds[0].inputName as keyof IInputs)]) {
            clearErrors(memoIds[0].inputName as keyof IInputs);
        }
        if (forms.phone && errors[memoIds[1].inputName as keyof IInputs]) {
            clearErrors(memoIds[1].inputName as keyof IInputs);
        }
    }, [errors]);

    const onSubmit: SubmitHandler<IInputs> = data => {
        dispatch(sendCallUsRequest(data))
            .then(() => {reset(); setValue((memoIds[2].inputName as keyof IInputs), "")} )
    }

    const onError: SubmitErrorHandler<IInputs> = data => {
        console.log("где-то ошибка", data)
    }
    return (
        <form
            className={`${className} flex w-full flex-col gap-3 px-5 xl:px-14`}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <InputCustom
                type="text"
                placeholder="Имя"
                register={register}
                label={memoIds[0].inputName}
                id={memoIds[0].id}
                required
                validationPattern={{value: /^([A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+){0,3}\s*\d*)$/, message: "введите корректное имя"}}
                error={errors}
                minLength={2}
                isSubmitted={isSubmitted}
            />
            <InputCustom
                placeholder="E-mail"
                register={register}
                label={memoIds[1].inputName}
                id={memoIds[1].id}
                validationPattern={{
                    value: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "эмейл не корректный"
                }}
                error={errors}
                required={!forms.phone}
                isSubmitted={isSubmitted}
                validationValue={forms.phone}
            />
            <InputCustom
                type="tel"
                placeholder="Номер телефона"
                register={register}
                label={memoIds[2].inputName}
                id={memoIds[2].id}
                control={control}
                isPhone={true}
                setError={setError}
                error={errors}
                validationPattern={{value: /^(?=(?:.*\d){11,}).*$/, message: "заполните все цифры"}}
                required={!forms.email}
                isSubmitted={isSubmitted}
                validationValue={forms.email}
            />

            <button
                className={
                    `${isDirty && isValid && !isMessageSent && Object.keys(errors).length === 0 ? 'bg-blue-600 text-white' : 'bg-red-200'} rounded-[10px] border border-[#6A6A6A] px-3 py-2 transition-all`
                }
                disabled={isMessageSent}
            >
                отправить
            </button>
        </form>
    )
}
