import { HTMLFieldProps } from 'uniforms';
export declare type RadioFieldProps = HTMLFieldProps<string, HTMLDivElement, {
    allowedValues?: string[];
    checkboxes?: boolean;
    transform?: (value: string) => string;
}>;
declare const _default: import("uniforms").ConnectedField<RadioFieldProps, string | undefined>;
export default _default;
