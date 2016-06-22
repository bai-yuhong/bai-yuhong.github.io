//定义坦克的颜色
//敌人可以连续的发射子弹了
var heroColor=new Array("#BA9658","#FEF26E");
var enemyColor=new Array("#00A2B5","#00FEFE");
function Bomb(x,y){
	this.x=x;
	this.y=y;
	this.isLive=true;
	this.blood=9;
	this.bloodDown=function(){
		if(this.blood>0){
			this.blood--;
			}
		else{
			this.isLive=false;
			}
		}
}
function Tank(x,y,direct,color)
{
	this.x=x;
this.y=y;
		this.isLive=true;
this.speed=3;
this.direct=direct;
this.color=color;
this.moveUp=function()
{
	if(this.y>0&&checkID(this,all,0))
{this.y-=this.speed;}
this.direct=0;
}
this.moveRight=function()
{if(this.x+30<960&&checkID(this,all,1))
{this.x+=this.speed;}
this.direct=1;
}
this.moveLeft=function()
{if(this.x>0&&checkID(this,all,3))
{this.x-=this.speed;}
this.direct=3;
}
this.moveDown=function()
{if(this.y+30<600&&checkID(this,all,2))
{this.y+=this.speed;}
this.direct=2;
}
}


//定义一个Hero类
//x表示坦克的横坐标，y是纵坐标，direct是方向
function Hero(x,y,direct,color){
	this.abc=Tank;
	this.type="hero";
	this.abc(x,y,direct,color);
	this.shotEnemy=function(){
		switch(this.direct){
		case 0:
		heroBullet=new Bullet(this.x+9,this.y,this.direct,3,"hero",this);
		break;
		case 1:
		heroBullet=new Bullet(this.x+30,this.y+9,this.direct,3,"hero",this);
		break;
		case 2:
		heroBullet=new Bullet(this.x+9,this.y+30,this.direct,3,"hero",this);
		break;
		case 3:
		heroBullet=new Bullet(this.x,this.y+9,this.direct,3,"hero",this);
		break;
		}
		heroBullets.push(heroBullet);
		var timer=window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50);	
		heroBullets[heroBullets.length-1].timer=timer;	
	}
}
//定义一个EnemyTank 类
function EnemyTank(x,y,direct,color){
	this.abc=Tank;
	this.count=0;
	this.type="enemy";
	this.bulletIsLive=false;
	this.abc(x,y,direct,color);
	this.run=function run()
	{
		switch(this.direct)
		{
			case 0:
				this.moveUp();
				break;
			case 1:
				this.moveRight();
				break;
			case 2:
				this.moveDown();
				break;
			case 3:
				this.moveLeft();
				break;
		}
		if(this.count>30){
			this.direct=Math.round(Math.random()*3);
			this.count=0;
		}
		this.count++;
		if(this.bulletIsLive==false)
		{
			switch (this.direct)
			{
				case 0:
				enemyBullet=new Bullet(this.x+9,this.y,this.direct,3,"enemy",this);
				break;
				case 1:
				enemyBullet=new Bullet(this.x+30,this.y+9,this.direct,3,"enemy",this);
				break;
				case 2:
				enemyBullet=new Bullet(this.x+9,this.y+30,this.direct,3,"enemy",this);
				break;
				case 3:
				enemyBullet=new Bullet(this.x,this.y+9,this.direct,3,"enemy",this);
				break;
			}
			enemyBullets.push(enemyBullet);
			var ebtimer=window.setInterval("enemyBullets["+(enemyBullets.length-1)+"].run()",50);
			enemyBullets[enemyBullets.length-1].timer=ebtimer;
			this.bulletIsLive=true;
		}
	}
}
//定义子弹类
function Bullet(x,y,direct,speed,type,tank){
	this.x=x;
	this.y=y;
	this.direct=direct;
	this.speed=speed
	this.timer=null;
	this.type=type;
	this.tank=tank;
	this.isLive=true;
	this.run=function run(){
		if(this.x<=0||this.x>=960||this.y<=0||this.y>=600)
			{
			window.clearInterval(this.timer);
			this.timer=null;
			this.isLive=false;
			if(this.type=="enemy"){
				this.tank.bulletIsLive=false;
			}
			}
		else
		{
			switch(this.direct){
				case 0:
				this.y-=this.speed;
				break;
				case 1:
				this.x+=this.speed;
				break;
				case 2:
				this.y+=this.speed;
				break;
				case 3:
				this.x-=this.speed;
				break;
			}
		}
		document.getElementById("aa").innerText="子弹x="+this.x+" 子弹y="+this.y; 

	}
}
//画坦克
function drawTank(tank)
{
	if(tank.isLive){
//考虑方向
switch(tank.direct){
case 0:
case 2:
cxt.fillStyle=tank.color[0];
//先画死坦克，再画活坦克
//先画出左边的矩形
cxt.fillRect(tank.x,tank.y,5,30);
//画出右面的矩形
cxt.fillRect(tank.x+15,tank.y,5,30);
cxt.fillRect(tank.x+6,tank.y+5,8,20);
cxt.fillStyle=tank.color[1];
cxt.arc(tank.x+10,tank.y+15,4,0,Math.PI*2,true);
cxt.fill();
cxt.strokeStyle=tank.color[1];
cxt.lineWidth=2;
cxt.beginPath();
cxt.moveTo(tank.x+10,tank.y+15);
if(tank.direct==0){
cxt.lineTo(tank.x+10,tank.y);}
else if(tank.direct==2)
{cxt.lineTo(tank.x+10,tank.y+30);}
cxt.closePath();
cxt.stroke();
break;
case 1:
case 3:
cxt.fillStyle=tank.color[0];
//先画死坦克，再画活坦克
//先画出左边的矩形
cxt.fillRect(tank.x,tank.y,30,5);
//画出右面的矩形
cxt.fillRect(tank.x,tank.y+15,30,5);
cxt.fillRect(tank.x+5,tank.y+6,20,8);
cxt.fillStyle=tank.color[1];
cxt.arc(tank.x+15,tank.y+10,4,0,Math.PI*2,true);
cxt.fill();
cxt.strokeStyle=tank.color[1];
cxt.lineWidth=2;
cxt.beginPath();
cxt.moveTo(tank.x+15,tank.y+10);
if(tank.direct==1){
cxt.lineTo(tank.x+30,tank.y+10);}
else if(tank.direct==3)
{cxt.lineTo(tank.x,tank.y+10);}
cxt.closePath();
cxt.stroke();
break;
}
	}
}
//画出自己的子弹
function drawHeroBullet(){
	for(var i=0;i<heroBullets.length;i++){
		var heroBullet=heroBullets[i];
		if(heroBullet!=null&&heroBullet.isLive){
				cxt.fillStyle="#FEF26E";
				cxt.fillRect(heroBullet.x,heroBullet.y,2,2);
				}
		}
}

function isHitEnemyTank(){
	for(var i=0;i<heroBullets.length;i++){
		var heroBullet=heroBullets[i];
		if(heroBullet.isLive){

				for(var j=0;j<besideHero.length;j++){
					var a=besideHero[j];
					if(a.type=="enemy"){	
					if(a.isLive){
						switch(a.direct){
							case 0:
							case 2:
							
							if(heroBullet.x>=a.x&&heroBullet.x<=a.x+20
										&&heroBullet.y>=a.y&&heroBullet.y<=a.y+30)
							{	
								a.isLive=false;
								besideHero.splice(j,1);
								all.splice(j,1);
								heroBullet.isLive=false;
								window.clearInterval(heroBullet.timer);
								heroBullet.timer=null;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
							}
							break;
							case 1:
							case 3:
							if(heroBullet.x>=a.x&&heroBullet.x<=a.x+30
										&&heroBullet.y>=a.y&&heroBullet.y<=a.y+20)
							{
								a.isLive=false;
								besideHero.splice(j,1);
								all.splice(j,1);
								heroBullet.isLive=false;
								window.clearInterval(heroBullet.timer);
								heroBullet.timer=null;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
							
							}
							break;
						}//switch
					}//if(enemyTank.isLive)
					}//if(a.type=="enemy")
					else if(a.isLive&&a.type==1){if(heroBullet.x>=a.x&&heroBullet.x<=a.x+30
										&&heroBullet.y>=a.y&&heroBullet.y<=a.y+30)
							{	
								a.isLive=false;
								heroBullet.isLive=false;
								window.clearInterval(heroBullet.timer);
								heroBullet.timer=null;
								besideHero.splice(j,1);
								all.splice(j,1);
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
							}}
					else if(a.isLive&&a.type==2){if(heroBullet.x>=a.x&&heroBullet.x<=a.x+30
										&&heroBullet.y>=a.y&&heroBullet.y<=a.y+30)
							{	
								
								heroBullet.isLive=false;
								window.clearInterval(heroBullet.timer);
								heroBullet.timer=null;
							}}
				}
		}
	}
}
function drawEnemyBomb()
{
		for(var i=0;i<bombs.length;i++)
		{
			var bomb=bombs[i];
			if(bomb.isLive)
			{
				if(bomb.blood>6)
				{
					var img1=new Image();
					img1.src="bomb_1.gif";
					var x=bomb.x;
					var y=bomb.y;
					img1.onload=function()
					{
						cxt.drawImage(img1,x,y,30,30);
					}
				}
				else if(bomb.blood>3)
				{
					var img2=new Image();
					img2.src="bomb_2.gif";
					var x=bomb.x;
					var y=bomb.y;
					img2.onload=function()
					{
						cxt.drawImage(img2,x,y,30,30);
					}
				}
				else
				{
					var img3=new Image();
					img3.src="bomb_3.gif";
					var x=bomb.x;
					var y=bomb.y;
					img3.onload=function()
					{
						cxt.drawImage(img3,x,y,30,30);
					}
				}
				bomb.bloodDown();
				if(bomb.blood<=0)
				{
					bombs.splice(i,1);
				}
			
			}
		}
}
function drawEnemyBullet(){
	for(var i=0;i<enemyBullets.length;i++){
		var ebBullet=enemyBullets[i];
		if(ebBullet.tank.isLive==false)
		{
			ebBullet.isLive=false;
		}
		if(ebBullet.isLive){
			cxt.fillStyle="#00FEFE";
			cxt.fillRect(ebBullet.x,ebBullet.y,2,2);
		}
	}
	
}

//障碍物
function Obstacle(x,y,type){
	this.x=x;
	this.y=y;
	this.type=type;
	this.width=30;
	this.isLive=true;
}


function drawObs(){
for(var i=0;i<obs.length;i++){
if(obs[i].isLive == true && obs[i] != null){
			var img = new Image();
			if(obs[i].type == 1){
				img.src = 'zhuan.jpg'; 
			}else if(obs[i].type == 2){
				img.src = 'gang.jpg'; 
			}else{
				img.src ='water.jpg'; 
			}
			//img.onload=function(){
			cxt.drawImage(img,obs[i].x,obs[i].y,obs[i].width,obs[i].width);
			//}
			}
	
}
}
function checkID(enemy,arr,direct)
{
	var flag=true;
	switch (direct){
		case 0:
		for(var i=0;i<arr.length;i++){
			if((enemy.x>=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i])||(enemy.x+20>=arr[i].x&&enemy.x+20<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i]))
			{
				flag=false;
			}
		}
		return flag;
		break;
		case 1:
			for(var i=0;i<arr.length;i++){
			if((enemy.x+30>=arr[i].x&&enemy.x+30<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i])||(enemy.x+30>=arr[i].x&&enemy.x+30<=arr[i].x+30&&enemy.y+20>=arr[i].y&&enemy.y+20<=arr[i].y+30&&enemy!=arr[i]))
			{
				flag=false;
			}
		}
		return flag;
		break;
		case 2:
			for(var i=0;i<arr.length;i++){
			if((enemy.x>=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i])||(enemy.x>=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y+20>=arr[i].y&&enemy.y+20<=arr[i].y+30&&enemy!=arr[i]))
			{
				flag=false;
			}
		}
		return flag;
		break;
		case 3:
			for(var i=0;i<arr.length;i++){
			if((enemy.x>=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y+30>=arr[i].y&&enemy.y+30<=arr[i].y+30&&enemy!=arr[i])||(enemy.x+20>=arr[i].x&&enemy.x+20<=arr[i].x+30&&enemy.y+30>=arr[i].y&&enemy.y+30<=arr[i].y+30&&enemy!=arr[i]))
			{
				flag=false;
			}
		}
		return flag;
		break;
	}
}
//射击英雄
function hitHero()
{
	for(var i=0;i<enemyBullets.length;i++)
	{
		if(enemyBullets[i].isLive)
		{
			for(var j=0;j<besideEnemy.length;j++)
			{	var a=besideEnemy[j];
				if(a.type=="hero"&&a.isLive)
				{
					switch(a.direct)
					{
						case 0:
						case 2:
						if(enemyBullets[i].x>=a.x&&enemyBullets[i].x<=a.x+20&&enemyBullets[i].y>=a.y&&enemyBullets[i].y<=a.y+30)
						{
							a.isLive=false;
							enemyBullets[i].isLive=false;
							enemyBullets[i].tank.bulletIsLive=false;
								window.clearInterval(enemyBullets[i].timer);
								enemyBullets[i].timer=null;
							var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
							alert("You lost!");
							besideEnemy.splice(j,1);
							all.splice((all.length-1),1);
						
							
						}
						break;
						case 1:
						case 3:
						if(enemyBullets[i].x>=a.x&&enemyBullets[i].x<=a.x+30&&enemyBullets[i].y>=a.y&&enemyBullets[i].y<=a.y+20)
						{	var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
							a.isLive=false;
							enemyBullets[i].isLive=false;
							enemyBullets[i].tank.bulletIsLive=false;
							window.clearInterval(enemyBullets[i].timer);
								enemyBullets[i].timer=null;
							besideEnemy.splice(j,1);
							all.splice((all.length-1),1);
								alert("You lost!");
							
						}
						break;
					}//switch
				}//ifif(a.type=="hero")
				else if(a.isLive&&a.type==1)
				{if(enemyBullets[i].x>=a.x&&enemyBullets[i].x<=a.x+30&&enemyBullets[i].y>=a.y&&enemyBullets[i].y<=a.y+30)
						{
							a.isLive=false;
							enemyBullets[i].isLive=false;
							enemyBullets[i].tank.bulletIsLive=false;
								window.clearInterval(enemyBullets[i].timer);
								enemyBullets[i].timer=null;
							var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
						
							besideEnemy.splice(j,1);
							all.splice(j,1);
							
						}
					}//if(a.type==1)
				else if(a.isLive&&a.type==2)
				{	if(enemyBullets[i].x>=a.x&&enemyBullets[i].x<=a.x+30&&enemyBullets[i].y>=a.y&&enemyBullets[i].y<=a.y+30){
				enemyBullets[i].isLive=false;
				enemyBullets[i].tank.bulletIsLive=false;
					window.clearInterval(enemyBullets[i].timer);
								enemyBullets[i].timer=null;}
					
					}//if(a.type==2)
			}//for(var j=0;j<besideEnemy.length;j++)
		}//if(enemyBullets[i].isLive)
	}//for(var i=0;i<enemyBullets.length;i++)
}
function isClick()
{
	for(i=0;i<enemyTanks.length;i++)
	{
		var a=enemyTanks[i];
		if(a.isLive&&hero.isLive)
		{
			switch(a.direct)
			{
				case 0:
				case 2:
					switch(hero.direct)
					{
						case 0:
							if((hero.x>=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
						case 1:
						if((hero.x+30>=a.x&&hero.x+30<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+30>=a.x&&hero.x+30<=a.x+20&&hero.y+20>=a.y&&hero.y+20<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
						case 2:
						if((hero.x>=a.x&&hero.x<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
						case 3:
						if((hero.x>=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x>=a.x&&hero.x<=a.x+20&&hero.y+20>=a.y&&hero.y+20<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
					}//switch
					break;
				case 1:
				case 3:
					switch(hero.direct)
					{
						case 0:
							if((hero.x>=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
						case 1:
						if((hero.x+30>=a.x&&hero.x+30<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+30>=a.x&&hero.x+30<=a.x+20&&hero.y+20>=a.y&&hero.y+20<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
						case 2:
						if((hero.x>=a.x&&hero.x<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
						case 3:
						if((hero.x>=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x>=a.x&&hero.x<=a.x+20&&hero.y+20>=a.y&&hero.y+20<=a.y+30))
							{
								hero.isLive=false;
								a.isLive=false;
								var bomb=new Bomb(a.x,a.y)
								bombs.push(bomb);
								alert("You lost!");
							}
							break;
					}//switch
					break;
			}
		}
	}
}






















