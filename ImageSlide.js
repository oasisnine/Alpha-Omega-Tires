	var iSb = document.getElementById("slideImgMainContainer");
	var imgArr = ["slides/1", "slides/2", "slides/3", "slides/4", "slides/5", "slides/6", "slides/7", "slides/8"];
	var i = 1;
	var timeOut;
	
	timeOut = setInterval(imgCheck, 5000);
	
	
	function createImage(d)
	{
		var slideImg = document.createElement("IMG");
			slideImg.setAttribute("src", imgArr[d] + ".jpg");
			slideImg.setAttribute("class", "sldsAnim");
			slideImg.setAttribute("style", "width:100%;height:100%;position:absolute;top:0px;left:0px;");
			iSb.appendChild(slideImg);
	}
	
	var k = 0;
	function imgCheck()
	{
		
		if(i < imgArr.length)
		{

			createImage(i);
			i += 1;
		}
		else
		{
			clearInterval(timeOut);
			iSb.style.backgroundImage = "url('"+ imgArr[i - 1] +".jpg')";
			iSb.innerHTML = "";
			i = 1;
			createImage(0);
			timeOut = setInterval(imgCheck, 5000);
		}
	}
