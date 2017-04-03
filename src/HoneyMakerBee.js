var HoneyMakerBee = function(age,job,color) {
  Bee.call(this,color);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;


};

HoneyMakerBee.prototype = Object.create(Grub.prototype);


HoneyMakerBee.prototype.makeHoney = function() {

  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {

  this.honeyPot--;
}


HoneyMakerBee.prototype.constructor = HoneyMakerBee;
