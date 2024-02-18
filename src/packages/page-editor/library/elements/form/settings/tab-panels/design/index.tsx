import {SwitcherField} from '../../ui-components';
import {Color} from '../../../../shape/settings/color';

import {observer} from 'mobx-react';

export const Design = observer(({formVM}) => {
    return (
        <>
            <SwitcherField
                label={'Background'}
                hasBackground={formVM.isBackgroundVisible}
                toggleBackground={formVM.toggleBackground}
            />

            {
                formVM.isBackgroundVisible &&
                <Color elementVM={formVM} />
            }
        </>
    );
});
