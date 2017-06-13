myTemplates = new ReactiveVar();
myTemplates.set("loginform");
//myTemplates.set("register");
Template.mainlogin.helpers({
	template : function () {
	return myTemplates.get();
	}
});