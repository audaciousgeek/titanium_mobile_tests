// Create a view and retrieve its left value 
// View should be shifted 10 system units to the right
var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'red',
	left: 10
})

var label = Ti.UI.createLabel({
	text: 'view.left: ' + view.left +' The red view should be shifted 10 system units to the right',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

win.add(view);
win.add(label);
