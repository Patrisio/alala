import {RightControlsContainer} from './styles';
import {EditSection} from './editSection';
import {DeleteSection} from './deleteSection';
import {MoreSectionControls} from './MoreSectionControls';

export const RightControls = ({sectionVM}) => {
    return (
        <RightControlsContainer $sectionVM={sectionVM}>
            <EditSection sectionVM={sectionVM} />
            <MoreSectionControls sectionVM={sectionVM} />
            <DeleteSection sectionVM={sectionVM} />
        </RightControlsContainer>
    );
};
