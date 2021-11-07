## microbit-ADT7410

> Open this page at [https://healthywalk.github.io/microbit-adt7410/](https://healthywalk.github.io/microbit-adt7410/)

---
This extension supports the ADT7410 I2C Temperature Sensor in micro:bit MakeCode programming.
* I2C address: 0x48..0x4b

---
## Methods

* Get temperature in degrees Celsius with default I2C address
```
ADT7410.measureTemperature()
```
  
* Get temperature in degrees Celsius by specifying an I2C address
```
ADT7410.measureTemperatureI2C()
```

---
## Examples

* default I2C address
```blocks
basic.forever(function () {
    temperature = ADT7410.measureTemperature()
    basic.showNumber(temperature)
    basic.pause(500)
})
```
```
basic.forever(function () {
    temperature = ADT7410.measureTemperature()
    basic.showNumber(temperature)
    basic.pause(500)
})
```
  
* specifying an I2C address
```blocks
basic.forever(function () {
    temperature = ADT7410.measureTemperatureI2C(72)
    basic.showNumber(temperature)
    basic.pause(500)
})
```
```
basic.forever(function () {
    temperature = ADT7410.measureTemperatureI2C(72)
    basic.showNumber(temperature)
    basic.pause(500)
})
```

---
## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/healthywalk/microbit-adt7410**  and import

---
## Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
