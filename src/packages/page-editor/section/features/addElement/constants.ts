import {TextVM, ImageVM, ButtonVM, FormVM, ShapeVM} from '../../../library/elements';
import {iconsMap} from '../../../../diamond-ui/icons';

export const elementList = [
    {
        type: 'basic',
        name: 'text',
        icon: iconsMap.text,
        action: (section) => {
            section.addElement(new TextVM(section.gridVM));
        },
    },
    {
        type: 'basic',
        name: 'image',
        icon: iconsMap.image,
        action: (section) => {
            section.addElement(new ImageVM(section.gridVM));
        },
    },
    {
        type: 'basic',
        name: 'button',
        icon: iconsMap.button,
        action: (section) => {
            section.addElement(new ButtonVM(section.gridVM));
        },
    },
    {
        type: 'basic',
        name: 'form',
        icon: iconsMap.form,
        action: (section) => {
            section.addElement(new FormVM(section.gridVM));
        },
    },
    {
        type: 'basic',
        name: 'shape',
        icon: iconsMap.shape,
        action: (section) => {
            section.addElement(new ShapeVM(section.gridVM));
        },
    },
];
