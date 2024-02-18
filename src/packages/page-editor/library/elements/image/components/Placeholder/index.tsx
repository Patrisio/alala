import {PlaceholderContainer} from './styles';
import {ButtonUI, IconUI} from '../../../../../../diamond-ui';

import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {ClickAwayListener} from '@mui/base';
import ImageUploading from 'react-images-uploading';

export const PopupBody = styled('div')`
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid #DAE2ED;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 0.1);
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 99999;
`;

export const Placeholder = ({imageVM}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const open = Boolean(anchor);

    const closePopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(null);
    };

    const openPopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    // const [images, setImages] = useState([]);
    
    // useEffect(() => {
    //     console.log(images, 'images');
    // }, [images]);

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        // setImages(imageList);
        const image = imageList[0]
        imageVM.setImageData({
            url: image.data_url,
            name: image.file.name,
        });
    };

    return (
        <ClickAwayListener
            onClickAway={closePopup}
            mouseEvent={'onMouseDown'}
        >
            <div style={{height: '100%'}}>
                <PlaceholderContainer
                    onMouseDown={openPopup}
                >
                    <ButtonUI
                        style={{background: '#F2F2F2', width: 36, height: 36}}
                    >
                        <IconUI
                            name={'plus'}
                        />
                    </ButtonUI>
                </PlaceholderContainer>

                <BasePopup
                    open={open}
                    anchor={anchor}
                    placement={'bottom-center'}
                    offset={20}
                    style={{zIndex: 9999}}
                >
                    <PopupBody>
                        <ImageUploading
                            value={[]}
                            onChange={onChange}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                <ButtonUI
                                    text={'Upload file'}
                                    onClick={onImageUpload}
                                />
                            )}
                        </ImageUploading>
                    </PopupBody>
                </BasePopup>
            </div>
        </ClickAwayListener>
    );
};
