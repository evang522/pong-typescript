import Canvas from '../../Models/Canvas/Canvas';
import PongBall from '../../Models/PongBall/index';
import Rectangle from '../../Models/Rectangle/Rectangle';
import Vector from '../../Models/Vector/Vector';
import Player from '../../Models/Player/index';
import RectangleBuilder from '../Builders/RectangleBuilder/index';

class PongGame {
    private canvas: Canvas;
    private ball: PongBall;
    private lastTimestamp: number = 0;
    private player1: Player;
    private player2: Player;

    public constructor(
        private canvasId: string,
    ) {
        this.canvas = this.buildCanvas(canvasId);
        this.ball = this.buildBall();
        this.player1 = new Player(RectangleBuilder.fromDimensions(15, 195, 10, 60));
        this.player2 = new Player(RectangleBuilder.fromDimensions(this.canvas.getRightPx() - 30, 195, 10, 60));
    }

    public start() {
        this.draw();
    }

    private drawBall() {
        this.canvas.clear();
        this.canvas.setDrawColor('white');
        this.canvas.drawRect(this.ball.getShape());
    }

    private drawPlayer(player: Player) {
        this.canvas.setDrawColor('white');
        this.canvas.drawRect(player.getShape());
    }

    private updateBallPosition(lifeCycleMs: number) {
        this.reverseBallDirectionIfOutOfBounds();
        this.reverseBallXDirectionIfContactingPlayer();
        const timeDiff = lifeCycleMs - this.lastTimestamp;
        this.lastTimestamp = lifeCycleMs;
        const adjusted = timeDiff / 900;

        this.ball.getShape().x += this.ball.speedX * adjusted;
        this.ball.getShape().y += this.ball.speedY * adjusted;
    }

    private reverseBallDirectionIfOutOfBounds() {
        if (this.ball.getShape().getLeftSide() <= this.canvas.getLeftPx()) {
            // this.ball.speedX = -this.ball.speedX;
            this.ball.speedX = 0
            this.ball.speedY = 0
        }
        
        if (this.ball.getShape().getRightSide() >= this.canvas.getRightPx()) {
            // this.ball.speedX = -this.ball.speedX;
            this.ball.speedX = 0
            this.ball.speedY = 0
        }
        
        if (this.ball.getShape().getTopSide() <= 0) {
            this.ball.speedY = -this.ball.speedY;
        }
        if (this.ball.getShape().getBottomSide() >= this.canvas.getHeight())  {
            this.ball.speedY = -this.ball.speedY;
        }
    }

    private reverseBallXDirectionIfContactingPlayer() {
        if (this.ball.getShape().getLeftSide() <= this.player1.getShape().getRightSide()) {
            
            if (this.ball.getShape().getTopSide() >= this.player1.getShape().getBottomSide()) {
                return;
            } 

            if (this.ball.getShape().getBottomSide() <= this.player1.getShape().getTopSide()) {
                return;
            }


            if (this.ball.speedX >= 0) {
                return;
            }

            this.ball.speedX = -(this.ball.speedX - 5);
        }

        if (this.ball.getShape().getRightSide() >= this.player2.getShape().getLeftSide()) {
            
            if (this.ball.getShape().getTopSide() >= this.player2.getShape().getBottomSide()) {
                return;
            } 

            if (this.ball.getShape().getBottomSide() <=this.player2.getShape().getTopSide()) {
                return;
            }

            if (this.ball.speedX <= 0) {
                return;
            }

            this.ball.speedX = -(this.ball.speedX  + 5);
        }
    }

    private updatePlayer2Position() {
        this.player2.setLocation(this.player2.getShape().x, this.ball.getShape().y - (this.player2.getShape().yOffset / 2));
    }

    

    private buildCanvas(canvasId: string): Canvas {
        const canvasElement = document.getElementById(canvasId) as HTMLCanvasElement;
        document.body.onkeydown = (e) => {
            if (e.key === 'ArrowUp') {
                if (this.player1.getShape().getTopSide() <= 0) {
                    return;
                }
                this.player1.setLocation(this.player1.getShape().x, this.player1.getShape().y - 55);
            }
            if (e.key === 'ArrowDown') {
                if (this.player1.getShape().getBottomSide() >= this.canvas.getHeight()) {
                    return;
                }
                this.player1.setLocation(this.player1.getShape().x, this.player1.getShape().y + 55);
            }
        };
        if (!canvasElement) {
            throw new Error('Canvas Element not found');
        }

        canvasElement.width = 1000;
        canvasElement.height = 500;

        return new Canvas(canvasElement);
    }

    public draw = (ms?: number) => {
        console.log(this.ball.speedX)
        this.drawBall();
        this.drawPlayer(this.player1);
        this.drawPlayer(this.player2);
        this.updateBallPosition(ms || 0);
        this.updatePlayer2Position();
        this.buildCenterLine()
        window.requestAnimationFrame(this.draw);
    }

    private buildCenterLine() {
        const centerLine = RectangleBuilder.fromDimensions(this.canvas.getWidthCenterPx() - 3, 0, 3, this.canvas.getHeight());
        this.canvas.drawRect(centerLine);
    }

    private buildBall() {
        const location = new Rectangle(
            new Vector( this.canvas.getWidthCenterPx(),  this.canvas.getHeightCenterPx()),
            new Vector(12, 12),
        )

        const speed = new Vector(500, 600);
        return new PongBall(location, speed);
    }   
}

export default PongGame;