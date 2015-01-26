var assert = require("assert"),
    ClockBox = require("../lib");


describe("ClockBox", function() {

  describe("#getDayCount", function() {
    it("should report the proper number of dates", function() {
      var c = new ClockBox("3/17/2015", "3/18/2015");
      assert(c.getDayCount() === 2);
    });
  });

  describe("#store, #fetch", function() {
    it("should store data and allow it to be retrieved", function() {
      var c = new ClockBox("3/17/2015", "3/19/2015"),
          date = new Date("2015-03-18T23:12:11.627Z");
      c.store(date, "wut");
      assert(c.fetch(date) === "wut");
    });
  });

});
