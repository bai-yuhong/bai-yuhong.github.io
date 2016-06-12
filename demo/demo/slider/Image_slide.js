/**
 * Created by bai on 2016/3/20.
 */
    var lis2 = document.getElementById("btn").getElementsByTagName("li");
    var btn = document.getElementById("btn");
    var table=document.getElementsByTagName("table")[0];
    var index=0;//��¼��ǰ��ʾ��ͼƬ�ı���
    var lastIndex=0;//��¼��һ����ʾ��ͼƬ�ı���
	var addTimer;
	var len=lis2.length;
	//��ʼ��
    for (var i = 0; i < len; i++) {
        (function (i) {
			addEventHandle(lis2[i],'mouseover',function () {
				if (addTime) {
					clearInterval(addTime);
				}
                showImag(i,lastIndex);
            })
            addEventHandle(lis2[i],'mouseout',function () {
                addTime = setInterval(function () {
				if(index<(len-1)) {index++;}="" else="" {index="0;}" showimag(index,lastindex);="" },="" 2000);="" })="" })(i);="" }="" addtime="setInterval(function" ()="" {="" if(index<(len-1))="" index++;="" index="0;" function="" showimag(cindex,clastindex)="" if(cindex="=cLastIndex)" return;="">cLastIndex)
        {
            var def=cIndex-cLastIndex;
            for(var i=0;i</(len-1))>