import {ButtonUI, IconUI} from '../../../../../diamond-ui';
import {PopupBody} from './styles';
import {createPage} from '../../../../repository';
import {cl, EVENTS} from '../../../../../communication-layer';

import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {useState, useEffect, useMemo} from 'react';
import {reaction} from 'mobx';

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

    const createPageHandler = async () => {
        const res = await createPage();
        console.log(res, '__VIDDD__');
    };
    
    const websiteBuilder = cl.to('WebsiteBuilder');

    useEffect(() => {
        if (!websiteBuilder) return;

        console.log(websiteBuilder, '__hhh_');

        const addingPageReactions = websiteBuilder.addingPage(() => {
            console.log('__EPTA__');
        });
        const disposeLoadingReaction = addingPageReactions.loadingReactionDisposer;

        return () => {
            disposeLoadingReaction();
        };
    }, [websiteBuilder]);

    return (
        <ClickAwayListener
            onClickAway={closePopup}
        >
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
                            onClick={async (e) => {
                                // createPage();
                                await addEmptyPage();
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
