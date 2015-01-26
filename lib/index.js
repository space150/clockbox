"use strict";

export default class ClockBox {
  constructor(startDate, endDate) {
    this._dates = buildDateRange(
      new Date(startDate),
      new Date(endDate)
    );
  }


  getDayCount() {
    return Object.keys(this._dates).length;
  }


  store(date, data) {
    var { key, hour } = getKeyAndHour(date);
    this._dates[key][hour] = data;
  }


  fetch(date) {
    var { key, hour } = getKeyAndHour(date);
    return this._dates[key][hour];
  }


  fetchDay(date) {
    var { key, hour } = getKeyAndHour(date),
        data;
 
    data = this._dates[key];
    return removeEmptyHours(data);
  }
}


function getKeyAndHour(date) {
  var key, hour;
  date = new Date(date);
  key = keyFromDate(date);
  hour = date.getHours();
  return { key, hour };
}


// This will return an Array-like object (the keys are Numbers) containing only
// the hours which hold data.
function removeEmptyHours(data) {
  return data.reduce((obj, hourData, hour) => {
    // If the hour has any data, add it to the returned object.
    if (hourData) {
      obj[hour] = hourData;
    }
    return obj;
  }, {});
}


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
