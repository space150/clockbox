# clockbox

A JavaScript time-based data store.


## Example

```js
var ClockBox = require('clockbox'),
    d = new Date('1/26/2015'),
    clockbox = new ClockBox('1/25/2015', '1/31/2015')

d.setHours(14);
clockbox.store(d, 'data!');
console.log(clockbox.fetch('14:00 1/26/2015')); // 'data!'
```
