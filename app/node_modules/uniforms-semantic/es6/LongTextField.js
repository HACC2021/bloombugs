import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function LongText(_a) {
    var { className, disabled, error, errorMessage, id, inputRef, label, name, onChange, placeholder, readOnly, required, showInlineError, value } = _a, props = __rest(_a, ["className", "disabled", "error", "errorMessage", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "value"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { disabled, error, required }, 'field') }, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("textarea", { disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, readOnly: readOnly, ref: inputRef, value: value !== null && value !== void 0 ? value : '' }),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
export default connectField(LongText, { kind: 'leaf' });
