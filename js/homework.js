var homeworks=[
	{title:"Homework 1", deadline:"2016/02/29 22:00", img:"./art/homework1.png", file:"./homework1.html"},
	{title:"Homework 2", deadline:"2016/04/11 22:00", img:"./art/homework2.png", file:"./homework2.html"},
	{title:"Homework 3", deadline:"2016/05/02 22:00", img:"./art/homework3.png", file:"./homework3.html"},
	{title:"Homework 4", deadline:"2016/05/16 22:00", img:"./art/homework4.png", file:"./homework4.html"}
]

var Homework=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"homework", href:this.props.file},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"img"}
			),
			React.createElement(
				"div",
				{className:"titleDiv"},
				React.createElement(
					"div",
					{className:"title"},
					this.props.title
				),
				React.createElement(
					"div",
					{className:"deadline"},
					"Deadline: "+this.props.deadline
				)
			)
		);
	}
});

var Main = React.createClass({
	render: function() {
		var homeworkEle=[];
		for(var a in homeworks){
			homeworkEle.push(React.createElement(Homework, {title:homeworks[a].title, img:homeworks[a].img, file:homeworks[a].file, deadline:homeworks[a].deadline}))
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
				{id:"homeworkBody"},
				homeworkEle
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.homework="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));