"use strict";

export default ClockBox;


function ClockBox(startDate, endDate) {
  this._dates = buildDateRange(
    new Date(startDate),
    new Date(endDate)
  );
}


ClockBox.prototype = {
  getDayCount() {
    return Object.keys(this._dates).length;
  },


  store(date, data) {
    var key;
    date = new Date(date);
    key = keyFromDate(date);
    this._dates[key][date.getHours()] = data;
  },


  fetch(date) {
    var key;
    date = new Date(date);
    key = keyFromDate(date);
    return this._dates[key][date.getHours()];
  }
};


function buildDateRange(start, end) {
  var currentDate = start,
      tomorrow = getNextDate(start),
      dates = [];

  dates.push(start);
  while (!isSameDay(tomorrow, end)) {
    currentDate = tomorrow;
    dates.push(currentDate);
    tomorrow = getNextDate(currentDate);
  }
  dates.push(end);

  return dates.map(keyFromDate).reduce(function(obj, key) {
    obj[key] = Array(24).fill(null);
    return obj;
  }, {});
}


function isSameDay(a, b) {
  return a.toLocaleDateString() === b.toLocaleDateString()
}


function getNextDate(date) {
  return new Date((new Date(date)).setDate(date.getDate() + 1))
}


function keyFromDate(date) {
  if (!Date.prototype.isPrototypeOf(date)) {
    date = new Date(date);
  }
  return Number(new Date(date.toLocaleDateString()));
}
