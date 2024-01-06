'use client'

import {Grid} from '../../components/grid';
import {SectionContainer} from './styles';
import {observer} from 'mobx-react';
import {Shape, Button, Image, Text, Form} from '../../../library/elements';
import {useRef} from 'react';

export const Section = observer(({vm}) => {
    const anchor = useRef(null);

    return (
        <>
            <div ref={anchor}></div>
            <SectionContainer
                gridVM={vm.gridVM}
            >
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
