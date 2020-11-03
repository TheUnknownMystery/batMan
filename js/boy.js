class Boy {

    constructor(x, y, w, h) {

        var options = {

            isStatic: true,
            restitution: 0.07
        }

        //Creating body....
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.image= loadImage("walking_1.png")
        this.width = w;//width..
        this.height= h;//height..

        World.add(world, this.body)

    }

    display() 
    {

        var pos = this.body.position;//body position..
        var w   = this.width;//body width..
        var h   = this.height;//body height..
        image(this.image, pos.x, pos.y, w, h);

    }
}
