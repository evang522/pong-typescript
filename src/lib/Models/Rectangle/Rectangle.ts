import Vector from "../Vector/Vector";

class Rectangle {
    public constructor(
        private location: Vector = new Vector(),
        private sizeOffset: Vector = new Vector(),
    ) {}

    get x() {
        return this.location.x;
    }
    set x(newX) {
        this.location.x = newX;
    }

    get y() {
        return this.location.y;
    }
    set y(newY) {
        this.location.y = newY;
    }

    get xOffset() {
        return this.sizeOffset.x;
    }
    set xOffset(xOffsetPx: number) {
        this.sizeOffset.x = xOffsetPx;
    }

    get yOffset() {
        return this.sizeOffset.y;
    }
    set yOffset(yOffsetPx) {
        this.sizeOffset.y = yOffsetPx;
    }

    public getRightSide(): number {
        return this.location.x + this.xOffset;
    }
    public getLeftSide(): number {
        return this.location.x;
    }
    public getTopSide(): number {
        return this.location.y;
    }
    public getBottomSide(): number {
        return this.location.y + this.yOffset;
    }
}

export default Rectangle;
