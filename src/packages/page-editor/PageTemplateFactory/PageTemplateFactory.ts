'use client'

import {BlankPage, SimplePage, RandomPage} from './templates';

export class PageTemplateFactory {
    static createBlankPage() {
        return new BlankPage();
    }

    static createSimplePage() {
        return new SimplePage();
    }

    static createRandomPage() {
        return new RandomPage();
    }
}
