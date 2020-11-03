class rain {

    constructor(x, y, r) {
        // creating a static body with restitution...
        var options = {

            isStatic: false,
            restitution: 0.3,
            friction: 0.4,
           
        }

        this.body = Bodies.circle(x, y, r, options);
        this.x = x; // x position..
        this.y = y; // y position..
        this.r = r; // radius of circle

        //adding to body to world
        World.add(world, this.body)

    }

    //creating a display Function
    display() 
    {
        
        var pos = this.body.position;

        pop()
        
        ellipse(pos.x, pos.y, this.r);
        noStroke();
        fill("blue")

        push()

    }
}
