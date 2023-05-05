basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.forever(function () {
    led.unplot(1, 1)
    basic.pause(1000)
    led.plot(1, 1)
    basic.pause(1000)
})
