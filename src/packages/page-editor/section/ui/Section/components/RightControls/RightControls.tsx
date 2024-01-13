import {RightControlsContainer} from './styles';
import {EditSection} from './editSection';
import {DeleteSection} from './deleteSection';
import {MoreSectionControls} from './MoreSectionControls';

export const RightControls = () => {
    return (
        <RightControlsContainer>
            <EditSection />
            <MoreSectionControls />
            <DeleteSection />
        </RightControlsContainer>
    );
};
