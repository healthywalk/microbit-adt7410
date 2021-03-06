/**
 * The ADT7410 block provides current temterature
 */
//% weight=90 color=#1eb0f0 icon="\uf2c8"
namespace ADT7410 {
    /**
     * measure Temperature with ADT7410
     */
    //% blockId=TemperaturewithADT7410I2C
    //% block="current temperature I2C=$i2caddress"
    //% i2caddress.min=72 i2caddress.max=75 i2caddress.defl=72
    export function measureTemperatureI2C(i2caddress: number): number {
        let rawdata = 0
        let temperature = 0
        rawdata = pins.i2cReadNumber(i2caddress, NumberFormat.UInt16BE, false)
        rawdata = Math.trunc(rawdata / 8)
        if (4095 < rawdata) {
            rawdata = rawdata - 8192
        }
        temperature = rawdata / 16
        return temperature
    }
    /**
     * measure Temperature with ADT7410 (I2C Address=72)
     */
    //% blockId=TemperaturewithADT7410
    //% block="current temperature"
    export function measureTemperature(): number {
        return measureTemperatureI2C(72)
    }

}
