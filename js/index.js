var weekNum=1;
var courseTitle="Syllabus & Overview of Computer Graphics";
var courseInfo=[
	"Introduction of computer graphics",
	"The relationship between computer graphics, computer vision and image processing",
	"Applications of Computer Graphics",
	"Introduction of VFX",
	"Introduction of Unreal Engine 4"
];

var TitleElement=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{className:"titleBody"},
				React.createElement(
					"div",
					{id:"titleName"},
					"Computer Graphic ",
					React.createElement(
						"span",
						{id:"year"},
						"2016"
					)
				)
			)
		);
	}
});

var Title=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"title"},
			React.createElement(TitleElement, null)
		);
	}
});

var Info=React.createClass({
	render:function(){
		var courseInfoEle=[];
		for(var a in courseInfo){
			courseInfoEle.push(React.createElement("div", null, courseInfo[a]));
		}
		return React.createElement(
			"div",
			{id:"infoBody"},
			React.createElement(
				"div",
				{id:"nextLecture", className:"infoEle"},
				React.createElement(
					"div",
					{id:"week"},
					"Week "+weekNum
				),
				React.createElement(
					"div",
					{id:"courseTitle"},
					courseTitle
				),
				React.createElement(
					"div",
					{id:"courseInfo"},
					courseInfoEle
				)
			),
			React.createElement(
				"div",
				{id:"announcement", className:"infoEle"},
				React.createElement(
					"div",
					{id:"annTitle"},
					"Announcement"
				)
			)
		);
	}
});



var Main = React.createClass({
	render: function() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				Title,
				null
			),
			React.createElement(
				Info,
				null
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.index="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));