
FlowRouter.route("/",{
	action : function(params, queryParams){
		BlazeLayout.render("home",{});
	}
});
FlowRouter.route("/estudiantes",{
	action : function(params, queryParams){
		BlazeLayout.render("mainestudiante",{});
	}
});
