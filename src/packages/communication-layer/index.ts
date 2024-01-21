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
    ADD_SECTION_TO_POSITION: 'add_section_to_position',
    MOVE_SECTION_UP: 'move_section_up',
    MOVE_SECTION_DOWN: 'move_section_down',
    REMOVE_SECTION: 'remove_section',
    UPDATE_LAYOUT_MODE: 'update_layout_mode',
};
