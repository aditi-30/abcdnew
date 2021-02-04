class launcher{
	constructor(body,anchor)
	{
		
		var options={ 
			bodyA:body,			 
			pointB:anchor, 
			stiffness:0.2, 
			length:25
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointB.x,pointB.y,pointA.x,pointA.y);
		}
	}
}