import {ButtonUI, IconUI} from '../../../../../../../diamond-ui';

export const EditSection = () => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
    };

    return (
        <ButtonUI
            aria-describedby={'edit-section'}
            onClick={handleClick}
            contentLeft={<IconUI name={'pencil'} />}
            text={'edit section'}
            type={'OUTLINE'}
            style={{width: '100%'}}
        />
    );
};
