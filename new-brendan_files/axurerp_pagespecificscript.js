
var PageName = 'new-brendan';
var PageId = 'pd758f26820af4aafb0ffb4981948f8bf'
var PageUrl = 'new-brendan.html'
document.title = 'new-brendan';

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

eval(GetDynamicPanelScript('u73', 1));

eval(GetDynamicPanelScript('u76', 1));

eval(GetDynamicPanelScript('u92', 3));

eval(GetDynamicPanelScript('u52', 1));

eval(GetDynamicPanelScript('u42', 1));

eval(GetDynamicPanelScript('u14', 2));

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u54 = document.getElementById('u54');

var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u45 = document.getElementById('u45');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u96 = document.getElementById('u96');

var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

;

SetGlobalVariableValue('$Name', GetWidgetFormText('u12'));

SetGlobalVariableValue('$Pitch', GetWidgetFormText('u82'));

	self.location.href="show-dome.html" + GetQuerystring();

}

}

var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u26 = document.getElementById('u26');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u5 = document.getElementById('u5');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u76 = document.getElementById('u76');

var u14 = document.getElementById('u14');

var u67 = document.getElementById('u67');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

var u4 = document.getElementById('u4');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u55 = document.getElementById('u55');

var u93 = document.getElementById('u93');

var u61 = document.getElementById('u61');

var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	SetPanelStateu92("pd2u92");

}

}

var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	SetPanelStateu92("pd0u92");

}

}

var u52 = document.getElementById('u52');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	var obj1 = document.getElementById("u73");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu73("hidden"); }
	else {SetPanelVisibilityu73("");}

}

}

var u89 = document.getElementById('u89');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	SetPanelStateu92("pd1u92");

}

}

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');

if (bIE) u77.attachEvent("onfocus", Focusu77);
else u77.addEventListener("focus", Focusu77, true);
function Focusu77(e)
{

if ((GetWidgetFormText('u77')) == (PopulateVariables('if / unless...'))) {

SetWidgetFormText('u77', PopulateVariables(''));

}

}

if (bIE) u77.attachEvent("onblur", LostFocusu77);
else u77.addEventListener("blur", LostFocusu77, true);
function LostFocusu77(e)
{

if ((GetWidgetFormText('u77')) == (PopulateVariables(''))) {

SetWidgetFormText('u77', PopulateVariables('if / unless...'));

}

}

var u30 = document.getElementById('u30');

var u100 = document.getElementById('u100');

var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	SetPanelStateu14("pd1u14");

}

}
gv_vAlignTable['u15'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

if (bIE) u74.attachEvent("onfocus", Focusu74);
else u74.addEventListener("focus", Focusu74, true);
function Focusu74(e)
{

if ((GetWidgetFormText('u74')) == (PopulateVariables('if / unless...'))) {

SetWidgetFormText('u74', PopulateVariables(''));

}

}

if (bIE) u74.attachEvent("onblur", LostFocusu74);
else u74.addEventListener("blur", LostFocusu74, true);
function LostFocusu74(e)
{

if ((GetWidgetFormText('u74')) == (PopulateVariables(''))) {

SetWidgetFormText('u74', PopulateVariables('if / unless...'));

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u12 = document.getElementById('u12');

var u65 = document.getElementById('u65');

var u71 = document.getElementById('u71');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
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

	var obj1 = document.getElementById("u52");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu52("hidden"); }
	else {SetPanelVisibilityu52("");}

}

}

var u40 = document.getElementById('u40');

var u68 = document.getElementById('u68');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u97 = document.getElementById('u97');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u22 = document.getElementById('u22');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u72 = document.getElementById('u72');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u47 = document.getElementById('u47');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u28 = document.getElementById('u28');

var u92 = document.getElementById('u92');

var u2 = document.getElementById('u2');

var u44 = document.getElementById('u44');

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	var obj1 = document.getElementById("u42");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu42("hidden"); }
	else {SetPanelVisibilityu42("");}

}

}

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u16'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

;

;

	SetPanelStateu14("pd0u14");

}

}
gv_vAlignTable['u13'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u105 = document.getElementById('u105');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');

var u63 = document.getElementById('u63');

var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	var obj1 = document.getElementById("u76");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu76("hidden"); }
	else {SetPanelVisibilityu76("");}

}

}

var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
