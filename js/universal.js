var currentPage={};

var Navigator = React.createClass({
	render: function() {
		return React.createElement(
			"ul",
			null,
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "./index.html", id:currentPage.index},
					"CG2016"
				)
			),
			React.createElement(
				"span",
				null,
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./about.html", id:currentPage.about},
						"About"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./lecture.html", id:currentPage.lecture},
						"Lecture"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./Homework.html", id:currentPage.homework},
						"Homework"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./Project.html", id:currentPage.project},
						"Project"
					)
				)
			)
		);
	}
});

var Footer=React.createClass({
	render: function(){
		return React.createElement(
			"footer",
			null,
			React.createElement(
				"div",
				{id:"footerBody"},
				React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{
							href:"http://web.ncku.edu.tw/bin/home.php",
							target:"_blank"
						},
						"National Cheng Kung University"
					)
					
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{
							href:"http://mislab.csie.ncku.edu.tw/",
							target:"_blank"
						},
						"Multimedia Information System Lab"
					)
				)
			)
		);
	}
});