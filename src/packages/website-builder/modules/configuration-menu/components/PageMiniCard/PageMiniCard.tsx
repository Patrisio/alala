import {IconUI, H5, GroupedListItem} from '../../../../../diamond-ui';
import {OpenPageSettingsModalButton, DeletePageButton} from './features';
import {PageMiniCardUI} from './styles';

export const PageMiniCard = ({pageVM, deletePage}) => {
    const onClick = (e) => {
        e.stopPropagation();
        pageVM.postMessageToViewportPreviewer();
    };

    return (
        <GroupedListItem
            onClick={pageVM.openPageInIframe}
            element={PageMiniCardUI}
            leftSlot={
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <DeletePageButton deletePage={deletePage(pageVM.id)} />
                    <IconUI name={'document'} style={{marginRight: 11}}/>
                    <H5>{pageVM.id}</H5>
                </div>
            }
            rightSlot={<OpenPageSettingsModalButton onClick={onClick}/>}
            hasLeftGap
            highlightOnHover
        />
    );
};
