var lectures=[
	{title:"Week 1: Syllabus & Overview of Computer Graphics", img:"./art/week1.png", slideshow:"./file/20160223 Syllabus.pdf", video:"https://www.youtube.com/watch?v=kzx0_wnOlRM"}
]

var Lecture=React.createClass({
	render:function(){
		var slideshowTemp;
		var videoTemp;
		var width=100;
		var buttonCount=0;
		if(this.props.slideshow!=undefined){
			buttonCount++;
		}
		if(this.props.video!=undefined){
			buttonCount++;
		}
		width=100/buttonCount;
		var buttonEle=[];
		if(this.props.slideshow!=undefined){
			buttonEle.push(React.createElement("a", {className:"slideshowB", href:this.props.slideshow, target:"_blank", style:{width:width+"%"}}));
		}
		if(this.props.video!=undefined){
			buttonEle.push(React.createElement("a", {className:"videoB", href:this.props.video, target:"_blank", style:{width:width+"%"}}));
		}
		return React.createElement(
			"div",
			{className:"lecture"},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"lectureImg"}
			),
			React.createElement(
				"div",
				{className:"lectureTitle"},
				this.props.title
			),
			React.createElement(
				"div",
				{className:"cardButton"},
				buttonEle
			)
		);
	}
});

var Main = React.createClass({
	render: function() {
		var lecturesEle=[];
		for(var a in lectures){
			lecturesEle.push(React.createElement(Lecture, {title:lectures[a].title, img:lectures[a].img, slideshow:lectures[a].slideshow, video:lectures[a].video}));
		}
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				"div",
				{id:"lectureBody"},
				lecturesEle
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.lecture="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));