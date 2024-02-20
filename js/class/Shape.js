export class Shape {
    _x;
    _y;
    _lineWidth;
    _color;

    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._lineWidth = 1;
        this._color = 'black';
    }

    set color(color) {
        this._color = color;
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth;
    }
}