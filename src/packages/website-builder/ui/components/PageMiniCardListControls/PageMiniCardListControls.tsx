import {ButtonUI, IconUI, H4, GroupedListItem} from '../../../../diamond-ui';
import {PageMiniCardListControlsContainer} from './styles';
import {PopupForAddNewEntityInWebsiteBuilder} from './PopupForAddNewEntityInWebsiteBuilder.tsx';

export const PageMiniCardListControls = ({addEmptyPage}) => {
    return (
        <PageMiniCardListControlsContainer>
            <GroupedListItem
                leftSlot={<H4>Main Navigation</H4>}
                rightSlot={
                    <div style={{display: 'flex'}}>
                        <PopupForAddNewEntityInWebsiteBuilder
                            addEmptyPage={addEmptyPage}
                        />
                        <ButtonUI>
                            <IconUI name={'chevronDown'} />
                        </ButtonUI>
                    </div>
                }
            />
        </PageMiniCardListControlsContainer>
    );
};
