'use client'

import {useRef, useEffect} from 'react';
import {observer} from 'mobx-react';

import {Element} from '../../../element/ui/element';
import {TextContainer, ParagraphElement} from './styles';
import {Line} from './vm/Line';

// import dynamic from "next/dynamic";
// import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

// const SunEditor = dynamic(() => import("suneditor-react"), {
//   ssr: false,
// });

// let uxTranslateX = 0;

export const Text = observer(({
    elementUnitViewModel,
    dragModel,
    resizeModel,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     console.log('__MMMMM___');
    //     elementUnitViewModel.setEventListener();
    // }, []);

    return (
        <Element
            targetRef={targetRef}
            contentRef={contentRef}
            elementUnitViewModel={elementUnitViewModel}
            dragModel={dragModel}
            resizeModel={resizeModel}
            focusOnClick
            useResizeObserver
        >
            <TextContainer
                gridArea={elementUnitViewModel.positionerUnitViewModel.gridArea}
                width={elementUnitViewModel.width}
                height={elementUnitViewModel.height}
                ref={targetRef}
                // contentEditable
                // onClick={(e) => {
                //     console.log('FOCUS__', e.target);
                //     targetRef?.current?.focus();
                // }}
                // onKeyDown={(e) => {
                //     console.log(e);
                //     console.log(e.target, '__TRARGET__');
                //     if (e.code === 'Enter') {
                //         console.log('ENTER');
                //         const line = new Line();
                //         elementUnitViewModel.addLine(line);
                //         e.preventDefault();
                //         return;
                //     }
                // }}
                // onInput={(e) => {
                //     console.log(e, 'TRIGGER__');
                //     console.log(e.target.value);
                // }}
            >
                <div
                    ref={contentRef}
                    contentEditable
                >
                    {/* {
                        elementUnitViewModel.lineList.map((line) => line.render())
                    } */}
                    {/* <ParagraphElement
                        data-placeholder={'Write here...'}
                        id={elementUnitViewModel.id}
                        onInput={(e) => {
                            console.log(e, 'TRIGGER__');
                        }}
                    /> */}
                </div>
            </TextContainer>
        </Element>
    );
});
