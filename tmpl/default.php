<?php defined('_JEXEC') or die;?>
<?
	$fonSite = $params->get("fonSite");
	$imgSite = $params->get("imgSite");
?>
<div class="sv-on" id="sv-onid"></div>

<div class="sv-onOff">
<table class='tabSvOnOff'  border=0px cellpadding=0 cellspacing=0 style=" height: 46px !important; z-index: 9; width: 55%; text-align: center; font-size: 15px; position: fixed;     top: 0; left: 24%; background-image: url(http://special.kremlin.ru/static/blind/img/access/access.png);  background-repeat: round; "   >
<tr id="strBac" class="strBacCl">
<!--<td>
<div class="sv-off">Обычная версия сайта</div>
</td>-->

<div class="sv-blockSV">
<div>
	<td><div id="noBack" style="color:black;" class='textForDop'>Размер шрифта:</div></td>
<td>
	<div class="sv-small aFam"></div>
</td>
<td>	
	<div class="sv-normal aFam"></div>
</td>
<td>	
	<div class="sv-large aFam"></div>
	</td>
	
</div> 

<td>
<div style="color:black;">Изображения</div>
</td>
<td>
<?if($imgSite == 1){?>
<div class="svi-off" id="noBack"></div>
<?}?>
</td>

<td>
<?if($fonSite == 1){?>
<div class="svi-color" id="noBack" style="color:black;">Цвет сайта:
</td>

<td>
<div class="svc-norm bord"></div>
</td>

<td>
<div class="svc-dark bord"></div>
</td>

<td>
<div class="svc-blue bord"></div>
</td>

<td>
<div class="setting"></div>
</td>
<td>
<div style="color:black;" class='editText'>Настройки<div class="editBody"></div></div>
</td>


<td>
<div class="sv-off" style="color:black;">Обычная версия сайта</div>
</td>

</tr>
</div>

<?}?>
</div>
</table>
</div>

<div class="extraSetting">
	<span  style="background: #f6f6f6 !important;"><h1 style="background: #f6f6f6 !important; color:black !important;">Настройка шрифта:</h1></span>
	<div style=" font-size:24px !important;"><b style="  color:black !important;">Выберите шрифт: </b><span class='arial'>Arial</span> <span class='timesNewRoman'>Times New Roman</span></div>
	<br>
	<div style=" font-size:24px !important;"><b style=" color:black !important;">Интервал между буквами (Кернинг): </b><span class='standatr'>Стандартный</span> <span class='middle'>Средний</span><span class='big'>Большой</span></div>
	<span style="background: #f6f6f6 !important;"><h1 style="background: #f6f6f6 !important; color:black !important;">Выбор цветовой схемы:</h1></span>
	<div style="background:white; padding: 4px 16px; font-size:22px !important;" class='fonrAll blackWhite'>Черным по белому</div>
	<div style="background:black; color:white!important; padding: 4px 16px; font-size:22px !important;" class='fonrAll whiteBlack'>Белым по черному</div>
	<div style="background: #9dd1ff; border: 6px solid #063462; padding: 4px 16px; color: #063462!important; font-size:22px !important;" class='fonrAll blueBlack'>Темно-синим по голубому</div>
	<div style="background: #f7f3d6; padding: 4px 16px; color: #4d4b43!important; font-size:22px !important;" class='fonrAll brownBlack'>Коричневым по бежевому</div>
	<div style="background: #3b2716; padding: 4px 16px; color: #a9e44d!important; font-size:22px !important;" class='fonrAll greenBlack'>Зелёным по темно-коричневому</div>
	<div class='closePanel' style=" font-size:24px !important; color:black !important;">Закрыть панель</div><div class='returnStandSetting' style=" font-size:24px !important;  color:black !important;">Вернуть стандартные настройки</div>
</div>
