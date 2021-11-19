import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Text(_a) {
    var { autoComplete, className, disabled, error, errorMessage, icon, iconLeft, iconProps, id, inputRef, label, name, onChange, placeholder, readOnly, required, showInlineError, type, value, wrapClassName } = _a, props = __rest(_a, ["autoComplete", "className", "disabled", "error", "errorMessage", "icon", "iconLeft", "iconProps", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "type", "value", "wrapClassName"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { disabled, error, required }, 'field') }, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("div", { className: classnames('ui', wrapClassName, { left: iconLeft, icon: icon || iconLeft }, 'input') },
            React.createElement("input", { autoComplete: autoComplete, disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: type, value: value !== null && value !== void 0 ? value : '' }),
            (icon || iconLeft) && (React.createElement("i", Object.assign({ className: `${icon || iconLeft} icon` }, iconProps)))),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
Text.defaultProps = { type: 'text' };
export default connectField(Text, { kind: 'leaf' });
