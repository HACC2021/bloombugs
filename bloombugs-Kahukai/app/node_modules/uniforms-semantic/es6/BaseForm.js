import classnames from 'classnames';
import { BaseForm } from 'uniforms';
function Semantic(parent) {
    class _ extends parent {
        getNativeFormProps() {
            const props = super.getNativeFormProps();
            const error = this.getContextError();
            return Object.assign(Object.assign({}, props), { className: classnames('ui', props.className, { error }, 'form') });
        }
    }
    _.Semantic = Semantic;
    _.displayName = `Semantic${parent.displayName}`;
    return _;
}
export default Semantic(BaseForm);
