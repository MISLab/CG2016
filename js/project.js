var presentations=[
	{title:"Group 5: Real-time High-fidelity Facial Performance Capture", img:"./art/pst_5.png", file:"https://youtu.be/iGFcaxlPP_Q"},
	{title:"Group 11: Style Compatibility for 3D Furniture Models", img:"./art/pst_11.png", file:"https://youtu.be/4DdPMciKNQA"},
	{title:"Group 14: Guided Ecological Simulation for Artistic Rditing of Plant Distributions in Natural Scenes", img:"./art/pst_14.png", file:"https://youtu.be/P9TzLSuAbNg"},
	{title:"Group 16: Double Bubble Sans Toil and Trouble: Discrete Circulation-Preserving Vortex Sheets for Soap Films and Foams", img:"./art/pst_16.png", file:"https://youtu.be/RXL-KX9Q1dg"}
];

var Presentation=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"presentation", href:this.props.file, target:"_blank"},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"img"}
			),
			React.createElement(
				"div",
				{className:"titleDiv"},
				React.createElement(
					"div",
					{className:"cardTitle"},
					this.props.title
				)
			)
		);
	}
});

var Main = React.createClass({
	render: function() {
		var presentEle=[];
		for(var a in presentations){
			presentEle.push(React.createElement(Presentation, {title:presentations[a].title, file:presentations[a].file, img:presentations[a].img}));
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
				{id:"pstBody"},
				React.createElement(
					"div",
					{id:"pstInnerBody"},
					React.createElement(
						"div",
						{className:"title1"},
						"Midterm Presentation"
					),
					presentEle
				)
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});
currentPage.project="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));