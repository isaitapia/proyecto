import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  "click #loginlink" : function (e) {
      e.preventDefault();
      $(".panelform").css("opacity",1);
  },
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },

   
  
}),
Template.test.onRendered(function(){
	$('.button-collapse').sideNav();
  $('.parallax').parallax();
  /*$(".panelform").css("opacity",0);*/
});
