import {ButtonUI} from '../../../../diamond-ui';
import {AddSectionContainer} from './styles';
import {cl, EVENTS} from '../../../../communication-layer';

import {useState} from 'react';
import {observer} from 'mobx-react';
import {v4 as uuid} from 'uuid';

export const AddSection = observer(({sectionVM, where}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
        setAnchor(anchor ? null : event.currentTarget);
        cl.emit(EVENTS.ADD_SECTION_TO_POSITION, {id: sectionVM.id, position: where});
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
