import {TextField, Collapse} from '../../ui-components';

import {observer} from 'mobx-react';

export const Content = observer(({formVM}) => {
    return (
        <>
            <TextField
                value={formVM.formName}
                label={'Form Name'}
                type={'text'}
                onChange={(e) => formVM.setFormName(e.target.value)}
            />
            <TextField
                value={formVM.getSubmitVM().text}
                label={'Button Text'}
                type={'text'}
                onChange={(e) => formVM.getSubmitVM().setButtonText(e.target.value)}
            />
            <Collapse
                formVM={formVM}
                label={'Edit Form Fields'}
            />
        </>
    );
});
