var assert = require("assert"),
    Calendar = require("..");


describe("Calendar", function() {

  describe("#new", function() {
    it("should have the proper number of dates", function() {
      var c = new Calendar("3/17/2015", "3/18/2015");
      assert(c.getDayCount() === 2);
    });
  });

  describe("#store, #fetch", function() {
    it("should store data and allow it to be retrieved", function() {
      var c = new Calendar("3/17/2015", "3/19/2015"),
          date = new Date("2015-03-18T23:12:11.627Z");
      c.store(date, "wut");
      assert(c.fetch(date) === "wut");
    });
  });

});
