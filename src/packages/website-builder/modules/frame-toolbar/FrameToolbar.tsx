import {ButtonUI, IconUI} from '../../../diamond-ui';
import {H5} from '../../../diamond-ui/typography';
import {cl, EVENTS} from '../../../communication-layer';

import {
    FrameToolbarContainer,
    PageDataWrapper,
    PageTypeAndStatusWrapper,
    CenteredDot,
    LeftControlsWrapper,
    RightControlsWrapper,
} from './styles';

import {useState} from 'react';

export const FrameToolbar = () => {
    const [isEditingLayoutMode, setIsEditingLayoutMode] = useState(false);

    const emitUpdateLayoutModeEvent = (layoutMode: string) => {
        cl.emit(EVENTS.UPDATE_LAYOUT_MODE, {layoutMode});
    };

    return (
        <FrameToolbarContainer>
            <LeftControlsWrapper>
                <ButtonUI
                    aria-describedby={'edit-section'}
                    onClick={() => {
                        emitUpdateLayoutModeEvent('edit');
                        setIsEditingLayoutMode(true);
                    }}
                    text={'edit'}
                />

                {
                    isEditingLayoutMode &&
                    <ButtonUI
                        aria-describedby={'edit-section'}
                        onClick={() => {
                            emitUpdateLayoutModeEvent('default');
                            setIsEditingLayoutMode(false);
                        }}
                        text={'exit'}
                    />
                }
            </LeftControlsWrapper>

            <PageDataWrapper>
                <H5>About</H5>
                <PageTypeAndStatusWrapper>
                    <H5>Page</H5>
                    <CenteredDot>·</CenteredDot>
                    <H5>Published</H5>
                </PageTypeAndStatusWrapper>
            </PageDataWrapper>

            <RightControlsWrapper>
                <ButtonUI
                    aria-describedby={'edit-section'}
                    onClick={() => {}}
                    style={{width: 36, height: 36, marginRight: 11}}
                >
                    <IconUI name={'brush'} />
                </ButtonUI>
                <ButtonUI
                    aria-describedby={'edit-section'}
                    onClick={() => {
                        emitUpdateLayoutModeEvent('fullScreen');
                        setIsEditingLayoutMode(false);
                    }}
                    style={{width: 36, height: 36}}
                >
                    <IconUI name={'asideArrow'} />
                </ButtonUI>
            </RightControlsWrapper>
        </FrameToolbarContainer>
    );
};
