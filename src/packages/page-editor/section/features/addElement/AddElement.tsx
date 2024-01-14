import {ButtonUI, IconUI} from '../../../../diamond-ui';
import {PopupBody, AddElementContainer} from './styles';

import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {useState} from 'react';
import {observer} from 'mobx-react';
import {v4 as uuid} from 'uuid';

export const AddElement = observer(({sectionVM}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
        setAnchor(anchor ? null : event.currentTarget);
    };

    const closePopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(null);
    };

    const open = Boolean(anchor);
    const id = open ? uuid() : undefined;

    return (
        <ClickAwayListener onClickAway={closePopup}>
            <AddElementContainer $sectionVM={sectionVM}>
                {
                    <ButtonUI
                        aria-describedby={id}
                        onClick={handleClick}
                        contentLeft={<IconUI name={'plus'} />}
                        text={'add element'}
                        type={'SOLID'}
                    />
                }

                <BasePopup
                    id={id}
                    open={open}
                    anchor={anchor}
                    placement={'bottom'}
                >
                    <PopupBody>
                        <ul>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                        </ul>
                    </PopupBody>
                </BasePopup>
            </AddElementContainer>
        </ClickAwayListener>
    );
});
