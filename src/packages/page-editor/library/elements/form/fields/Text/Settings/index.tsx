import {FormFieldContainer, FormLabel, FormInput} from './styles';

export default ({textFieldVM}) => {
    return (
        <FormFieldContainer>
            <FormLabel>{'Label'}</FormLabel>
            <FormInput
                placeholder={'Name'}
                value={textFieldVM.label}
                type={'text'}
                onChange={(e) => {
                    textFieldVM.setLabel(e.target.value);
                }}
            />
        </FormFieldContainer>
    );
};
