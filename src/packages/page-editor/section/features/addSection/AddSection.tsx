import {ButtonUI} from '../../../../diamond-ui';
import {AddSectionContainer} from './styles';

import {useState} from 'react';
import {observer} from 'mobx-react';
import {v4 as uuid} from 'uuid';

export const AddSection = observer(({sectionVM, where}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? uuid() : undefined;

    return (
            <AddSectionContainer
                $sectionVM={sectionVM}
                $where={where}
            >
                <ButtonUI
                    aria-describedby={id}
                    onClick={handleClick}
                    text={'add section'}
                    type={'BLUE'}
                />
            </AddSectionContainer>
    );
});
