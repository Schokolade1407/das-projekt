let Start: game.LedSprite = null
/**
 * Bewegender hintergrund
 */
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Start.change(LedSpriteProperty.Y, -1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    game.setScore(0)
    basic.clearScreen()
    if (!(game.isRunning())) {
        Start = game.createSprite(2, 2)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Start.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (Start) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # # # # #
                # . . . #
                . . # . .
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # # # # #
                # . . . .
                . . # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # . . . #
                . . # . .
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                # # # # #
                # # # # #
                `)
        }
    }
})
