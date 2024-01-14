import {ButtonUI, IconUI} from '../../../../../diamond-ui';

export const DeleteSection = () => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
    };

    return (
        <ButtonUI
            aria-describedby={'edit-section'}
            onClick={handleClick}
            contentLeft={<IconUI name={'trash'} />}
            text={'remove'}
            style={{width: '100%'}}
            type={'OUTLINE'}
        />
    );
};
