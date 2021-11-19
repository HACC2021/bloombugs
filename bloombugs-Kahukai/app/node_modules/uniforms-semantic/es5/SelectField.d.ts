import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type SelectFieldProps = HTMLFieldProps<string | string[], HTMLDivElement, {
    allowedValues?: string[];
    checkboxes?: boolean;
    disableItem?: (value: string) => boolean;
    inputRef?: Ref<HTMLSelectElement>;
    transform?: (value: string) => string;
}>;
declare const _default: import("uniforms").ConnectedField<SelectFieldProps, string | string[] | undefined>;
export default _default;
