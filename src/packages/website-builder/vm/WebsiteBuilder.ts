'use client'

import {PageEditorVM} from '../../page-editor';

import {makeAutoObservable} from 'mobx';

export class WebsiteBuilder {
    private pagesMap = new Map();
    public pageEditor: any;

    constructor() {
        makeAutoObservable(this);

        this.pageEditor = new PageEditorVM();
    }

    public addPage(page: any) {
        this.pagesMap.set(page.id, page);
        
        return page;
    }

    get pageList() {
        return [...this.pagesMap.values()];
    }
}
