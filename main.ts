let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 5) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.ringTone(349)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.stopAllSounds()
    }
})
