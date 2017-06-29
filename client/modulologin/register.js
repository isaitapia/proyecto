Template.registerform.onRendered(function(){
	$("select").material_select();

});
Template.registerform.events({
	"click #atras" : function(){
		myTemplates.set("loginform");
	},
	"submit form" : function(e){
			var id_us = $("#username").val();
			var correo_us = $("email").val();
			var pass_us = $("password").val();
			var nombre_us = $("nombreapellido").val();			
			var carrera_us = $("carrera").val();
			var image_us = false;//("image").val();
			ESTUDIANTE.insert({id_us:id_us,correo_us:correo_us,pass_us:pass_us,nombre_us:nombre_us,carrera_us:carrera_us});
			//ESTUDIANTE.insert({username:"nuevo_usuario",correo_us:correo_us});

			console.log(id_us,correo_us);
			return false;
		/*var estudiante = {
			"username" : e.target.username.value,
			"email" : e.target.email.value,
			"password" : e.target.password.value,
			"nombreapellido" : e.target.nombreapellido.value,
			"carrera" : e.target.carrera.value,
		};*/
		/*ESTUDIANTE.insert({estudiante});
		return false;*/
		/*
		Accounts.createUser(user,function(e){
			if(e == undefined){
				console.log(indefinido);
				Meteor.loginWithPassword(user.username,user.password);	
			}
			//Meteor.logout();  -- metodo
		});  */
	},
		
});	

