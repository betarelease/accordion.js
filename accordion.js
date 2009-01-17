Accordion = Class.create();
Accordion.prototype = {
  initialize: function(toggle, content){
    this.toggle = toggle;
    this.content = content;
  },

  observe: function(){
    $$(this.toggle).each(function(item){
      item.down('a').observe('click', this.respond.bindAsEventListener(this));
    }, this);
  },

  respond: function(event){
    var element = Event.element(event);
    this.play(element);
    event.stop();
  },
  
  play: function(element){  
    var h4 = element.up();
    var bellow = h4.next(this.content);
    $$(this.content).each(function(item){
      if(item.id != bellow.id) {
        item.hide();
      }
    },this);
    bellow.show();
  },

  onLoad: function(){
     $$(this.content).each(function(item){
       item.hide();
     }, this);
     $$(this.content)[0].show();
  }
};