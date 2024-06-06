controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player2.hasLife()) {
        Laser_2 = sprites.createProjectileFromSprite(img`
            . . . . . 
            . 8 . 8 . 
            . 8 . 8 . 
            . 8 . 8 . 
            . 8 . 8 . 
            . 8 . 8 . 
            . . . . . 
            `, Player_2, 0, -100)
    }
})
info.player4.onLifeZero(function () {
    game.setDialogTextColor(7)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(Player_1) && (!(Laser_2) && !(Player_3))) {
        game.showLongText("Player 4 wins!", DialogLayout.Bottom)
        game.gameOver(true)
    } else {
        game.showLongText("Player 4 is out!", DialogLayout.Bottom)
        sprites.destroy(Player_4, effects.fire, 500)
    }
})
info.player3.onLifeZero(function () {
    game.setDialogTextColor(5)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(Player_1) && (!(Player_2) && !(Player_4))) {
        game.showLongText("Player 3 wins!", DialogLayout.Bottom)
        game.gameOver(true)
    } else {
        game.showLongText("Player 3 is out!", DialogLayout.Bottom)
        sprites.destroy(Player_3, effects.fire, 500)
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player4.hasLife()) {
        Laser_4 = sprites.createProjectileFromSprite(img`
            . . . . . 
            . 7 . 7 . 
            . 7 . 7 . 
            . 7 . 7 . 
            . 7 . 7 . 
            . 7 . 7 . 
            . . . . . 
            `, Player_4, 0, -100)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player1.hasLife()) {
        Laser_1 = sprites.createProjectileFromSprite(img`
            . . . . . 
            . 2 . 2 . 
            . 2 . 2 . 
            . 2 . 2 . 
            . 2 . 2 . 
            . 2 . 2 . 
            . . . . . 
            `, Player_1, 0, -100)
    }
})
info.player1.onLifeZero(function () {
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(Player_2) && (!(Player_3) && !(Player_4))) {
        game.showLongText("Player 1 wins!", DialogLayout.Bottom)
        game.gameOver(true)
    } else {
        game.showLongText("Player 1 is out!", DialogLayout.Bottom)
        sprites.destroy(Player_1, effects.fire, 500)
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player3.hasLife()) {
        Laser_3 = sprites.createProjectileFromSprite(img`
            . . . . . 
            . 5 . 5 . 
            . 5 . 5 . 
            . 5 . 5 . 
            . 5 . 5 . 
            . 5 . 5 . 
            . . . . . 
            `, Player_3, 0, -100)
    }
})
info.player2.onLifeZero(function () {
    game.setDialogTextColor(8)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(Player_1) && (!(Player_3) && !(Player_4))) {
        game.showLongText("Player 2 wins!", DialogLayout.Bottom)
        game.gameOver(true)
    } else {
        game.showLongText("Player 2 is out!", DialogLayout.Bottom)
        sprites.destroy(Player_2, effects.fire, 500)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == Laser_1) {
        info.player1.changeScoreBy(1)
    } else if (sprite == Laser_2) {
        info.player2.changeScoreBy(1)
    } else if (sprite == Laser_3) {
        info.player3.changeScoreBy(1)
    } else {
        info.player4.changeScoreBy(1)
    }
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == Player_1) {
        info.player1.changeLifeBy(-1)
        scene.cameraShake(8, 500)
    } else if (sprite == Player_2) {
        info.player2.changeLifeBy(-1)
        scene.cameraShake(8, 500)
    } else if (sprite == Player_3) {
        info.player3.changeLifeBy(-1)
        scene.cameraShake(8, 500)
    } else {
        info.player4.changeLifeBy(-1)
        scene.cameraShake(8, 500)
    }
    sprites.destroy(otherSprite, effects.fire, 500)
})
let Asteroid: Sprite = null
let Laser_3: Sprite = null
let Laser_1: Sprite = null
let Laser_4: Sprite = null
let Laser_2: Sprite = null
let Player_4: Sprite = null
let Player_3: Sprite = null
let Player_2: Sprite = null
let Player_1: Sprite = null
effects.starField.startScreenEffect()
Player_1 = sprites.create(img`
    . . . . . . 4 4 . . . . . . 
    . . . . . 4 2 2 4 . . . . . 
    . . . . 4 2 2 2 2 4 . . . . 
    . . . . 2 2 6 a 2 2 . . . . 
    . . . . 2 6 c c a 2 . . . . 
    . . . . 2 2 c c 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . 
    . . . 5 4 2 2 2 2 4 5 . . . 
    . . 5 4 f 2 2 2 2 f 4 5 . . 
    . . 5 f f 2 2 2 2 f f 5 . . 
    . 5 4 f f 2 2 2 2 f f 4 5 . 
    . 5 f f f 2 2 2 2 f f f 5 . 
    5 4 f f f 2 2 2 2 f f f 4 5 
    5 4 f . f f f f f f . f 4 5 
    4 . . . . a a a a . . . . 4 
    . . . . . 8 9 9 8 . . . . . 
    . . . . 8 . 8 8 . 8 . . . . 
    . . . 8 . 9 8 9 9 . 8 . . . 
    . . . . . . . 8 . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(Player_1, 100, 100)
Player_1.setStayInScreen(true)
info.player1.setLife(3)
info.player1.setScore(0)
Player_2 = sprites.create(img`
    . . . . . . 9 9 . . . . . . 
    . . . . . 9 8 8 9 . . . . . 
    . . . . 9 8 8 8 8 9 . . . . 
    . . . . 8 8 6 a 8 8 . . . . 
    . . . . 8 6 c c a 8 . . . . 
    . . . . 8 8 c c 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 . . . 
    . . . 9 6 8 8 8 8 a 9 . . . 
    . . 9 6 f 8 8 8 8 f a 9 . . 
    . . 9 f f 8 8 8 8 f f 9 . . 
    . 9 6 f f 8 8 8 8 f f a 9 . 
    . 9 f f f 8 8 8 8 f f f 9 . 
    9 6 f f f 8 8 8 8 f f f a 9 
    9 6 f . f f f f f f . f a 9 
    d . . . . a a a a . . . . 9 
    . . . . . 4 5 5 4 . . . . . 
    . . . . 4 . 4 4 . 4 . . . . 
    . . . 4 . 5 4 5 5 . 4 . . . 
    . . . . . . . 4 . . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(Player_2, 100, 100)
Player_2.setStayInScreen(true)
info.player2.setLife(3)
info.player2.setScore(0)
Player_3 = sprites.create(img`
    . . . . . . 4 4 . . . . . . 
    . . . . . 4 5 5 4 . . . . . 
    . . . . 4 5 5 5 5 4 . . . . 
    . . . . 5 5 6 a 5 5 . . . . 
    . . . . 5 6 c c a 5 . . . . 
    . . . . 5 5 c c 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . 
    . . . 2 4 5 5 5 5 4 2 . . . 
    . . 2 4 f 5 5 5 5 f 4 2 . . 
    . . 2 f f 5 5 5 5 f f 2 . . 
    . 2 4 f f 5 5 5 5 f f 4 2 . 
    . 2 f f f 5 5 5 5 f f f 2 . 
    2 4 f f f 5 5 5 5 f f f 4 2 
    2 4 f . f f f f f f . f 4 2 
    4 . . . . a a a a . . . . 4 
    . . . . . 8 9 9 8 . . . . . 
    . . . . 8 . 8 8 . 8 . . . . 
    . . . 8 . 9 8 9 9 . 8 . . . 
    . . . . . . . 8 . . . . . . 
    `, SpriteKind.Player)
controller.player3.moveSprite(Player_3, 100, 100)
Player_3.setStayInScreen(true)
info.player3.setLife(3)
info.player3.setScore(0)
Player_4 = sprites.create(img`
    . . . . . . 9 9 . . . . . . 
    . . . . . 9 7 7 9 . . . . . 
    . . . . 9 7 7 7 7 9 . . . . 
    . . . . 7 7 6 a 7 7 . . . . 
    . . . . 7 6 c c a 7 . . . . 
    . . . . 7 7 c c 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . 
    . . . 3 6 7 7 7 7 6 3 . . . 
    . . 3 6 f 7 7 7 7 f 6 3 . . 
    . . 3 f f 7 7 7 7 f f 3 . . 
    . 3 6 f f 7 7 7 7 f f 6 3 . 
    . 3 f f f 7 7 7 7 f f f 3 . 
    3 6 f f f 7 7 7 7 f f f 6 3 
    3 6 f . f f f f f f . f 6 3 
    6 . . . . a a a a . . . . 6 
    . . . . . 4 5 5 4 . . . . . 
    . . . . 4 . 4 4 . 4 . . . . 
    . . . 4 . 5 4 5 5 . 4 . . . 
    . . . . . . . 4 . . . . . . 
    `, SpriteKind.Player)
controller.player4.moveSprite(Player_4, 100, 100)
Player_4.setStayInScreen(true)
info.player4.setLife(3)
info.player4.setScore(0)
game.onUpdateInterval(500, function () {
    Asteroid = sprites.create(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, SpriteKind.Enemy)
    Asteroid.setVelocity(0, 50)
    Asteroid.setPosition(randint(0, 160), 0)
})
