    var lis1 = document.getElementById("slide").getElementsByTagName("li");
    var lis2 = document.getElementById("btn").getElementsByTagName("li");
    var btn = document.getElementById("btn");
    var len = lis1.length;
    var index=0;
    var lastIndex=0;
    for (var i = 0; i < len; i++) {
		if(i==0)
		{
			setOpacity(lis1[i],100);
			lis2[i].className="hot";
		}
		else{
			setOpacity(lis1[i],0);
			lis2[i].className="";
		}
        (function (i) {
			addEventHandle(lis2[i],'mouseover',function () {
				if (addTime) {
					clearInterval(addTime);
				}
                showImag(i,lastIndex);
            })
            addEventHandle(lis2[i],'mouseout',function () {
                addTime = setInterval(function () {
				if(index