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
				Footer,
				null
			)
		)
	}
});
currentPage.project="currentPage";
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));