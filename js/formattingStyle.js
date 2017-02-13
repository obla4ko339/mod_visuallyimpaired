jQuery(document).ready(function(){
	
//jQuery.cookie=function(name,value,options){name = "menuCookie";if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};
		var svOn = 'sv-on';
		var svOff = 'sv-off';
		

		var styleFontOff = jQuery("html, body, div, span, applet, object, a.item1, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video");
		var displayImgNone = jQuery("img");
		var banerid = jQuery("div.art-header");
		var artNav = jQuery(".art-nav");
		/*при включении версии убираем со старинце всё лишнее*/
		var body = jQuery("body, .container");
		var positionDelete = jQuery("section#yt_slideshow, div#banner-top, section#yt_spotlight4, section#yt_spotlight7, div#menu-right, div#jsn-content-top ");
		var backgroundNone = jQuery(".djtabs-title, #yt_spotlight, div#k2ModuleBox510 a, div#jsn-content_inner2, .jsn-modulecontainer_inner.bacCol, div#jsn-menu, div.jsn-modulecontainer ul.menu-mainmenu > li.active > a, .jsn-modulecontainer_inner.bacCol, div.box-grey div.jsn-modulecontainer_inner, div.jsn-hasleft #jsn-content_inner  ");
		var newsEdit = jQuery(".allmode-columns .allmode-topitem, .allmode-columns .allmode-item");
		/*при включении версии убираем со старинце всё лишнее*/
		
		/*Убираем лишнии картинки*/
		var deleteImg = jQuery("#yt_menuwrap #yt_logo,div#adm, .allmode-columns .allmode-item .allmode-img img");
		/*Убираем лишнии картинки*/

		/*работа с фоном*/
		var bodyBackground = jQuery("body#bd, .container, .default-theme .djtabs-panel, .modulCalend, .allmode-columns .allmode-topitem .allmode-info, .allmode-columns .allmode-item .allmode-info, a, span, h3 a, h2, h1, h3.allmode-title a, .allmode-text, p, .clearfix, .bacCol, strong, li, ul, u, dd"); 
		/*работа с фоном*/
		
		var menu_rubber 		= jQuery("table#swmenu tbody tr td");
		var content_rubber_top = jQuery(".art-sheet-body");
		
		
    
		//при нажатии включается "Версия для слабовидящих" её функционал
	jQuery(".sv-on").on('click',function(){
				jQuery(".sv-onOff table").removeClass("noneTable");	
				jQuery(".sv-onOff").fadeIn();
				jQuery(".sv-off").fadeIn();
				jQuery(".sv-blockSV").fadeIn();
				jQuery(this).fadeOut();
				jQuery(styleFontOff).addClass("bacCol");
				jQuery(".sv-onOff").addClass("dopCss");
				jQuery("nav#yt_menuwrap").addClass("siteBottom");
				jQuery("div#yt_wrapper").addClass("siteBottom");
				jQuery("div#jsn-page").css("margin-top","60px");
				jQuery(banerid).addClass("noneTable");
				jQuery(artNav).addClass("artNav");  
				/*при включении версии убираем со старинце всё лишнее*/
				jQuery(body).addClass("backgroundColorNone");
				jQuery(positionDelete).addClass("positionDelete");
				jQuery(backgroundNone).addClass("backgroundNone");
				jQuery(newsEdit).addClass("newsEdit");
				/*при включении версии убираем со старинце всё лишнее*/
				
				jQuery.cookie(svOn, "fadeOut", {expires:1,path:'/',});
				
    });
		//при нажатии включается "Версия для слабовидящих" её функционал
		
		
	/*Работа с включением и выключением изображения */
	
	var isButton = jQuery(".svi-off");
	
	jQuery(".svi-off").live('click', function(){
		jQuery(displayImgNone).addClass("displayImgNone");
		jQuery(isButton).addClass("isButton");
		jQuery(this).attr("id","noneImg");
		jQuery(deleteImg).addClass("deleteImg");  
		jQuery.cookie("displayImgNone","none", {expires:1,path:'/'});
		
	});
	
	jQuery("#noneImg").live('click', function(){
		jQuery(displayImgNone).removeClass("displayImgNone");
		jQuery(isButton).removeClass("isButton");
		jQuery(deleteImg).removeClass("deleteImg");  
		jQuery(this).attr("id","")
		jQuery.cookie("displayImgNone",null, {expires:1,path:'/'});
	});
	

	if(jQuery.cookie("displayImgNone") == "none"){
		jQuery(displayImgNone).addClass("displayImgNone");
		jQuery(isButton).addClass("isButton");
		jQuery(deleteImg).addClass("deleteImg");
		jQuery(".svi-off").attr("id","noneImg")
	}
	//работа с "печеньками" метод отключает изображения и хранит это всё в "печеньках"
	

	/*Работа с включением и выключением изображения */
	
	
	/*работа с фоном сайта*/
	
	var svcNorm = jQuery(".svc-norm");
	var svcDark = jQuery(".svc-dark");
	var svcBlue = jQuery(".svc-blue");
	
	jQuery(svcNorm).on('click', function(){
		jQuery(styleFontOff).removeClass("svcDark");
		jQuery(styleFontOff).removeClass("svcBlue");
		jQuery(svcDark).removeClass("darkBackground");
		jQuery(svcBlue).removeClass("blueBackground");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(styleFontOff).addClass("bacCol");	
		jQuery(svcNorm).addClass("whiteBackground");
		jQuery.cookie("svcNorm","true", {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("svcDark",null, {expires:1,path:'/'});
		jQuery.cookie("svcBlue",null, {expires:1,path:'/'});
	});
	jQuery(svcDark).on('click', function(){
		jQuery(styleFontOff).removeClass("bacCol");
		jQuery(styleFontOff).removeClass("svcBlue");
		jQuery(svcNorm).removeClass("whiteBackground");
		jQuery(svcBlue).removeClass("blueBackground");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(bodyBackground).addClass("svcDark");
		jQuery(svcDark).addClass("darkBackground");
		jQuery.cookie("svcDark","true", {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("svcNorm",null, {expires:1,path:'/'});
		jQuery.cookie("svcBlue",null, {expires:1,path:'/'});
	});
	jQuery(svcBlue).on('click', function(){
		jQuery(styleFontOff).removeClass("bacCol");
		jQuery(svcNorm).removeClass("whiteBackground");
		jQuery(svcDark).removeClass("darkBackground");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(bodyBackground).addClass("svcBlue"); 
		jQuery(svcBlue).addClass("blueBackground");
		jQuery.cookie("svcBlue","true", {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("svcDark",null, {expires:1,path:'/'});
		jQuery.cookie("svcNorm",null, {expires:1,path:'/'});
	});
	
	if(jQuery.cookie("svcDark") == "true"){
		// jQuery(styleFontOff).removeClass("bacCol", {expires:1,path:'/'});
		jQuery(styleFontOff).removeClass("bacCol");
		jQuery(styleFontOff).removeClass("svcBlue");
		jQuery(svcNorm).removeClass("whiteBackground");
		jQuery(svcBlue).removeClass("blueBackground");
		jQuery(bodyBackground).addClass("svcDark");
		jQuery(svcDark).addClass("darkBackground");
	}else if(jQuery.cookie("svcNorm") == "true"){
		jQuery(styleFontOff).removeClass("svcDark");
		jQuery(styleFontOff).removeClass("svcBlue");
		jQuery(svcDark).removeClass("darkBackground");
		jQuery(svcBlue).removeClass("blueBackground");
		jQuery(styleFontOff).addClass("bacCol");	
		jQuery(svcNorm).addClass("whiteBackground");
	}else if(jQuery.cookie("svcBlue") == "true"){
		jQuery(styleFontOff).removeClass("bacCol");
		jQuery(svcDark).removeClass("darkBackground");
		jQuery(svcNorm).removeClass("whiteBackground");
		jQuery(svcBlue).addClass("blueBackground");
		jQuery(bodyBackground).addClass("svcBlue");
	}
	
	/*работа с фоном сайта*/
	
	menu_rubber 		
	content_rubber_top
	
	/*Работа с размером шрифта*/
	var svSmall = jQuery(".sv-small");
	var svNormal = jQuery(".sv-normal");
	var svLarge = jQuery(".sv-large");
	var leftMEnu = jQuery(".default-theme .accordion-body .djtabs-panel, .default-theme .accordion-body .djtabs-panel a");
	
	jQuery(svSmall).on('click', function(){
		jQuery(styleFontOff).addClass("svSmall");
		jQuery(svSmall).addClass("svSmallBacPosit");
		jQuery(menu_rubber).addClass("menu_rubber");
		jQuery(content_rubber_top).addClass("content_rubber_top");
		jQuery(leftMEnu).addClass("leftMenu");
		jQuery(styleFontOff).removeClass("svNormal");
		jQuery(styleFontOff).removeClass("svLarge");
		jQuery(svNormal).removeClass("svNormallBacPosit");
		jQuery(svLarge).removeClass("svLargeBacPosit");
		jQuery.cookie("svSmall","true", {expires:1,path:'/'});
		jQuery.cookie("svNormal",null, {expires:1,path:'/'});
		jQuery.cookie("svLarge",null, {expires:1,path:'/'});
	});
	
	jQuery(svNormal).on('click', function(){
		jQuery(svNormal).addClass("svNormallBacPosit");
		jQuery(styleFontOff).addClass("svNormal");
		jQuery(menu_rubber).addClass("menu_rubber");
		jQuery(content_rubber_top).addClass("content_rubber_top");
		jQuery(leftMEnu).addClass("leftMenu");
		jQuery(styleFontOff).removeClass("svLarge");
		jQuery(styleFontOff).removeClass("svSmall");
		jQuery(svSmall).removeClass("svSmallBacPosit");
		jQuery(svLarge).removeClass("svLargeBacPosit");
		jQuery.cookie("svNormal","true", {expires:1,path:'/'});
		jQuery.cookie("svSmall",null, {expires:1,path:'/'});
		jQuery.cookie("svLarge",null, {expires:1,path:'/'});
	});
	
	jQuery(svLarge).on('click', function(){
		jQuery(svLarge).addClass("svLargeBacPosit");
		jQuery(styleFontOff).addClass("svLarge");
		jQuery(menu_rubber).addClass("menu_rubber");
		jQuery(content_rubber_top).addClass("content_rubber_top");
		jQuery(leftMEnu).addClass("leftMenu");
		jQuery(styleFontOff).removeClass("svNormal");
		jQuery(styleFontOff).removeClass("svSmall");
		jQuery(svSmall).removeClass("svSmallBacPosit");
		jQuery(svNormal).removeClass("svNormallBacPosit");
		jQuery.cookie("svLarge","true", {expires:1,path:'/'});
		jQuery.cookie("svSmall",null, {expires:1,path:'/'});
		jQuery.cookie("svNormal",null, {expires:1,path:'/'});
	});
	
	if(jQuery.cookie("svSmall") == "true"){
		jQuery(styleFontOff).addClass("svSmall");
		jQuery(svSmall).addClass("svSmallBacPosit");
		jQuery(menu_rubber).addClass("menu_rubber");
		jQuery(content_rubber_top).addClass("content_rubber_top");
		jQuery(leftMEnu).addClass("leftMenu");
		jQuery(svNormal).removeClass("svNormallBacPosit");
		jQuery(svLarge).removeClass("svLargeBacPosit");
		jQuery(styleFontOff).removeClass("svNormal");
		jQuery(styleFontOff).removeClass("svLarge");
	}else if(jQuery.cookie("svNormal") == "true"){
		jQuery(svNormal).addClass("svNormallBacPosit");
		jQuery(styleFontOff).addClass("svNormal");
		jQuery(menu_rubber).addClass("menu_rubber");
		jQuery(content_rubber_top).addClass("content_rubber_top");
		jQuery(leftMEnu).addClass("leftMenu");
		jQuery(styleFontOff).removeClass("svSmall");
		jQuery(styleFontOff).removeClass("svSmallBacPosit");
		jQuery(svSmall).removeClass("svLarge");
		jQuery(svLarge).removeClass("svLargeBacPosit");
	}else if(jQuery.cookie("svLarge") == "true"){
		jQuery(styleFontOff).addClass("svLarge");
		jQuery(menu_rubber).addClass("menu_rubber");
		jQuery(svLarge).addClass("svLargeBacPosit");
		jQuery(content_rubber_top).addClass("content_rubber_top");
		jQuery(leftMEnu).addClass("leftMenu");
		jQuery(styleFontOff).removeClass("svNormal");
		jQuery(styleFontOff).removeClass("svSmall");
		jQuery(svSmall).removeClass("svLarge");
		jQuery(svNormal).removeClass("svNormallBacPosit");
	}
	
	/*Работа с размером шрифта*/
	
	
	
	//работа с "печеньками" убирает не нужные кнопка и открывает основной функционал модуля и хранит это всё в "печеньках"
	if(jQuery.cookie(svOn) == "fadeOut"){
				jQuery(".sv-on").hide();
				jQuery(".sv-onOff").fadeIn();
				jQuery(".sv-off").fadeIn();
				jQuery(".sv-blockSV").fadeIn();
				jQuery("nav#yt_menuwrap").addClass("siteBottom");
				jQuery("div#yt_wrapper").addClass("siteBottom");
				jQuery(banerid).addClass("noneTable");
				jQuery(artNav).addClass("artNav");
				jQuery(styleFontOff).addClass("bacCol");
				/*при включении версии убираем со старинце всё лишнее*/
				jQuery(body).addClass("backgroundColorNone");
				jQuery(positionDelete).addClass("positionDelete");
				jQuery(backgroundNone).addClass("backgroundNone");
				jQuery(newsEdit).addClass("newsEdit");
				/*при включении версии убираем со старинце всё лишнее*/
	}
	//работа с "печеньками" убирает не нужные кнопка и открывает основной функционал модуля и хранит это всё в "печеньках"
	

	/*-----------------Дополнительные настройки------------------------*/
	/*Визуальное отображение*/
	jQuery(".editText, .editBody").live("click", function(){
		var textExtraSetting = jQuery(".extraSetting").slideToggle("slow").addClass("settingKult");
		jQuery(".textForDop").after(textExtraSetting);
	});

	/*Работа со шрифтом*/
	jQuery(".arial").live("click", function(){
		jQuery(styleFontOff).addClass("fonFamilyArial");
		jQuery(styleFontOff).removeClass("fonFamilyTnr");
		jQuery.cookie("fonFamilyTnr",null, {expires:1,path:'/'});
		jQuery.cookie("fonFamilyArial","true", {expires:1,path:'/'});
	});
	if(jQuery.cookie("fonFamilyArial") == "true"){
		jQuery(styleFontOff).addClass("fonFamilyArial");
	}
	jQuery(".timesNewRoman").live("click", function(){
		jQuery(styleFontOff).addClass("fonFamilyTnr");
		jQuery(styleFontOff).removeClass("fonFamilyArial");
		jQuery.cookie("fonFamilyArial",null, {expires:1,path:'/'});
		jQuery.cookie("fonFamilyTnr","true", {expires:1,path:'/'});
	});
	if(jQuery.cookie("fonFamilyTnr") == "true"){
		jQuery(styleFontOff).addClass("fonFamilyTnr");
	}
	/*Работа со шрифтом*/
	
	/*интервал между буквами*/
	jQuery(".standatr").live("click", function(){
		jQuery(styleFontOff).removeClass("spacingMiddle");
		jQuery(styleFontOff).removeClass("spacingBig");
		jQuery.cookie("spacingBig",null, {expires:1,path:'/'});
		jQuery.cookie("spacingMiddle",null, {expires:1,path:'/'});
	});
	jQuery(".middle").live("click", function(){
		jQuery(styleFontOff).addClass("spacingMiddle");
		jQuery(styleFontOff).removeClass("spacingBig");
		jQuery.cookie("spacingMiddle",null, {expires:1,path:'/'});
		jQuery.cookie("spacingMiddle","true", {expires:1,path:'/'});
	});
	if(jQuery.cookie("spacingMiddle") == "true"){
		jQuery(styleFontOff).addClass("spacingMiddle");
	}
	jQuery(".big").live("click", function(){
		jQuery(styleFontOff).addClass("spacingBig");
		jQuery(styleFontOff).removeClass("spacingMiddle");
		jQuery.cookie("spacingMiddle",null, {expires:1,path:'/'});
		jQuery.cookie("spacingBig","true", {expires:1,path:'/'});
	});
	if(jQuery.cookie("spacingBig") == "true"){
		jQuery(styleFontOff).addClass("spacingBig");
	}
	/*интервал между буквами*/
	
	/*Выбор цветовой схемы*/
	/*работа с фоном сайта*/
 
	var blackWhite = jQuery(".blackWhite");
	var whiteBlack = jQuery(".whiteBlack");
	var blueBlack = jQuery(".blueBlack");
	var brownBeige = jQuery(".brownBlack");
	var greenBlack = jQuery(".greenBlack");

	jQuery(blackWhite).live('click', function(){
		jQuery(bodyBackground).removeClass("svcDark");
		jQuery(bodyBackground).removeClass("svcBlue");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(bodyBackground).addClass("svcNorm");
		jQuery.cookie("whiteBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blueBlack",null, {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blackWhite","true", {expires:1,path:'/'});
	});

	jQuery(whiteBlack).live('click', function(){
		jQuery(bodyBackground).removeClass("svcNorm");
		jQuery(bodyBackground).removeClass("svcBlue");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(bodyBackground).addClass("svcDark");
		jQuery.cookie("blackWhite",null, {expires:1,path:'/'});
		jQuery.cookie("blueBlack",null, {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("whiteBlack","true", {expires:1,path:'/'});
	});

	jQuery(blueBlack).live('click', function(){
		jQuery(bodyBackground).removeClass("svcDark");
		jQuery(bodyBackground).removeClass("svcNorm");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(bodyBackground).addClass("svcBlue");
		jQuery.cookie("blackWhite",null, {expires:1,path:'/'});
		jQuery.cookie("whiteBlack",null, {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blueBlack","true", {expires:1,path:'/'});
	});

	jQuery(brownBeige).live('click', function(){
		jQuery(bodyBackground).removeClass("svcDark");
		jQuery(bodyBackground).removeClass("svcNorm");
		jQuery(bodyBackground).removeClass("svcBlue");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(bodyBackground).addClass("svcBrown");
		jQuery.cookie("blackWhite",null, {expires:1,path:'/'});
		jQuery.cookie("whiteBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blueBlack",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("brownBeige","true", {expires:1,path:'/'});
	});

	jQuery(greenBlack).live('click', function(){
		jQuery(bodyBackground).removeClass("svcDark");
		jQuery(bodyBackground).removeClass("svcNorm");
		jQuery(bodyBackground).removeClass("svcBlue");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).addClass("greenBrown");
		jQuery.cookie("blackWhite",null, {expires:1,path:'/'});
		jQuery.cookie("whiteBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blueBlack",null, {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack","true", {expires:1,path:'/'});
	});



	if(jQuery.cookie("whiteBlack") == "true"){
		jQuery(bodyBackground).addClass("svcDark");
	}else if(jQuery.cookie("blackWhite") == "true"){
		jQuery(bodyBackground).addClass("svcNorm");
	}else if(jQuery.cookie("blueBlack") == "true"){
		jQuery(bodyBackground).addClass("svcBlue");
	}else if(jQuery.cookie("brownBeige") == "true"){
		jQuery(bodyBackground).addClass("svcBrown");
	}else if(jQuery.cookie("greenBlack") == "true"){
		jQuery(bodyBackground).addClass("greenBrown");
	}

	/*работа с фоном сайта*/
	/*Выбор цветовой схемы*/

	jQuery(".returnStandSetting").live("click", function(){
		/*Удалит стили фона*/
		jQuery(bodyBackground).removeClass("svcDark");
		jQuery(bodyBackground).removeClass("svcNorm");
		jQuery(bodyBackground).removeClass("svcBlue");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(svcDark).removeClass("darkBackground");
		jQuery(svcBlue).removeClass("blueBackground");
		jQuery(svcNorm).removeClass("whiteBackground");

		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blackWhite",null, {expires:1,path:'/'});
		jQuery.cookie("whiteBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blueBlack",null, {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("svcDark",null, {expires:1,path:'/'});
		jQuery.cookie("svcBlue",null, {expires:1,path:'/'});
		jQuery.cookie("svcNorm",null, {expires:1,path:'/'});
		/*Удалит стили фона*/

		/*удалит интервал между буквами*/
		jQuery(styleFontOff).removeClass("spacingMiddle");
		jQuery(styleFontOff).removeClass("spacingBig");
		/*удалит интервал между буквами*/

		/*Удалит стили шрифта*/
		jQuery(styleFontOff).removeClass("fonFamilyTnr");
		jQuery(styleFontOff).removeClass("fonFamilyArial");
		/*Удалит стили шрифта*/

		/*возвращает размер изображения*/
		jQuery(displayImgNone).removeClass("displayImgNone");
		jQuery(isButton).removeClass("isButton");
		jQuery(deleteImg).removeClass("deleteImg");
		jQuery(this).attr("id","")
		jQuery.cookie("displayImgNone",null, {expires:1,path:'/'});
		/*возвращает размер изображения*/

		/*Возвращает размер шрифта*/
		jQuery(styleFontOff).removeClass("svNormal");
		jQuery(styleFontOff).removeClass("svLarge");
		jQuery(styleFontOff).removeClass("svSmall");
		jQuery(svSmall).removeClass("svSmallBacPosit");
		jQuery(svNormal).removeClass("svNormallBacPosit");
		jQuery(svLarge).removeClass("svLargeBacPosit");

		jQuery.cookie("svNormal",null, {expires:1,path:'/'});
		jQuery.cookie("svLarge",null, {expires:1,path:'/'});
		jQuery.cookie("svSmall",null, {expires:1,path:'/'});
		/*Возвращает размер шрифта*/


	});

	/*Закрыть панель*/
	jQuery(".closePanel").live("click", function(){
		var textExtraSetting = jQuery(".extraSetting").slideToggle("slow").addClass("settingKult");
		jQuery(".textForDop").after(textExtraSetting);
	});
	/*Закрыть панель*/

	/*-----------------Дополнительные настройки------------------------*/



	 
	// при нажатии на "Обычная версия сайта" удаляет все печеньки и возвращает первоначальный стиль сайту 
	
	jQuery(".sv-off").on('click',function(e){
		jQuery(".sv-blockSV").fadeOut("sv-onQueryOff");
		jQuery(this).fadeOut();
		jQuery(".sv-on").fadeIn();
		jQuery(".sv-onOff table").addClass("noneTable");	
		jQuery("nav#yt_menuwrap").removeClass("siteBottom");
		jQuery("div#yt_wrapper").removeClass("siteBottom");
		jQuery("div#yt_wrapper").css("margin-top","0px")
		jQuery("div#jsn-page").css("margin-top","0px");
		jQuery(styleFontOff).removeClass("bacCol");
		jQuery(styleFontOff).removeClass("svcDark");
		jQuery(styleFontOff).removeClass("svcBlue");
		jQuery(styleFontOff).removeClass("svcNorm");
		jQuery(styleFontOff).removeClass("svNormal");
		jQuery(styleFontOff).removeClass("svLarge");
		jQuery(styleFontOff).removeClass("svSmall");
		/*Работа с изображениями*/
		jQuery(deleteImg).removeClass("deleteImg");
		jQuery(isButton).removeClass("isButton");
		jQuery(displayImgNone).removeClass("displayImgNone");
		/*Работа с изображениями*/
		/*при включении версии убираем со старинце всё лишнее*/
		jQuery(body).removeClass("backgroundColorNone");
		jQuery(positionDelete).removeClass("positionDelete");
		jQuery(backgroundNone).removeClass("backgroundNone");
		jQuery(newsEdit).removeClass("newsEdit");
		/*при включении версии убираем со старинце всё лишнее*/
		/*работа с фоном*/
		jQuery(svcNorm).removeClass("whiteBackground");
		jQuery(svcDark).removeClass("darkBackground");
		jQuery(svcBlue).removeClass("blueBackground");
		jQuery(bodyBackground).removeClass("svcDark");
		jQuery(bodyBackground).removeClass("svcBlue");
		/*работа с фоном*/
		/*Дополнительные настройки*/
		jQuery(styleFontOff).removeClass("fonFamilyArial");
		jQuery(styleFontOff).removeClass("fonFamilyTnr");
		jQuery(styleFontOff).removeClass("spacingMiddle");
		jQuery(styleFontOff).removeClass("spacingBig");
		jQuery(bodyBackground).removeClass("svcBrown");
		jQuery(bodyBackground).removeClass("greenBrown");
		jQuery(bodyBackground).removeClass("svcNorm");
		/*Дополнительные настройки*/
		/*Выбор цветовой схемы*/
		jQuery(blackWhite).removeClass("whiteBackground");
		jQuery(whiteBlack).removeClass("darkBackground");
		jQuery(blueBlack).removeClass("blueBackground");
		/*Выбор цветовой схемы*/
		jQuery(menu_rubber).removeClass("menu_rubber");
		jQuery(leftMEnu).removeClass("leftMenu");
		jQuery(svSmall).removeClass("svLarge");
		jQuery(svNormal).removeClass("svNormallBacPosit");
		jQuery(svLarge).removeClass("svLargeBacPosit");
		jQuery(content_rubber_top).removeClass("content_rubber_top");
		jQuery(artNav).removeClass("artNav");
		jQuery(banerid).removeClass("noneTable");
		jQuery.cookie(svOn, null, {expires:1,path:'/'});
		jQuery.cookie("displayImgNone",null, {expires:1,path:'/'});
		jQuery.cookie("svcDark",null, {expires:1,path:'/'});
		jQuery.cookie("svcNorm",null, {expires:1,path:'/'});
		jQuery.cookie("svcBlue",null, {expires:1,path:'/'});
		jQuery.cookie("svSmall",null, {expires:1,path:'/'});
		jQuery.cookie("svNormal",null, {expires:1,path:'/'});
		jQuery.cookie("svLarge",null, {expires:1,path:'/'});
		jQuery.cookie("fonFamilyTnr",null, {expires:1,path:'/'});
		jQuery.cookie("fonFamilyArial",null, {expires:1,path:'/'});
		jQuery.cookie("spacingBig",null, {expires:1,path:'/'});
		jQuery.cookie("spacingMiddle",null, {expires:1,path:'/'});
		jQuery.cookie("whiteBlack",null, {expires:1,path:'/'});
		jQuery.cookie("blackWhite",null, {expires:1,path:'/'});
		jQuery.cookie("blueBlack",null, {expires:1,path:'/'});
		jQuery.cookie("brownBeige",null, {expires:1,path:'/'});
		jQuery.cookie("greenBlack",null, {expires:1,path:'/'});
	});
	// при нажатии на "Обычная версия сайта" удаляет все печеньки и возвращает первоначальный стиль сайту 
	
	
	
	
	
 });