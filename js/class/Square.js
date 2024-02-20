import { Rectangle } from "./Rectangle.js"

export class Square extends Rectangle {
    constructor(x, y, sideLength) {
        super(x, y, sideLength, sideLength)
    }
}