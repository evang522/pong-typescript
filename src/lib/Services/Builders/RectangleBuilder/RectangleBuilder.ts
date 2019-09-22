import Rectangle from '../../../Models/Rectangle/Rectangle';
class RectangleBuilder 
{
    public constructor (
        private rect: Rectangle = new Rectangle(),
    ) 
    {}

    public withLocation(x: number, y: number): RectangleBuilder 
    {
        this.rect.x = x;
        this.rect.y = y;
        return this;
    }

    public withSizeOffset(x: number, y: number): RectangleBuilder 
    {
        this.rect.xOffset = x;
        this.rect.yOffset = y;
        return this;
    }

    public build(): Rectangle 
    {
        return this.rect;
    }

    public static fromDimensions(
        xPos: number,
        yPos: number,
        xOffs: number,
        yOffs: number,
    ): Rectangle 
    {
        const self = new this();
        return self
            .withLocation(xPos, yPos)
            .withSizeOffset(xOffs, yOffs)
            .build();
    }
}
export default RectangleBuilder;
