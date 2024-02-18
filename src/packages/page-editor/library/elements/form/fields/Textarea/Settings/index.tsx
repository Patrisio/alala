import {FormFieldContainer, FormLabel, FormInput} from './styles';

export default ({textareaFieldVM}) => {
    return (
        <FormFieldContainer>
            <FormLabel>{textareaFieldVM.label}</FormLabel>
            <FormInput
                placeholder={textareaFieldVM.placeholder}
                value={textareaFieldVM.value}
                type={'text'}
            />
        </FormFieldContainer>
    );
};
