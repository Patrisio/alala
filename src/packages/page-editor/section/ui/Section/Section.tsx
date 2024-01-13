'use client'

import {Grid} from '../../components/grid';
import {SectionContainer} from './styles';
import {Shape, Button, Image, Text, Form} from '../../../library/elements';
import {AddElement} from '../../features';
import {RightControls} from './components';

import {observer} from 'mobx-react';
import {useRef} from 'react';

export const Section = observer(({vm}) => {
    const anchor = useRef(null);

    return (
        <>
            <div ref={anchor}></div>
            <SectionContainer
                gridVM={vm.gridVM}
            >
                <AddElement />
                <RightControls />

                <Grid
                    vm={vm.gridVM}
                />
                {
                    vm.elementList
                        .map((elementVM) => {
                            const {type} = elementVM;

                            if (type === 'SHAPE') {
                                return (
                                    <Shape
                                        elementUnitViewModel={elementVM}
                                        dragModel={vm.dragModel}
                                        resizeModel={vm.resizeModel}
                                        key={elementVM.id}
                                    />
                                );
                            }

                            if (type === 'BUTTON') {
                                return (
                                    <Button
                                        elementUnitViewModel={elementVM}
                                        dragModel={vm.dragModel}
                                        resizeModel={vm.resizeModel}
                                        key={elementVM.id}
                                    />
                                );
                            }

                            if (type === 'IMAGE') {
                                return (
                                    <Image
                                        elementUnitViewModel={elementVM}
                                        dragModel={vm.dragModel}
                                        resizeModel={vm.resizeModel}
                                        key={elementVM.id}
                                    />
                                );
                            }

                            if (type === 'TEXT') {
                                return (
                                    <Text
                                        elementUnitViewModel={elementVM}
                                        dragModel={vm.dragModel}
                                        resizeModel={vm.resizeModel}
                                        key={elementVM.id}
                                    />
                                );
                            }

                            if (type === 'FORM') {
                                return (
                                    <Form
                                        elementUnitViewModel={elementVM}
                                        dragModel={vm.dragModel}
                                        resizeModel={vm.resizeModel}
                                        key={elementVM.id}
                                    />
                                );
                            }
                        })
                }
            </SectionContainer>
        </>
    );
});
