import {ButtonUI, IconUI} from '../../../../../diamond-ui';
import {cl, EVENTS} from '../../../../../communication-layer';

export const DeleteSection = ({sectionVM}) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
        cl.emit(EVENTS.REMOVE_SECTION, {id: sectionVM.id});
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
