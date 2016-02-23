var File=React.createClass({
	render:function(){
		return React.createElement(
			"a",
			{className:"file", href:this.props.file},
			React.createElement(
				"div",
				{style:{"background-image":"url("+this.props.img+")"}, className:"fileImg"}
			),
			React.createElement(
				"div",
				{className:"filename"},
				this.props.filename
			)
		);
	}
});


var Tutorial=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"tutorialBody"},
			React.createElement(
				"h1",
				null,
				"Homework 1: Create a 3D model using Blender"
			),
			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Introduction"
				),
				React.createElement(
					"p",
					null,
					"Blender is a powerful open-source cross-platform 3D computer graphic \
					software used for creating models, animated films and 3D applications."
				),
				React.createElement(
					"p",
					null,
					"In this assignment, you will have to create a 3D model using Blender. \
					Notice that your score will base on the quality of your model.\
					You can use as many techniques as you may find."
				)
			),
			React.createElement(
				"div",
				{className:"paragraph clear"},
				React.createElement(
					"h2",
					null,
					"Five minutes tutorial of Blender"
				),
				React.createElement(
					File,
					{filename:"Blender Tutorial", img:"./art/BlenderTutorial.png", file:"./file/Blender Tutorial.pdf"}
				),
				React.createElement(
					File,
					{filename:"Blender Tutorial English Version", img:"./art/BlenderTutorial.png", file:"./file/Blender Tutorial English Version.pdf"}
				)
			),
			React.createElement(
				"div",
				{className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Homework Submission"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Submit \"Student ID.zip\" to Moodle.",
					React.createElement(
						"br",
						null
					),
					"Include your blender project file(*.blend), a wavefront file(*.obj) from your model and a document explains what techniques you used and how you made your model.",
					React.createElement(
						"br",
						null
					),
					React.createElement(
						"span",
						{className:"alert"},
						"Deadline: 2016/2/29 22:00"
					)
				)

			),
			React.createElement(
				"div",
				{id:"score", className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Scoring"
				),
				React.createElement(
					"div",
					{className:"listInfo"},
					"Basic Requirement(10%)",						
					React.createElement(
						"br",
						null
					),
					"Advanced Blender Function(20%): rendering, modeling techniques, texturing, animating...",
					React.createElement(
						"br",
						null
					),
					"Model(70%)",
					React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"p",
							null,
							"You will only get 10 points if your model is too simple."
						),
						React.createElement(
							"div",
							{className:"exImg",style:{"background-image":"url(./art/hw1_bad.png)"}}
						)
					),
					React.createElement(
						"div",
						{className:"paragraph"},
						React.createElement(
							"p",
							null,
							"You will get better score if you show more creativity and complexity in your model."
						),
						React.createElement(
							"div",
							{className:"exImg",style:{"background-image":"url(./art/hw1_70.png)"}}
						)
					)
				)
			),
			React.createElement(
				"div",
				{id:"example", className:"paragraph"},
				React.createElement(
					"h2",
					null,
					"Last year example"
				),
				React.createElement(
						"div",
						null,
						React.createElement(
							"div",
							{className:"exImg", style:{"background-image":"url(./art/hw1_ex1.png)"}}
						),
						React.createElement(
							"div",
							{className:"exImg", style:{"background-image":"url(./art/hw1_ex2.png)"}}
						),
						React.createElement(
							"div",
							{className:"exImg", style:{"background-image":"url(./art/hw1_ex3.png)"}}
						),
						React.createElement(
							"div",
							{className:"exImg", style:{"background-image":"url(./art/hw1_ex4.png)"}}
						),
						React.createElement(
							"div",
							{className:"exImg", style:{"background-image":"url(./art/hw1_ex5.png)"}}
						)
					)
			)
		)
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
				Tutorial,
				null
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