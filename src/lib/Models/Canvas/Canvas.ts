import Rectangle from "../Rectangle/Rectangle";

class Canvas 
{
    public constructor(private readonly canvas: HTMLCanvasElement) 
    {
        this.setDrawColor("white");
    }

    public clear(): void 
    {
        this.setDrawColor("black");
        this.get2dContext().fillRect(0, 0, this.getRightPx(), this.getHeight());
        this.setDrawColor("white");
    }

    private get2dContext(): CanvasRenderingContext2D 
    {
        return this.canvas.getContext("2d");
    }

    public setDrawColor(setting: string): void 
    {
        this.get2dContext().fillStyle = setting;
    }

    public drawRect(rect: Rectangle): void 
    {
        this.get2dContext().fillRect(rect.x, rect.y, rect.xOffset, rect.yOffset);
    }

    public getLeftPx(): 0 
    {
        return 0;
    }

    public getRightPx(): number 
    {
        return this.canvas.width;
    }

    public getWidthCenterPx(): number 
    {
        return this.getRightPx() / 2;
    }

    public getHeight(): number 
    {
        return this.canvas.height;
    }

    public getHeightCenterPx(): number 
    {
        return this.canvas.height / 2;
    }
}

export default Canvas;
