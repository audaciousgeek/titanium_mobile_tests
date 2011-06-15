// Create a view and set padding to 0 for top/left/right/bottom
// View should contain 0 unit padding

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	padding: 0
});

var innerView = Ti.UI.createView({
	backgroundColor: 'green'
});

win.addEventListener('open', function(e){
	label.text = 'View Padding value: '+view.padding+'\nPass if value is: 0';
});

view.add(innerView);
win.add(view);
win.add(label);