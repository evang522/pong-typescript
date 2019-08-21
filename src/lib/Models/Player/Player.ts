import Rectangle from '../Rectangle/Rectangle';
import Vector from '../Vector/Vector';
import RectangleBuilder from '../../Services/Builders/RectangleBuilder/index';


class Player {
    public constructor(
        private shape: Rectangle = RectangleBuilder.fromDimensions(10,10,20,50),
        private speed: Vector = new Vector(),
        public score: number = 0,
        public type: 'computer' | 'human' = 'human',
    ) {}

    public setSpeed(speedX: number, speedY: number) {
        this.speed = new Vector(speedX, speedY);
    }

    public setLocation(x: number, y: number) {
        this.shape.x = x;
        this.shape.y = y;
    }

    public getShape(): Rectangle {
        return this.shape;
    }

    get xSpeed(): number {
        return this.speed.x;
    }
    
    get ySpeed(): number {
        return this.speed.y;
    }
}

export default Player;
