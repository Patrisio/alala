import {ButtonUI, IconUI} from '../../../../../../diamond-ui';
import {PopupBody} from './styles';
import {createPage} from '../../../../../repository';

import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {useState} from 'react';

export const PopupForAddNewEntityInWebsiteBuilder = ({addEmptyPage}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const closePopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(null);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;

    return (
        <ClickAwayListener onClickAway={closePopup}>
            <div>
                <ButtonUI
                    aria-describedby={id}
                    onClick={handleClick}
                >
                    <IconUI name={'plus'} />
                </ButtonUI>
                <BasePopup
                    id={id}
                    open={open}
                    anchor={anchor}
                    placement={'right-end'}
                >
                    <PopupBody>
                        <ButtonUI
                            onClick={(e) => {
                                createPage();
                                // addEmptyPage();
                                handleClick(e);
                            }}
                            text={'Добавить пустую страницу'}
                        />
                    </PopupBody>
                </BasePopup>
            </div>
        </ClickAwayListener>
    );
};
