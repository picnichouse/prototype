
var PageName = 'new';
var PageId = 'pb70d28c218da43c0a5d428502de988af'
var PageUrl = 'new.html'
document.title = 'new';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $Pitch = '';

var $Currency = '';

var $Name = '';

var $Action = '';

var $CustomCondition = '';

var $TippingPoint = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&Pitch=' + $Pitch + '&Currency=' + $Currency + '&Name=' + $Name + '&Action=' + $Action + '&CustomCondition=' + $CustomCondition + '&TippingPoint=' + $TippingPoint + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[Pitch\]\]/g, $Pitch);
  value = value.replace(/\[\[Currency\]\]/g, $Currency);
  value = value.replace(/\[\[Name\]\]/g, $Name);
  value = value.replace(/\[\[Action\]\]/g, $Action);
  value = value.replace(/\[\[CustomCondition\]\]/g, $CustomCondition);
  value = value.replace(/\[\[TippingPoint\]\]/g, $TippingPoint);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

eval(GetDynamicPanelScript('u36', 1));

eval(GetDynamicPanelScript('u69', 3));

eval(GetDynamicPanelScript('u20', 2));

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if (true) {

SetGlobalVariableValue('$TippingPoint', GetWidgetFormText('u40'));

SetGlobalVariableValue('$Name', GetWidgetFormText('u18'));

SetGlobalVariableValue('$Pitch', GetWidgetFormText('u57'));

	self.location.href="show-dome.html" + GetQuerystring();

}

}

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u29 = document.getElementById('u29');

var u45 = document.getElementById('u45');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	SetPanelStateu69("pd2u69");

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u5 = document.getElementById('u5');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');

var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

var u4 = document.getElementById('u4');

var u11 = document.getElementById('u11');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u52 = document.getElementById('u52');

var u36 = document.getElementById('u36');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u33 = document.getElementById('u33');

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u77 = document.getElementById('u77');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

SetWidgetRichText('u28', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:16px;">Funds to be used for this purpose:</span>'));

SetWidgetRichText('u35', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;"><b>when enough money is raised...</b></span>'));

SetWidgetRichText('u41', PopulateVariables(''));

SetWidgetRichText('u43', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">$</span>'));

;

;

	SetPanelStateu20("pd1u20");

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');

if (bIE) u49.attachEvent("onfocus", Focusu49);
else u49.addEventListener("focus", Focusu49, true);
function Focusu49(e)
{

if ((GetWidgetFormText('u49')) == (PopulateVariables('if / unless...'))) {

SetWidgetFormText('u49', PopulateVariables(''));

}

}

if (bIE) u49.attachEvent("onblur", LostFocusu49);
else u49.addEventListener("blur", LostFocusu49, true);
function LostFocusu49(e)
{

if ((GetWidgetFormText('u49')) == (PopulateVariables(''))) {

SetWidgetFormText('u49', PopulateVariables('if / unless...'));

}

}

var u12 = document.getElementById('u12');

var u65 = document.getElementById('u65');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u37 = document.getElementById('u37');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u82 = document.getElementById('u82');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{

if (true) {

	var obj1 = document.getElementById("u36");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu36("hidden"); }
	else {SetPanelVisibilityu36("");}

}

}

var u40 = document.getElementById('u40');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

	SetPanelStateu69("pd0u69");

}

}

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u2 = document.getElementById('u2');

var u44 = document.getElementById('u44');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

;

;

	SetPanelStateu20("pd0u20");

}

}
gv_vAlignTable['u19'] = 'top';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	SetPanelStateu69("pd1u69");

}

}

var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u69 = document.getElementById('u69');

var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

SetWidgetRichText('u28', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:16px;">We, the undersigned, promise:</span>'));

SetWidgetRichText('u35', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;"><b>when enough people join...</b></span>'));

SetWidgetRichText('u41', PopulateVariables('<span style=" font-family:\'Arial\'; font-size:13px;">people</span>'));

SetWidgetRichText('u43', PopulateVariables(''));

	SetPanelStateu20("pd1u20");

}

}

var u66 = document.getElementById('u66');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
