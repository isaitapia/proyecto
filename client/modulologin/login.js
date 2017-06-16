/*
Template.login.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
}),
*/
Template.loginform.events({
	"click #registerbutton": function (e) {
		
		e.preventDefault();
		myTemplates.set("registerform");
		$(".panelform").css("opacity",0); 
	},
	"click #cerrar": function (e) {
		e.preventDefault();
		$(".panelform").css("opacity",0); 
	}

});
