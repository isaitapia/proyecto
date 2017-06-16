Template.registerform.onRendered(function(){
	$("select").material_select();

});
Template.registerform.events({
	"click #atras" : function(){
		myTemplates.set("loginform");
	},
	"submit form" : function(e){
		var user = {
			"username" : e.target.username.value,
			"email" : e.target.email.value,
			"password" : e.target.password.value,
			"profile" : {
				"nombreapellido" : e.target.nombreapellido.value,
				"carrera" : e.target.carrera.value,
				}

		};
		Accounts.createUser(user,function(e){
			if(e == undefined){
				console.log(indefinido);
				Meteor.loginWithPassword(user.username,user.password);	

			}

			//Meteor.logout();  -- metodo
	});
	},
	
		
	

	
});	

