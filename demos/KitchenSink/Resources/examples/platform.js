var win = Titanium.UI.currentWindow;

var l1 = Titanium.UI.createLabel({
	text:'name:' + Titanium.Platform.name,
	top:10,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l1);

var l2 = Titanium.UI.createLabel({
	text:'model:' + Titanium.Platform.model,
	top:30,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l2);

var l3 = Titanium.UI.createLabel({
	text:'version:' + Titanium.Platform.version,
	top:50,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l3);

var l4 = Titanium.UI.createLabel({
	text:'architecture:' + Titanium.Platform.architecture,
	top:70,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l4);

var l5 = Titanium.UI.createLabel({
	text:'macaddress:' + Titanium.Platform.macaddress,
	top:90,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
});

win.add(l5);

var l6 = Titanium.UI.createLabel({
	text:'processor count:' + Titanium.Platform.processorCount,
	top:110,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l6);


var l7 = Titanium.UI.createLabel({
	text:'username:' + Titanium.Platform.username,
	top:130,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l7);

var l8 = Titanium.UI.createLabel({
	text:'address:' + Titanium.Platform.address,
	top:150,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l8);

var l9 = Titanium.UI.createLabel({
	text:'ostype:' + Titanium.Platform.ostype,
	top:170,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l9);

var l11 = Titanium.UI.createLabel({
	text:'battery state:' + Titanium.Platform.batteryState,
	top:190,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l11);

var l12 = Titanium.UI.createLabel({
	text:'battery level:' + Titanium.Platform.batteryLevel,
	top:210,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
});

win.add(l12);

var l13 = Titanium.UI.createLabel({
	text:'display width:' + Titanium.Platform.displayCaps.platformWidth,
	top:230,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l13);

var l14 = Titanium.UI.createLabel({
	text:'display height:' + Titanium.Platform.displayCaps.platformHeight,
	top:250,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l14);

var l15 = Titanium.UI.createLabel({
	text:'display density:' + Titanium.Platform.displayCaps.density,
	top:270,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l15);

var l16 = Titanium.UI.createLabel({
	text:'display dpi:' + Titanium.Platform.displayCaps.dpi,
	top:290,
	left:10,
	width:300,
	font:{fontSize:14},
	color:'#777'
	
});

win.add(l16);

var b = Titanium.UI.createButton({
	title:'Open URL',
	height:30,
	width:200,
	top:320
});
win.add(b);
var openURL=0;
b.addEventListener('click', function()
{
	switch(openURL)
	{
		case 0:
		{
			Titanium.Platform.openURL('http://www.google.com');
			b.title='Open URL (web)';
			openURL++;
			break;
		}
		case 1:
		{
			Titanium.Platform.openURL('tel:4043334444');
			b.title='Open URL (tel)';
			openURL++;
			break;
		}
		case 2:
		{
			Titanium.Platform.openURL('sms:4043332222');
			b.title='Open URL (sms)';
			openURL=0;
			break;
		}
		
	}
});

//
// BATTERY STATE CHANGE EVENT
//
Titanium.Network.addEventListener('battery', function(e)
{
	var message = 'Level: ' + e.level;
	switch (e.state)
	{
		case Titanium.Network.BATTERY_STATE_UNKNOWN:
		{
			message += ' state:unknown';
			break;
		}
		case Titanium.Network.BATTERY_STATE_UNPLUGGED:
		{
			message += ' state:unplugged';
			break;
		}
		case Titanium.Network.BATTERY_STATE_CHARGING:
		{
			message += ' state:charging';
			break;
		}
		case Titanium.Network.BATTERY_STATE_FULL:
		{
			message += ' state:full';
			break;
		}

	}
	Titanium.UI.createAlertDialog({title:'Platform', message:message}).show();
});