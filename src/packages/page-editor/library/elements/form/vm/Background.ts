export class Background {
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

    toggleBackground() {
        this.isBackgroundVisible = !this.isBackgroundVisible;
    }

    setColor(value) {
        this.color = value;
    }

    get backgroundColor() {
        return this.isBackgroundVisible ?
            this.color.hex :
            'transparent';
    }
}