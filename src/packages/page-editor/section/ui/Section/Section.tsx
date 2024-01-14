'use client'

import {Grid} from '../../components/grid';
import {SectionContainer} from './styles';
import {Shape, Button, Image, Text, Form} from '../../../library/elements';

import {observer} from 'mobx-react';
import {useRef, useEffect} from 'react';

export const Section = observer(({vm}) => {
    const anchor = useRef(null);

    useEffect(() => {
        if (!anchor) return;
        vm.setHTMLElementRef(anchor);

        const sectionElement = anchor.current;
        const mouseoverListener = sectionElement.addEventListener('mouseover', () => {
            vm.isHovered = true;
        });
        const mouseoutListener = sectionElement.addEventListener('mouseout', () => {
            vm.isHovered = false;
        });

        return () => {
            sectionElement.removeEventListener('mouseover', mouseoverListener);
            sectionElement.removeEventListener('mouseout', mouseoutListener);
        };
    }, [anchor]);

    return (
        <>
            <div ref={anchor} />
            <SectionContainer
                gridVM={vm.gridVM}
                ref={anchor}
            >
                {vm.plugins}
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
