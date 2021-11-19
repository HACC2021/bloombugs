import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
export default function SubmitField(_a) {
    var { className, disabled, inputRef, readOnly, value } = _a, props = __rest(_a, ["className", "disabled", "inputRef", "readOnly", "value"]);
    const { error, state } = useForm();
    return (React.createElement("input", Object.assign({ className: classnames('ui', className, 'button'), disabled: disabled === undefined ? !!(error || state.disabled) : disabled, readOnly: readOnly, ref: inputRef, type: "submit" }, (value ? { value } : {}), filterDOMProps(props))));
}
