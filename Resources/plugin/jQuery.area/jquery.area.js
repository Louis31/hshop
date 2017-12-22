var areaCont, areaList = $("#areaList"), a,aData = address.data;

/*初始化省份*/
function intProvince() {
	var areaCont = "";
	for(a in aData){
		var expressArea = aData[a].Title;
		if(aData[a].CityLists.length==0){
			areaCont += "<li onClick=\"selectD2('" + aData[a].IndexId + "','"+ expressArea +"');\">" + aData[a].Title + '</li>';
		}else{
			areaCont += '<li onClick="selectP(' + aData[a].IndexId + ');">' + aData[a].Title + '</li>';
		}		
	}
	areaList.html(areaCont);
	$("#areaBox").scrollTop(0);
	$("#backUp").removeAttr("onClick").hide();
}
intProvince();
/*选择省份*/
function selectP(p) {
	areaCont = "";
	areaList.html("");
	for(a in aData){		
		if(aData[a].IndexId == p){			
		var b,bData = aData[a].CityLists;
			for(b in bData){
				var expressArea = aData[a].Title + "-" + bData[b].Title;
				if(bData[b].DistrictLists.length==0){
					areaCont += "<li onClick=\"selectD1('" + p + "','"+ bData[b].IndexId + "','"+ expressArea +"');\"> "+ bData[b].Title +" </li>";
				}else{
					areaCont += '<li onClick="selectC(' + p + ',' + bData[b].IndexId + ');">' + bData[b].Title + '</li>';
				}
			}
		}
	}
	areaList.html(areaCont);
	$("#areaBox").scrollTop(0);
	$("#backUp").attr("onClick", "intProvince();").show();
}
/*选择城市*/
function selectC(p,c) {
	areaCont = "";
	for(a in aData){		
		if(aData[a].IndexId == p){			
		var b,bData = aData[a].CityLists;
			for(b in bData){
				if(bData[b].IndexId == c){
					var x,xData = bData[b].DistrictLists;
					for(x in xData){		
						var expressArea = aData[a].Title + "-" + bData[b].Title + "-" + xData[x].Title;
						areaCont += "<li onClick=\"selectD('" + p + "','"+ c + "','"+ xData[x].IndexId + "','"+ expressArea +"');\"> "+ xData[x].Title +" </li>";	
					}					
				}
			}
		}
	}
	areaList.html(areaCont);
	$("#areaBox").scrollTop(0);
	$("#backUp").attr("onClick", "selectP(" + p + ");");
}
/*选择区县*/
function selectD(p,c,d,t) {
	clockArea();
	$("#expressArea dl dd").removeClass("colorGray");
	$("#expressArea dl dd").html(t);
	$("#expressArea dl dd").attr("data-code",d);
}
function selectD1(p,c,t) {
	clockArea();
	$("#expressArea dl dd").removeClass("colorGray");
	$("#expressArea dl dd").html(t);
	$("#expressArea dl dd").attr("data-code",c);
}
function selectD2(p,c) {
	clockArea();
	$("#expressArea dl dd").removeClass("colorGray");
	$("#expressArea dl dd").html(c);
	$("#expressArea dl dd").attr("data-code",p);
}
/*关闭省市区选项*/
function clockArea() {
	$("#areaMask").fadeOut();
	$("#areaLayer").animate({"bottom": "-100%"});
}
$(function() {
	/*打开省市区选项*/
	$("#expressArea").click(function() {
		intProvince();
		$("#areaMask").fadeIn();
		$("#areaLayer").animate({"bottom": 0});
	});
	/*关闭省市区选项*/
	$("#areaMask, #closeArea").click(function() {
		clockArea();
	});
});