var lectures=[
	{title:"Week 1: Syllabus & Overview of Computer Graphics", img:"./art/week1.png", file:"./file/20150226 Syllabus.pdf"}
]

var Lecture=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"lecture", href:this.props.file},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"lectureImg"}
			),
			React.createElement(
				"div",
				{className:"lectureTitle"},
				this.props.title
			)
		);
	}
});

var Main = React.createClass({
	render: function() {
		var lecturesEle=[];
		for(var a in lectures){
			lecturesEle.push(React.createElement(Lecture, {title:lectures[a].title, img:lectures[a].img, file:lectures[a].file}))
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