import {IconUI, ButtonUI} from '../../../../../../../diamond-ui';
import {FormFieldContainer, FormLabel, FormInput} from './styles';
import {fieldList} from '../../../fields';

import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {useState} from 'react';
import styled from 'styled-components';
import {v4 as uuid} from 'uuid';
import {observer} from 'mobx-react';

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

export const Collapse = observer(({formVM, label}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const open = Boolean(anchor);
    const id = open ? uuid() : undefined;
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
        setAnchor(anchor ? null : event.currentTarget);
    };
    const closePopup = () => {
        setAnchor(null);
    };


    const [addFieldAnchor, setAddFieldAnchor] = useState<null | HTMLElement>(null);

    const addFieldOpen = Boolean(addFieldAnchor);
    const addFieldClosePopup = () => {
        setAddFieldAnchor(null);
    };
    const handleAddFieldPopup = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
        setAddFieldAnchor(addFieldAnchor ? null : event.currentTarget);
    };



    const [fieldId, setFieldId] = useState(null);
    const openPopup = (event: React.MouseEvent<HTMLElement>, fieldId: string) => {
        setAnchor(anchor ? null : event.currentTarget);
        setFieldId(fieldId);
    };

    const [isOpen, setOpen] = useState(false);

    const addField = (FieldVM, fieldName) => () => {
        if (fieldName === 'text' || fieldName === 'name') {
            const field = new FieldVM(fieldName, 'Text Label');
            formVM.addField(field);
        }

        if (fieldName === 'textarea') {
            const field = new FieldVM('Textarea Label');
            formVM.addField(field);
        }
    };

    return (
        <>
            <FormFieldContainer
                onClick={() => setOpen(prev => !prev)}
            >
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0'}}>
                    <FormLabel>{label}</FormLabel>
                    <IconUI
                        name={'chevronDown'}
                    />
                </div>
            </FormFieldContainer>

            {
                isOpen &&
                <div>
                    {
                        formVM.fieldList
                            .filter((field) => !field.id.includes('submit'))
                            .map((field) => {
                                return (
                                    <div>
                                        <div
                                            onClick={(e) => openPopup(e, field.id)}
                                            style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}}
                                        >
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <IconUI
                                                    name={'drag'}
                                                    style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                                />
                                                <div style={{width: 36, height: 36, background: '#F2F2F2', marginRight: 10, borderRadius: 5}}>
                                                    <IconUI
                                                        name={field.name}
                                                        style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                                    />
                                                </div>
                                                {field.label}
                                            </div>

                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <ButtonUI
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        formVM.deleteField(field.id);
                                                    }}
                                                    style={{height: 34}}
                                                >
                                                    <IconUI
                                                        name={'trash'}
                                                        color={'#F36567'}
                                                        style={{cursor: 'pointer'}}
                                                    />
                                                </ButtonUI>
                                                <IconUI
                                                    name={'chevronDown'}
                                                    style={{marginLeft: 10}}
                                                />
                                            </div>
                                        </div>

                                        {
                                            fieldId &&
                                            <BasePopup
                                                id={id}
                                                open={open}
                                                anchor={anchor}
                                                placement={'right-center'}
                                                offset={20}
                                                style={{zIndex: 9999}}
                                            >
                                                <PopupBody>
                                                    {
                                                        formVM.getFieldVM(fieldId).renderSettings()
                                                    }
                                                </PopupBody>
                                            </BasePopup>
                                        }
                                    </div>
                                );
                            })
                    }
                    <ClickAwayListener
                        onClickAway={addFieldClosePopup}
                    >
                        <div>
                            <ButtonUI
                                text={'add field'}
                                onClick={handleAddFieldPopup}
                            />

                            <BasePopup
                                open={addFieldOpen}
                                anchor={addFieldAnchor}
                                placement={'left-center'}
                                offset={20}
                                style={{zIndex: 9999}}
                            >
                                <PopupBody>
                                    {
                                        fieldList
                                            .map(({fieldName, FieldVM}) => {
                                                return (
                                                    <ButtonUI
                                                        text={fieldName}
                                                        contentLeft={
                                                            <IconUI
                                                                name={`${fieldName}Field`}
                                                            />
                                                        }
                                                        onClick={addField(FieldVM, fieldName)}
                                                    />
                                                );
                                            })
                                    }
                                </PopupBody>
                            </BasePopup>
                        </div>
                    </ClickAwayListener>
                </div>
            }
        </>
    );
});
