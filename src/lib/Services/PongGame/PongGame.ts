import Canvas from '../../Models/Canvas/Canvas';
import PongBall from '../../Models/PongBall/index';
import Rectangle from '../../Models/Rectangle/Rectangle';
import Vector from '../../Models/Vector/Vector';

class PongGame {
    private canvas: Canvas;
    private ball: PongBall;
    private lastTimestamp: number = 0;

    public constructor(
        canvasId: string,
    ) {
        this.canvas = this.buildCanvas(canvasId);
        this.ball = this.buildBall();
    }

    public start() {
        this.draw();
    }

    private drawBall() {
        this.canvas.clear();
        this.canvas.setDrawColor('white');
        this.canvas.drawRect(this.ball.getShape());
    }

    private updateBallPosition(lifeCycleMs: number) {
        if (this.ball.getShape().getLeftSide() < this.canvas.getLeftPx()) {
            this.ball.speedX = -this.ball.speedX;
        }
        
        if (this.ball.getShape().getRightSide() > this.canvas.getRightPx()) {
            this.ball.speedX = -this.ball.speedX;
        }
        
        if (this.ball.getShape().getTopSide() < 0) {
            this.ball.speedY = -this.ball.speedY;
        }
        if (this.ball.getShape().getBottomSide() > this.canvas.getHeight())  {
            this.ball.speedY = -this.ball.speedY;
        }

        const timeDiff = lifeCycleMs - this.lastTimestamp;
        this.lastTimestamp = lifeCycleMs;
        const adjusted = timeDiff / 1500;

        this.ball.getShape().x += this.ball.speedX * adjusted;
        this.ball.getShape().y += this.ball.speedY * adjusted;
    }

    private buildCanvas(canvasId: string): Canvas {
        const canvasElement = document.getElementById(canvasId) as HTMLCanvasElement;
        if (!canvasElement) {
            throw new Error('Canvas Element not found');
        }

        canvasElement.width = 1000;
        canvasElement.height = 500;

        return new Canvas(canvasElement);
    }

    public draw = (ms?: number) => {
        this.drawBall();
        this.updateBallPosition(ms || 0);
        window.requestAnimationFrame(this.draw);
    }

    private buildBall() {
        const location = new Rectangle(
            new Vector( this.canvas.getWidthCenterPx(),  this.canvas.getHeightCenterPx()),
            new Vector(8, 8),
        )

        const speed = new Vector(300, 200);
        return new PongBall(location, speed);
    }   
}

export default PongGame;