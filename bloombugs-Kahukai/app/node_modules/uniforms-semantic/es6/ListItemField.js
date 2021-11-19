import React from 'react';
import { connectField } from 'uniforms';
import AutoField from './AutoField';
import ListDelField from './ListDelField';
function ListItem({ children = React.createElement(AutoField, { label: null, name: "" }), }) {
    return (React.createElement("div", { className: "item" },
        React.createElement(ListDelField, { className: "top aligned", name: "" }),
        React.createElement("div", { className: "middle aligned content", style: { width: '100%' } }, children)));
}
export default connectField(ListItem, {
    initialValue: false,
});
