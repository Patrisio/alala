'use client'

import {useState} from 'react';
import {Converter} from '../../page-editor/Converter';
import {ShapeVM, ButtonVM, ImageVM, TextVM, FormVM} from '../../page-editor/library/elements';
import {PageTemplateFactory} from '../../page-editor';
import {createWebsite, createEmptyWebsite, savePage, hello, updatePage} from '../../website-builder/repository/createPage';
let pageConfigOuter;

export const Debug = ({page}) => {
    const [section, setSection] = useState(null);

    const onChangeRowsHandler = (e) => {
        const value = e.target.value ?? 1;
        section.gridVM.rows = parseInt(value);
    };

    const onChangeColumnsHandler = (e) => {
        const value = e.target.value ?? 0;
        section.gridVM.columns = parseInt(value)
        section.gridVM.columns = parseInt(value);
    };

    const onChangeRowGapHandler = (e) => {
        const value = e.target.value ?? 0;
        section.gridVM.rowGap = parseInt(value);
    };

    const onChangeColumnGapHandler = (e) => {
        const value = e.target.value ?? 0;
        section.gridVM.columnGap = parseInt(value);
    };


    // const addShapeHandler = () => {
    //     section.addElement(new ShapeVM(section.gridVM));
    // };

    // const addButtonHandler = () => {
    //     section.addElement(new ButtonVM(section.gridVM));
    // };

    // const addImageHandler = () => {
    //     section.addElement(new ImageVM(section.gridVM));
    // };

    // const addTextHandler = () => {
    //     section.addElement(new TextVM(section.gridVM));
    // };

    // const addFormHandler = () => {
    //     section.addElement(new FormVM(section.gridVM));
    // };

    // const addRowHandler = () => {
    //     gridViewModel.rows = gridViewModel.rows + 1;
    // };

    const addSectionHandler = () => {
        const section = page.addSection();
        setSection(section);
    };

    const getConfigHandler = () => {
        const pageConfig = page.getPageConfig();
        pageConfigOuter = pageConfig;
        const pageResult = new Converter(pageConfig).getPage();
        localStorage.setItem('pageConfigExample', JSON.stringify(pageConfig));
    };

    const getLoadPageHandler = () => {
        const randomPage = PageTemplateFactory.createRandomPage();

        page.replacePage(randomPage);
    };

    const getCreateWebsiteHandler = () => {
        createWebsite();
    };

    const getCreateEmptyWebsiteHandler = () => {
        createEmptyWebsite('test name');
    };

    const savePageHandler = () => {
        // hello(pageConfigOuter);
        const pageId = Number(location.pathname.slice(1));
        console.log(pageConfigOuter, '__pageConfigOuter__');
        updatePage(pageId, pageConfigOuter);
    };

    // const renderPageHandler = () => {
    //     const pageConfig =localStorage.getItem('pageConfigExample');
    // };

    return (
        <div style={{position: 'fixed', bottom: 0}}>
            <div>columns count: {section?.gridVM.columns} : {section?.gridVM.gridWidth} : {section?.gridVM.cellWidth}</div>

            <label>rows</label>
            <input onChange={onChangeRowsHandler} type="number" min={1} />

            <label>columns</label>
            <input onChange={onChangeColumnsHandler} type="number" min={1} />

            <label>rowGap</label>
            <input onChange={onChangeRowGapHandler} type="number" min={1} />

            <label>columnGap</label>
            <input onChange={onChangeColumnGapHandler} type="number" min={1} />

            {/* <button onClick={addRowHandler}>add row</button> */}

            {/* <button onClick={addShapeHandler}>add shape</button>
            <button onClick={addButtonHandler}>add button</button>
            <button onClick={addImageHandler}>add image</button>
            <button onClick={addTextHandler}>add text</button>
            <button onClick={addFormHandler}>add form</button> */}
            <button onClick={addSectionHandler}>add section</button>
            <button onClick={getConfigHandler}>get config</button>
            <button onClick={getLoadPageHandler}>load Page</button>
            <button onClick={getCreateWebsiteHandler}>create website</button>
            <button onClick={getCreateEmptyWebsiteHandler}>create empty website</button>
            <button onClick={savePageHandler}>save page</button>
            {/* <button onClick={renderPageHandler}>render page, using config from LS</button> */}
        </div>
    );
};
