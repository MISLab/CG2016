var references=[
	{title:"Rotations", img:"./art/reference1.png", file:"http://rotations.berkeley.edu/", summary:""},
	{title:"WebGL Shader Tool", img:"./art/reference2.png", file:"http://shdr.bkcore.com/", summary:""}
]

var Reference=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"reference", href:this.props.file},
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
					{className:"summary"},
					this.props.summary
				)
			)
		);
	}
});

var Main = React.createClass({
	render: function() {
		var referenceEle=[];
		for(var a in references){
			referenceEle.push(React.createElement(Reference, {title:references[a].title, img:references[a].img, file:references[a].file, summary:references[a].summary}))
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
				{id:"referenceBody"},
				referenceEle
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.reference="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));