import React from 'react';

const InputField = (props) => {
    return (
        <div className={props.outerDivClassName}>
            <label>{props.label}</label>
            <div className={props.innerDivClassName}>
                <input type={props.inputType} placeholder={props.inputPlaceholder} name={props.inputName} value={props.inputValue} onChange={props.inputOnChange} />
                <i className={props.iconClassName}></i>
            </div>
        </div>
    )
};

export default InputField;