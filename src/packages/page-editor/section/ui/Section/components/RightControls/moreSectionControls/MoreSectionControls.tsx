import {MoreSectionControlsContainer} from './styles';
import {ButtonUI, IconUI} from '../../../../../../../diamond-ui';

export const MoreSectionControls = () => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
    };

    return (
        <MoreSectionControlsContainer>
            <ButtonUI
                aria-describedby={'edit-section'}
                onClick={handleClick}
                style={{width: 36, height: 36}}
            >
                <IconUI name={'duplicate'} />
            </ButtonUI>
            <ButtonUI
                aria-describedby={'edit-section'}
                onClick={handleClick}
                style={{width: 36, height: 36}}
            >
                <IconUI name={'heart'} />
            </ButtonUI>
            <ButtonUI
                aria-describedby={'edit-section'}
                onClick={handleClick}
                style={{width: 36, height: 36}}
            >
                <IconUI name={'arrowUp'} />
            </ButtonUI>
            <ButtonUI
                aria-describedby={'edit-section'}
                onClick={handleClick}
                style={{width: 36, height: 36}}
            >
                <IconUI name={'arrowDown'} />
            </ButtonUI>
        </MoreSectionControlsContainer>
    );
};
