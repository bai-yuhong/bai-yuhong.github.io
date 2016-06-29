
/**
 * Created by bai on 2016/6/29.
 */
function startMove(obj,json){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bBtn=true;
        for(var attr in json)
        {
            var iCur=0;
            iCur=parseInt(getStyle(obj,attr))||0;
            var iSpeed=(json[attr]-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
            if(iCur!=json[attr])
            {
                bBtn=false;
            }
            obj.style[attr]=iCur+iSpeed+"px";
        }
        if(bBtn)
        {
            clearInterval(obj.timer);
        }
    },30);
}


function getStyle(obj,attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj,false)[attr];
    }
}