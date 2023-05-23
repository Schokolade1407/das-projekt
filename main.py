Start: game.LedSprite = None

def on_button_a():
    Start.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    Start.change(LedSpriteProperty.Y, 1)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    global Start
    game.set_score(0)
    basic.clear_screen()
    if not (game.is_running()):
        Start = game.create_sprite(2, 2)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # # . # #
                        # # . # #
        """)
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    pass
input.on_button_event(Button.B, input.button_event_click(), on_button_b)
