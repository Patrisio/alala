import {ElementVM} from '../../../../element/vm';
import {config} from './config';
import {TextVM, SubmitVM, TextareaVM} from '../fields';
import ElementEditor from '../settings/ElementEditor';

import {makeObservable, observable, computed, action, toJS} from 'mobx';

export class Form extends ElementVM {
    public fieldsMap = new Map();
    public formName = 'Default form name';

    // public background = new Background();

    private defaultBackgroundColor = {
        hex: "#000000",
        rgb: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        },
        hsv: {
            h: 259.4219653179191,
            s: 0,
            v: 0,
            a: 1
        }
    };

    // Это background элемента Form
    public color = this.defaultBackgroundColor;
    public isBackgroundVisible = false;

    constructor(
        gridViewModel: any,
        width: number = gridViewModel.getElementWidth(config.position.columnStart, config.position.columnEnd),
        height: number = gridViewModel.getElementHeight(config.position.rowStart, config.position.rowEnd),
        minWidth: number = gridViewModel.cellWidth,
        minHeight: number = 542,
        position: any = {...config.position},
    ) {
        super(
            gridViewModel,
            width,
            height,
            minWidth,
            minHeight,
            position,
            'FORM',
        );

        makeObservable(this, {
            formName: observable,
            fieldList: computed,
            fieldsMap: observable.deep,
            isBackgroundVisible: observable,
            color: observable,
            toggleBackground: action,
        });

        this.setupDefaultForm();
        this.toggleBackground = this.toggleBackground.bind(this);
    }

    public addField(field: any) {
        this.fieldsMap.set(field.id, field);
    }

    public deleteField(fieldId: string) {
        console.log(fieldId, '__fieldId__');
        const isDeleted = this.fieldsMap.delete(fieldId);
        console.log(this.fieldsMap, isDeleted);
    }

    private setupDefaultForm() {
        const firstNameTextField = new TextVM(
            'text',
            'First Name',
        );
        this.addField(firstNameTextField);

        const lastNameTextField = new TextVM(
            'text',
            'Last Name',
        );
        this.addField(lastNameTextField);

        const emailField = new TextVM(
            'email',
            'Email'
        );
        this.addField(emailField);

        const subjectTextField = new TextVM(
            'text',
            'Subject'
        );
        this.addField(subjectTextField);

        const messageTextareaField = new TextareaVM('Message');
        this.addField(messageTextareaField);

        const submit = new SubmitVM();
        this.addField(submit);
    }

    setFormName(formName: string) {
        this.formName = formName;
    }

    getSubmitVM() {
        const submitVMId = [...this.fieldsMap.keys()].find((fieldKey) => fieldKey.includes('submit'));

        if (!submitVMId) {
            throw new Error('В элементе формы отсутствует Submit.');
        }

        const submitVM = this.fieldsMap.get(submitVMId);

        return submitVM;
    }

    getTextVM(fieldId: string) {
        const submitVMId = [...this.fieldsMap.keys()].find((fieldKey) => fieldKey === fieldId);

        if (!submitVMId) {
            throw new Error('В элементе формы отсутствует Text.');
        }

        const submitVM = this.fieldsMap.get(submitVMId);

        return submitVM;
    }

    getFieldVM(fieldId: String) {
        const fieldVM = this.fieldsMap.get(fieldId);
        console.log(fieldId, '__fieldId__');
        console.log(fieldVM);
        if (!fieldId) {
            throw new Error(`В элементе формы отсутствует field по id=${fieldId}`);
        }

        return fieldVM;
    }

    toggleBackground() {
        this.isBackgroundVisible = !this.isBackgroundVisible;
    }

    setColor(value) {
        this.color = value;
    }

    renderElementEditor() {
        return (
            <ElementEditor
                elementUnitViewModel={this}
            />
        );
    }

    get backgroundColor() {
        return this.isBackgroundVisible ?
            this.color.hex :
            'transparent';
    }

    get fieldList() {
        return [...toJS(this.fieldsMap).values()];
    }
}
