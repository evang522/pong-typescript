import Rectangle from '../Rectangle/Rectangle';
import Vector from '../Vector/Vector';


class PongBall {
    public constructor(
        private rect: Rectangle,
        private richtung: Vector,
    ) {}

    get speedX (): number {
        return this.richtung.x;
    }
    set speedX(speed : number) {
        this.richtung.x = speed;
    }

    get speedY (): number {
        return this.richtung.y;
    }
    set speedY(speed : number) {
        this.richtung.y = speed;
    }
    
    
    public getShape(): Rectangle {
        return this.rect;
    }
    
}

export default PongBall;