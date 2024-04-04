import {v4 as uuid} from 'uuid';
import {makeObservable, observable, action} from 'mobx';
import {createElement} from 'react';

export class Line {
    public id = uuid();
    public tagWrapper = 'p';
    public text = '';

    constructor(
        private textVM,
        private focus = false,
    ) {
        makeObservable(this, {
            text: observable,
            setText: action,
        });
    }

    setText(value) {
        this.text = value;
    }

    render() {
        const element = createElement(this.tagWrapper, {
            id: this.id,
            // contentEditable: true,
            style: {height: 20},
            // ...(this.focus && {
            //     ref: (element) => element?.focus(),
            // }),
            onKeyDown: (e) => {
                // console.log(e);
                // console.log(e.target, '__TRARGET__');
                // console.log(e.target.innerText, '__Value__');
                this.text = e.target.innerText;

                if (e.code === 'Enter') {
                    console.log('ENTER');
                    e.preventDefault();

                    const line = new Line(this.textVM, true /* focus */);
                    this.textVM.addLine(line);
                    
                    return;
                }
            },
            onMouseDown: (e) => {
                e.target.focus();
            }
        });

        return element;
    }
}
