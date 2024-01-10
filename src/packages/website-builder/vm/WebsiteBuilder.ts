'use client'

import {PageEditorVM, Converter} from '../../page-editor';
import {cl, EVENTS} from '../../communication-layer';
import {createPage, deletePage} from '../repository';

import {makeAutoObservable, reaction} from 'mobx';

export class WebsiteBuilder {
    private pagesMap = new Map();
    public pageEditor: any;

    public isLoading = false;

    constructor(
        private id: number = Math.round(Math.random() * 1000000),
        private name?: string,
        private pages: any[] = []
    ) {
        makeAutoObservable(this);

        cl.register('WebsiteBuilder', this);

        this.fillOutPagesMap(this.pages);

        this.pageEditor = new PageEditorVM();
    }

    public addPage(page: any) {
        this.pagesMap.set(page.id, page);
        
        return page;
    }

    private fillOutPagesMap(pageList) {
        for (const page of pageList) {
            const pageEntity = new Converter(page.sections, page.id, page.name).getPage();
            this.addPage(pageEntity);
        }
    }

    public async asyncDeletePage(id: number) {
        const deletedPage = await deletePage(id);
        this.pagesMap.delete(id);
    }

    public deletingPage(loadingHandler) {
        return {
            loadingReactionDisposer: reaction(() => this.isLoading, (isLoading) => {
                console.log(isLoading, '__isLoadingDELETING__');
                loadingHandler?.();
            }),
        };
    }

    public async asyncAddPage() {
        this.isLoading = true;
        const page = await createPage();
        this.isLoading = false;

        const pageEntity = new Converter([], page.id, page.name).getPage();
        console.log(this, '__THIS__');
        this.addPage(pageEntity);
        this.isLoading = false;
    }

    public addingPage(loadingHandler) {
        return {
            loadingReactionDisposer: reaction(() => this.isLoading, (isLoading) => {
                console.log(isLoading, '__isLoading__');
                loadingHandler?.();
            }),
        };
    }

    get pageList() {
        return [...this.pagesMap.values()];
    }
}

// const vm = new WebsiteBuilder();


// reaction(() => vm.isLoading, (isLoading) => {
//     console.log(isLoading, '__isLoading__');
// });
