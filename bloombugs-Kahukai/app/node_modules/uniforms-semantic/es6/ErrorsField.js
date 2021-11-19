import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
function ErrorsField(_a) {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    const { error, schema } = useForm();
    return !error && !children ? null : (React.createElement("div", Object.assign({ className: classnames('ui', className, 'error message') }, filterDOMProps(props)),
        children,
        React.createElement("ul", { className: "list" }, schema.getErrorMessages(error).map((message, index) => (React.createElement("li", { key: index }, message))))));
}
export default ErrorsField;
