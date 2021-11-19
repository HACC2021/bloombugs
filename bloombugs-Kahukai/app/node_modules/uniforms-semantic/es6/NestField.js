import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import AutoField from './AutoField';
function Nest(_a) {
    var { children, className, disabled, error, errorMessage, fields, grouped, itemProps, label, showInlineError } = _a, props = __rest(_a, ["children", "className", "disabled", "error", "errorMessage", "fields", "grouped", "itemProps", "label", "showInlineError"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { disabled, error, grouped }, 'fields') }, filterDOMProps(props)),
        label && (React.createElement("div", { className: "field" },
            React.createElement("label", null, label))),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic label" }, errorMessage)),
        children ||
            fields.map(field => (React.createElement(AutoField, Object.assign({ key: field, name: field }, itemProps))))));
}
Nest.defaultProps = { grouped: true };
export default connectField(Nest);
