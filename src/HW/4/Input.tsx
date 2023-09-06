import {ChangeEvent} from "react";

type InputPropsType = {
    currentText: string
    setCurrentText: (newTitle: string) => void
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setCurrentText(event.currentTarget.value)





        console.log(props.setCurrentText)





    };

    return (
        <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
    );
};
