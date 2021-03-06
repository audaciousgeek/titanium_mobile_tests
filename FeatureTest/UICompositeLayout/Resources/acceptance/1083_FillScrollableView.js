//Create multiple scrollable view on different parent size

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Should be able to scroll yellow to red, green to blue and pink to orange',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var background1 = Ti.UI.createView({backgroundColor:'yellow'});
var background2 = Ti.UI.createView({backgroundColor:'red'});
var background3 = Ti.UI.createView({backgroundColor:'green'});
var background4 = Ti.UI.createView({backgroundColor:'blue'});
var background5 = Ti.UI.createView({backgroundColor:'pink'});
var background6 = Ti.UI.createView({backgroundColor:'orange'});

var scrollable1 = Ti.UI.createScrollableView({
	views: [background1, background2]
})
var scrollable2 = Ti.UI.createScrollableView({
	views: [background3, background4]
})
var scrollable3 = Ti.UI.createScrollableView({
	views: [background5, background6]
})

// Small Test
var view1 = Ti.UI.createView({
	height: 50,
	width: 50,
	top: 80
});
view1.add(scrollable1);

// Medium Test
var view2 = Ti.UI.createView({
	height: 100,
	width: 100,
	top: 140
});
view2.add(scrollable2);

//Large Test
var view3 = Ti.UI.createView()
view3.add(scrollable3);

win.add(view3)
win.add(view2);
win.add(view1);
win.add(label);
