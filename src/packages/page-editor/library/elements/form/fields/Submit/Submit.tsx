import {SubmitContainer} from './styles';

import {observer} from 'mobx-react';

export const Submit = observer(({submitVM}) => {
    return (
        <SubmitContainer
            type='submit'
        >
            {submitVM.text}
        </SubmitContainer>
    );
});
