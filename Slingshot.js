class Slingshot {
    constructor(body1,pointb){
        var options={
            bodyA:body1,
            pointB:pointb,
            stiffness:0.04,
            length:1
        }
        this.pointB = pointb
        this.sling=Constraint.create(options)
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    /*attach(body){
        this.sling.bodyA=body;
    }*/
    display(){
        if (this.sling.bodyA){
            strokeWeight(4);
            stroke("red");
            fill("blue");
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointB
           
            line(point1.x,point1.y,point2.x,point2.y);
        }
    }  
}