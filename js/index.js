var weekNum=2;
var courseTitle="Computer Animation Pipeline";
var courseInfo=[
	"Introduction to computer animation pipeline",
	"Modeling, texture, rigging, animation, shading, lighting, VFX (particles)",
	"The idea of art-directable",
	"Current challenges in computer animation production"
];
var announcement=[
	"Homework 1",
	"Deadline: 2016/2/29 22:00"
];
var title=[
	{mainTitle:"Computer Graphic ", subTopic:"2016", img:"./art/title.png"},
]

var titleCount=title.length;
var currentTitle=0;
var changeTitle=true;
var TitleElement=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"titleBody", id:"title"+this.props.count, href:this.props.href, style:{"background-image":"url("+this.props.img+")"}},
			React.createElement(
				"div",
				{className:"titleName"},
				React.createElement(
					"div",
					{className:"mainTitle"},
					this.props.mainTitle
				),
				React.createElement(
					"div",
					{className:"subTopic"},
					this.props.subTopic
				)
				
			)
		);
	}
});

var TitleNavEle=React.createClass({
	clickEvent:function(){
		changeTitle=false;
		changeTitlePage(this.props.num);
	},
	render:function(){
		var className="titleNavEle";
		if(this.props.num==currentTitle){
			className="titleNavEle currentTitle";
		}
		return React.createElement(
			"div",
			{className:className, id:"titlePage"+this.props.num, onClick:this.clickEvent}
		);
	}
});

var Title=React.createClass({
	render:function(){
		var titleEle=[];
		for(var a in title){
			titleEle.push(React.createElement(TitleElement, {mainTitle:title[a].mainTitle, subTopic:title[a].subTopic, img:title[a].img, href:title[a].href, count:a}));
		}
		var titleNavEle=[];
		for(var a in title){
			titleNavEle.push(React.createElement(TitleNavEle, {num:a}));
		}
		return React.createElement(
			"div",
			{id:"title"},
			React.createElement(
				"div",
				{id:"innerTitle", style:{width:1024*titleCount+"px"}},
				titleEle
			),
			React.createElement(
				"div",
				{id:"titleNav", style:{width:60*titleCount+"px"}},
				titleNavEle
			)
		);
	}
});

var Info=React.createClass({
	render:function(){
		var courseInfoEle=[];
		for(var a in courseInfo){
			courseInfoEle.push(React.createElement("div", null, courseInfo[a]));
		}
		var announcementEle=[];
		for(var a in announcement){
			announcementEle.push(React.createElement("div", null, announcement[a]));
		}
		return React.createElement(
			"div",
			{id:"infoBody"},
			React.createElement(
				"div",
				{id:"nextLecture", className:"infoEle"},
				React.createElement(
					"div",
					{className:"week"},
					"Week "+weekNum
				),
				React.createElement(
					"div",
					{className:"courseTitle"},
					courseTitle
				),
				React.createElement(
					"div",
					{className:"courseInfo"},
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
				),
				React.createElement(
					"div",
					{className:"courseInfo"},
					announcementEle
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
function changeTitlePage(num){
	num=parseInt(num);
	if(num>=titleCount){
		return false;
	}
	document.getElementById("titlePage"+currentTitle).className="titleNavEle";
	document.getElementById("titlePage"+num).className="titleNavEle currentTitle";
	document.getElementById("innerTitle").style.left=-1024*num+"px"
	currentTitle=num;
}

function autoChangeTitle(){
	var nextTitle=currentTitle+1;
	if(nextTitle>=titleCount){
		nextTitle=0;
	}
	if(changeTitle==true){
		changeTitlePage(nextTitle);
	}else{
		changeTitle=true;
	}
}

setInterval(autoChangeTitle, 7000);
currentPage.index="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));