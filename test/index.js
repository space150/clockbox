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
          date = new Date("2015-03-18T14:00:00Z");
      c.store(date, "wut");
      assert(c.fetch(date) === "wut");
    });
  });

  describe("#clear", function() {
    it("should clear data for the given hour", function() {
      var c = new ClockBox("3/17/2015", "3/19/2015"),
          date = new Date("2015-03-18T14:00:00Z");
      c.store(date, "wut");
      c.clear(date);
      assert(c.fetch(date) === null);
    });
  });

  describe("#fetchDay", function() {
    it("should return all the data for a given day", function() {
      var c = new ClockBox("3/17/2015", "3/19/2015"),
          date = new Date("2015-03-18"),
          daysData;
      date.setHours(12); c.store(date, "12");
      date.setHours(14); c.store(date, "14");

      daysData = c.fetchDay(date);
      assert(daysData[12] === "12" && daysData[14] === "14");
    });

    it("should return only those hours with data", function() {
      var c = new ClockBox("3/17/2015", "3/19/2015"),
          date = new Date("2015-03-18"),
          daysData;
      date.setHours(12); c.store(date, "12");
      date.setHours(14); c.store(date, "14");

      daysData = c.fetchDay(date);
      assert(Object.keys(daysData).length === 2);
    });
  });
});
