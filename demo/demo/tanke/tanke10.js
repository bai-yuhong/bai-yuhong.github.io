//����̹�˵���ɫ
//���˿��������ķ����ӵ���
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
{if(this.x+30<960&&checkid(this,all,1)) {this.x+="this.speed;}" this.direct="1;" }="" this.moveleft="function()" {if(this.x="">0&&checkID(this,all,3))
{this.x-=this.speed;}
this.direct=3;
}
this.moveDown=function()
{if(this.y+30<600&&checkid(this,all,2)) {this.y+="this.speed;}" this.direct="2;" }="" ����һ��hero��="" x��ʾ̹�˵ĺ����꣬y�������꣬direct�ƿ���="" function="" hero(x,y,direct,color){="" this.abc="Tank;" this.type="hero" ;="" this.abc(x,y,direct,color);="" this.shotenemy="function(){" switch(this.direct){="" case="" 0:="" herobullet="new" bullet(this.x+9,this.y,this.direct,3,"hero",this);="" break;="" 1:="" bullet(this.x+30,this.y+9,this.direct,3,"hero",this);="" 2:="" bullet(this.x+9,this.y+30,this.direct,3,"hero",this);="" 3:="" bullet(this.x,this.y+9,this.direct,3,"hero",this);="" herobullets.push(herobullet);="" var="" timer="window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50);" herobullets[herobullets.length-1].timer="timer;" ����һ��enemytank="" ��="" enemytank(x,y,direct,color){="" this.count="0;" this.bulletislive="false;" this.run="function" run()="" {="" switch(this.direct)="" this.moveup();="" this.moveright();="" this.movedown();="" this.moveleft();="" if(this.count="">30){
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
//�����ӵ���
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
		document.getElementById("aa").innerText="�ӵ�x="+this.x+" �ӵ�y="+this.y; 

	}
}
//��̹��
function drawTank(tank)
{
	if(tank.isLive){
//���Ƿ���
switch(tank.direct){
case 0:
case 2:
cxt.fillStyle=tank.color[0];
//�Ȼ���̹�ˣ��ٻ���̹��
//�Ȼ������ߵľ���
cxt.fillRect(tank.x,tank.y,5,30);
//���������ľ���
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
//�Ȼ���̹�ˣ��ٻ���̹��
//�Ȼ������ߵľ���
cxt.fillRect(tank.x,tank.y,30,5);
//���������ľ���
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
//�����Լ����ӵ�
function drawHeroBullet(){
	for(var i=0;i<herobullets.length;i++){ var="" herobullet="heroBullets[i];" if(herobullet!="null&&heroBullet.isLive){" cxt.fillstyle="#FEF26E" ;="" cxt.fillrect(herobullet.x,herobullet.y,2,2);="" }="" function="" ishitenemytank(){="" for(var="" i="0;i<heroBullets.length;i++){" if(herobullet.islive){="" j="0;j<besideHero.length;j++){" a="besideHero[j];" if(a.type="="enemy"){" if(a.islive){="" switch(a.direct){="" case="" 0:="" 2:="" if(herobullet.x="">=a.x&&heroBullet.x<=a.x+20 &&herobullet.y="">=a.y&&heroBullet.y<=a.y+30) {="" a.islive="false;" besidehero.splice(j,1);="" all.splice(j,1);="" herobullet.islive="false;" window.clearinterval(herobullet.timer);="" herobullet.timer="null;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" }="" break;="" case="" 1:="" 3:="" if(herobullet.x="">=a.x&&heroBullet.x<=a.x+30 &&herobullet.y="">=a.y&&heroBullet.y<=a.y+20) {="" a.islive="false;" besidehero.splice(j,1);="" all.splice(j,1);="" herobullet.islive="false;" window.clearinterval(herobullet.timer);="" herobullet.timer="null;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" }="" break;="" switch="" if(enemytank.islive)="" if(a.type="="enemy")" else="" if(a.islive&&a.type="=1){if(heroBullet.x">=a.x&&heroBullet.x<=a.x+30 &&herobullet.y="">=a.y&&heroBullet.y<=a.y+30) {="" a.islive="false;" herobullet.islive="false;" window.clearinterval(herobullet.timer);="" herobullet.timer="null;" besidehero.splice(j,1);="" all.splice(j,1);="" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" }}="" else="" if(a.islive&&a.type="=2){if(heroBullet.x">=a.x&&heroBullet.x<=a.x+30 &&herobullet.y="">=a.y&&heroBullet.y<=a.y+30) {="" herobullet.islive="false;" window.clearinterval(herobullet.timer);="" herobullet.timer="null;" }}="" }="" function="" drawenemybomb()="" for(var="" i="0;i<bombs.length;i++)" var="" bomb="bombs[i];" if(bomb.islive)="" if(bomb.blood="">6)
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
				if(bomb.blood<=0) {="" bombs.splice(i,1);="" }="" function="" drawenemybullet(){="" for(var="" i="0;i<enemyBullets.length;i++){" var="" ebbullet="enemyBullets[i];" if(ebbullet.tank.islive="=false)" ebbullet.islive="false;" if(ebbullet.islive){="" cxt.fillstyle="#00FEFE" ;="" cxt.fillrect(ebbullet.x,ebbullet.y,2,2);="" �ϰ���="" obstacle(x,y,type){="" this.x="x;" this.y="y;" this.type="type;" this.width="30;" this.islive="true;" drawobs(){="" if(obs[i].islive="=" true="" &&="" obs[i]="" !="null){" img="new" image();="" if(obs[i].type="=" 1){="" img.src="zhuan.jpg" }else="" 2){="" }else{="" img.onload="function(){" cxt.drawimage(img,obs[i].x,obs[i].y,obs[i].width,obs[i].width);="" checkid(enemy,arr,direct)="" flag="true;" switch="" (direct){="" case="" 0:="" if((enemy.x="">=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i])||(enemy.x+20>=arr[i].x&&enemy.x+20<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i])) {="" flag="false;" }="" return="" flag;="" break;="" case="" 1:="" for(var="" i="0;i<arr.length;i++){" if((enemy.x+30="">=arr[i].x&&enemy.x+30<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i])||(enemy.x+30>=arr[i].x&&enemy.x+30<=arr[i].x+30&&enemy.y+20>=arr[i].y&&enemy.y+20<=arr[i].y+30&&enemy!=arr[i])) {="" flag="false;" }="" return="" flag;="" break;="" case="" 2:="" for(var="" i="0;i<arr.length;i++){" if((enemy.x="">=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y>=arr[i].y&&enemy.y<=arr[i].y+30&&enemy!=arr[i])||(enemy.x>=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y+20>=arr[i].y&&enemy.y+20<=arr[i].y+30&&enemy!=arr[i])) {="" flag="false;" }="" return="" flag;="" break;="" case="" 3:="" for(var="" i="0;i<arr.length;i++){" if((enemy.x="">=arr[i].x&&enemy.x<=arr[i].x+30&&enemy.y+30>=arr[i].y&&enemy.y+30<=arr[i].y+30&&enemy!=arr[i])||(enemy.x+20>=arr[i].x&&enemy.x+20<=arr[i].x+30&&enemy.y+30>=arr[i].y&&enemy.y+30<=arr[i].y+30&&enemy!=arr[i])) {="" flag="false;" }="" return="" flag;="" break;="" ����ӣ��="" function="" hithero()="" for(var="" i="0;i<enemyBullets.length;i++)" if(enemybullets[i].islive)="" j="0;j<besideEnemy.length;j++)" var="" a="besideEnemy[j];" if(a.type="="hero"&&a.isLive)" switch(a.direct)="" case="" 0:="" 2:="" if(enemybullets[i].x="">=a.x&&enemyBullets[i].x<=a.x+20&&enemybullets[i].y>=a.y&&enemyBullets[i].y<=a.y+30) {="" a.islive="false;" enemybullets[i].islive="false;" enemybullets[i].tank.bulletislive="false;" window.clearinterval(enemybullets[i].timer);="" enemybullets[i].timer="null;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" besideenemy.splice(j,1);="" all.splice((all.length-1),1);="" }="" break;="" case="" 1:="" 3:="" if(enemybullets[i].x="">=a.x&&enemyBullets[i].x<=a.x+30&&enemybullets[i].y>=a.y&&enemyBullets[i].y<=a.y+20) {="" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" a.islive="false;" enemybullets[i].islive="false;" enemybullets[i].tank.bulletislive="false;" window.clearinterval(enemybullets[i].timer);="" enemybullets[i].timer="null;" besideenemy.splice(j,1);="" all.splice((all.length-1),1);="" alert("you="" lost!");="" }="" break;="" switch="" ifif(a.type="="hero")" else="" if(a.islive&&a.type="=1)" {if(enemybullets[i].x="">=a.x&&enemyBullets[i].x<=a.x+30&&enemybullets[i].y>=a.y&&enemyBullets[i].y<=a.y+30) {="" a.islive="false;" enemybullets[i].islive="false;" enemybullets[i].tank.bulletislive="false;" window.clearinterval(enemybullets[i].timer);="" enemybullets[i].timer="null;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" besideenemy.splice(j,1);="" all.splice(j,1);="" }="" if(a.type="=1)" else="" if(a.islive&&a.type="=2)" if(enemybullets[i].x="">=a.x&&enemyBullets[i].x<=a.x+30&&enemybullets[i].y>=a.y&&enemyBullets[i].y<=a.y+30){ enemybullets[i].islive="false;" enemybullets[i].tank.bulletislive="false;" window.clearinterval(enemybullets[i].timer);="" enemybullets[i].timer="null;}" }="" if(a.type="=2)" for(var="" j="0;j<besideEnemy.length;j++)" if(enemybullets[i].islive)="" i="0;i<enemyBullets.length;i++)" function="" isclick()="" {="" for(i="0;i<enemyTanks.length;i++)" var="" a="enemyTanks[i];" if(a.islive&&hero.islive)="" switch(a.direct)="" case="" 0:="" 2:="" switch(hero.direct)="" if((hero.x="">=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)) {="" hero.islive="false;" a.islive="false;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" }="" break;="" case="" 1:="" if((hero.x+30="">=a.x&&hero.x+30<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+30>=a.x&&hero.x+30<=a.x+20&&hero.y+20>=a.y&&hero.y+20<=a.y+30)) {="" hero.islive="false;" a.islive="false;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" }="" break;="" case="" 2:="" if((hero.x="">=a.x&&hero.x<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30)) {="" hero.islive="false;" a.islive="false;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" }="" break;="" case="" 3:="" if((hero.x="">=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x>=a.x&&hero.x<=a.x+20&&hero.y+20>=a.y&&hero.y+20<=a.y+30)) {="" hero.islive="false;" a.islive="false;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" }="" break;="" switch="" case="" 1:="" 3:="" switch(hero.direct)="" 0:="" if((hero.x="">=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)) {="" hero.islive="false;" a.islive="false;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" }="" break;="" case="" 1:="" if((hero.x+30="">=a.x&&hero.x+30<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x+30>=a.x&&hero.x+30<=a.x+20&&hero.y+20>=a.y&&hero.y+20<=a.y+30)) {="" hero.islive="false;" a.islive="false;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" }="" break;="" case="" 2:="" if((hero.x="">=a.x&&hero.x<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30)||(hero.x+20>=a.x&&hero.x+20<=a.x+20&&hero.y+30>=a.y&&hero.y+30<=a.y+30)) {="" hero.islive="false;" a.islive="false;" var="" bomb="new" bomb(a.x,a.y)="" bombs.push(bomb);="" alert("you="" lost!");="" }="" break;="" case="" 3:="" if((hero.x="">=a.x&&hero.x<=a.x+20&&hero.y>=a.y&&hero.y<=a.y+30)||(hero.x>=a.x&&hero.x<=a.x+20&&hero.y+20>=a.y&&hero.y+20</=a.x+20&&hero.y+20></=a.y+30)||(hero.x></=a.x+20&&hero.y></=a.y+30))></=a.x+20&&hero.y+30></=a.y+30)||(hero.x+20></=a.x+20&&hero.y+30></=a.y+30))></=a.x+20&&hero.y+20></=a.y+30)||(hero.x+30></=a.x+20&&hero.y></=a.y+30))></=a.x+20&&hero.y></=a.y+30)||(hero.x+20></=a.x+20&&hero.y></=a.y+30))></=a.x+20&&hero.y+20></=a.y+30)||(hero.x></=a.x+20&&hero.y></=a.y+30))></=a.x+20&&hero.y+30></=a.y+30)||(hero.x+20></=a.x+20&&hero.y+30></=a.y+30))></=a.x+20&&hero.y+20></=a.y+30)||(hero.x+30></=a.x+20&&hero.y></=a.y+30))></=a.x+20&&hero.y></=a.y+30)||(hero.x+20></=a.x+20&&hero.y></=a.y+30){></=a.x+30&&enemybullets[i].y></=a.y+30)></=a.x+30&&enemybullets[i].y></=a.y+20)></=a.x+30&&enemybullets[i].y></=a.y+30)></=a.x+20&&enemybullets[i].y></=arr[i].y+30&&enemy!=arr[i]))></=arr[i].x+30&&enemy.y+30></=arr[i].y+30&&enemy!=arr[i])||(enemy.x+20></=arr[i].x+30&&enemy.y+30></=arr[i].y+30&&enemy!=arr[i]))></=arr[i].x+30&&enemy.y+20></=arr[i].y+30&&enemy!=arr[i])||(enemy.x></=arr[i].x+30&&enemy.y></=arr[i].y+30&&enemy!=arr[i]))></=arr[i].x+30&&enemy.y+20></=arr[i].y+30&&enemy!=arr[i])||(enemy.x+30></=arr[i].x+30&&enemy.y></=arr[i].y+30&&enemy!=arr[i]))></=arr[i].x+30&&enemy.y></=arr[i].y+30&&enemy!=arr[i])||(enemy.x+20></=arr[i].x+30&&enemy.y></=0)></=a.y+30)></=a.x+30></=a.y+30)></=a.x+30></=a.y+20)></=a.x+30></=a.y+30)></=a.x+20></herobullets.length;i++){></=0||this.y></=0||this.x></600&&checkid(this,all,2))></960&&checkid(this,all,1))>