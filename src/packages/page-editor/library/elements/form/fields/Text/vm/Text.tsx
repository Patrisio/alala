import {Text as TextUI} from '../Text';
import Settings from '../Settings';

import {v4 as uuid} from 'uuid';
import {makeAutoObservable} from 'mobx';

export class Text {
    public id: string = uuid();
    public name: string = 'textField';
    public value?: string;
    public placeholder?: string;

    constructor(
        private type: string,
        private label: string,
    ) {
        makeAutoObservable(this);
    }

    onChange(value) {
        this.value = value;
    }

    setLabel(label: string) {
        this.label = label;
    }

    renderSettings() {
        return (
            <Settings textFieldVM={this} />
        );
    }

    render() {
        return (
            <TextUI vm={this} />
        );
    }
}
