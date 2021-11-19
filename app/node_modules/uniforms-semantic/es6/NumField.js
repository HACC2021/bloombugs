import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Num(_a) {
    var { className, decimal, disabled, error, errorMessage, icon, iconLeft, iconProps, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, required, showInlineError, step, value, wrapClassName } = _a, props = __rest(_a, ["className", "decimal", "disabled", "error", "errorMessage", "icon", "iconLeft", "iconProps", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "step", "value", "wrapClassName"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { disabled, error, required }, 'field') }, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("div", { className: classnames('ui', wrapClassName, { left: iconLeft, icon: icon || iconLeft }, 'input') },
            React.createElement("input", { disabled: disabled, id: id, max: max, min: min, name: name, onChange: event => {
                    const parse = decimal ? parseFloat : parseInt;
                    const value = parse(event.target.value);
                    onChange(isNaN(value) ? undefined : value);
                }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, step: step || (decimal ? 0.01 : 1), type: "number", value: value !== null && value !== void 0 ? value : '' }),
            (icon || iconLeft) && (React.createElement("i", Object.assign({ className: `${icon || iconLeft} icon` }, iconProps)))),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
export default connectField(Num, { kind: 'leaf' });
