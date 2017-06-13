Template.registerform.onRendered(function(){
	$("select").material_select();
});
Template.registerform.events({
	"click #atras" : function(){
	myTemplates.set("loginform");
	}

});	