class HoneyMakerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = "make honey";
    this.color = this.color;
    this.food = this.food;
    this.honeyPot = 0;
  }
  makeHoney () {
    this.honeyPot++;
  }
  giveHoney () {
    this.honeyPot--;
  }
};
/*
 a makeHoney method that adds 1 to that honeyBee's honeyPot
 a giveHoney method that subtracts 1 from that honeyBee's honeyPot*/