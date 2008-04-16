
var PageName = 'Local Campaigns';
var PageId = 'pafd092df42bf41d79731d3cd4c7e4682'
var PageUrl = 'Local_Campaigns.html'
document.title = 'Local Campaigns';

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

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u7 = document.getElementById('u7');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u2 = document.getElementById('u2');

var u19 = document.getElementById('u19');

var u13 = document.getElementById('u13');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u5 = document.getElementById('u5');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

var u21 = document.getElementById('u21');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u3 = document.getElementById('u3');

var u14 = document.getElementById('u14');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u20 = document.getElementById('u20');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u18 = document.getElementById('u18');

var u4 = document.getElementById('u4');

if (window.OnLoad) OnLoad();
