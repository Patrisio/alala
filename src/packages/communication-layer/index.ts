import {EventEmitter} from 'events';

class CommunicationLayer extends EventEmitter {
    private modulesMap = new Map();

    register(moduleName: string, vm: any) {
        this.modulesMap.set(moduleName, vm);
    }

    to(moduleName: string, ) {
        return this.modulesMap.get(moduleName);
    }
}

export const cl = new CommunicationLayer();

export const EVENTS = {
    IFRAME_WITH_PAGE_EDITOR_HAS_LOADED: 'iframe_with_page_editor_has_loaded',
};
