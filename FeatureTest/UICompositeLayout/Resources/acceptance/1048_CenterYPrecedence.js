// Create a view with center.y to 100 and bottom to 50 added to a parent of width and height of 200 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';


var view = Ti.UI.createView({
	height: 200,
	width:200,
	backgroundColor: 'yellow'
})
var viewChild = Ti.UI.createView({
	backgroundColor: 'red',
	center: {y:100},
	bottom: 50
});

var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: 60,
	width: 300,
	color: 'black'
});


win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Height value: '+viewChild.size.height+'\nPass if the value is 100 and \nthe red is centered to yellow';
	win.addEventListener('postlayout', layoutHandler);
});
view.add(viewChild);
win.add(view);
win.add(label);