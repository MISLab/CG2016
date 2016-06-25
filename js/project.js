var presentations=[
	{title:"Group 1: Shape Segmentation by Approximate Convexity Analysis", img:"./art/pst_1.png", file:"https://youtu.be/vAn2g0Gotso"},
	{title:"Group 2: Animating Human Dressing", img:"./art/pst_2.jpg", file:"https://youtu.be/8vQSnM77e8s"},
	{title:"Group 3: Precomputed Environment Semantics for Contact-Rich Character Animation", img:"./art/pst_3.jpg", file:"https://youtu.be/4SJwIOvrMAA"},
	{title:"Group 4: Data-Driven Interactive Quadrangulation", img:"./art/pst_4.jpg", file:"https://youtu.be/M8DuzWpDidI"},
	{title:"Group 5: Real-time High-fidelity Facial Performance Capture", img:"./art/pst_5.png", file:"https://youtu.be/iGFcaxlPP_Q"},
	{title:"Group 6: Dynamically Balanced and Plausible Trajectory Planning for Human-Like Characters", img:"./art/pst_6.jpg", file:" https://youtu.be/GIQJBgpKZuM"},
	{title:"Group 7: Augmented Reality Instruction for Object Assembly based on Markerless Tracking", img:"./art/pst_7.png", file:"https://youtu.be/0cV1QtLzBvU"},
	{title:"Group 9: Real-time Hair Mesh Simulation", img:"./art/pst_9.jpg", file:"https://youtu.be/Ds7m8s4zm1o"},
	{title:"Group 10: Stochastic Soft Shadow Mapping", img:"./art/pst_10.png", file:"https://youtu.be/8PlQlY2kNcs"},
	{title:"Group 11: Style Compatibility for 3D Furniture Models", img:"./art/pst_11.png", file:"https://youtu.be/4DdPMciKNQA"},
	{title:"Group 12: Time-lapse Mining from Internet Photos", img:"./art/pst_12.jpg", file:"https://youtu.be/dlabDHhoTGI"},
	{title:"Group 14: Guided Ecological Simulation for Artistic Rditing of Plant Distributions in Natural Scenes", img:"./art/pst_14.png", file:"https://youtu.be/P9TzLSuAbNg"},
	{title:"Group 15: Power Particles", img:"./art/pst_15.jpg", file:"https://youtu.be/OUcChOYrmto"},
	{title:"Group 16: Double Bubble Sans Toil and Trouble: Discrete Circulation-Preserving Vortex Sheets for Soap Films and Foams", img:"./art/pst_16.png", file:"https://youtu.be/RXL-KX9Q1dg"},
	{title:"Group 17: Tone Mapping High Dynamic Range Videos using Wavelets", img:"./art/pst_17.png", file:"https://youtu.be/0S3jXZtzDaw"},
	{title:"Group 18: Real-time Rigid Body Simulation on GPUs", img:"./art/pst_18.jpg", file:"https://youtu.be/MNKFivihhQQ"}
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