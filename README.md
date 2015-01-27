# clockbox

A JavaScript time-based data store.

## Example

```js
var ClockBox = require("clockbox"),
    date = new Date("1/26/2015"),
    clockbox = new ClockBox("1/25/2015", "1/31/2015");

date.setHours(14);
clockbox.store(date, "data!");

console.log(clockbox.fetch("14:00 1/26/2015")); // "data!"
```


## API

### new ClockBox(start, end)

```js
c = new ClockBox("1/25/2015", "1/31/2015");
```


### c.store(date, data)

The `date` here (and for `#fetch`, etc.) can be a Date instance or a string
which Date can parse.

```
var datestring = "1/26/2015 14:00";

c.store(datestring, "data!");
```


### c.fetch(date)

```
c.fetch(datestring); // => "data!"
```


### c.fetchDay(date)

This will return an Array-like object (the keys are Numbers) containing only
the hours which hold data.

```
c.fetchDay(datestring)[14]; // => "data!"
```


### c.clear(date, data)

This is the same as doing `c.store(datestring, null)`.

```
c.clear(datestring);
c.fetch(datestring); // => null
```
