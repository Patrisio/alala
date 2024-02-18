import {TextField} from '../../ui-components';

import {observer} from 'mobx-react';

export const Content = observer(({imageVM}) => {
    return (
        <>
            <TextField
                value={imageVM.altText}
                label={'Alt Text'}
                type={'text'}
                onChange={(e) => imageVM.setAltText(e.target.value)}
            />
        </>
    );
});
