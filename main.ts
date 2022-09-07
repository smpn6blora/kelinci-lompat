controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    kelinci.vy = -200
    music.pewPew.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let kelinci: Sprite = null
scene.setBackgroundColor(13)
kelinci = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 3 1 1 . . . . . 3 1 . . . . 
    . . 3 3 1 . . . . 3 3 1 . . . . 
    . . . 3 1 1 . . . 3 1 . . . . . 
    . . . 3 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 f 1 1 f 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 f f f f 1 . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . 1 . . . 1 1 . . . 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 . . 1 . . . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    `, SpriteKind.Player)
kelinci.setPosition(10, 80)
game.onUpdate(function () {
    if (kelinci.y < 80) {
        kelinci.ay = 300
    } else {
        kelinci.ay = 0
        kelinci.vy = 0
    }
})
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......beeeeeeeeeeb......
        .......beeeeeeeeb.......
        ........beeeeeeb........
        `, -100, 0)
    projectile.y = 80
    info.changeScoreBy(10)
})
forever(function () {
    kelinci.setImage(img`
        . . . 3 . . . . . . . 1 1 . . . 
        . . . 3 1 1 . . . . 1 1 1 . . . 
        . . . 3 3 1 . . . 1 1 1 3 . . . 
        . . . . . 1 1 . . 1 1 3 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f f f 1 . . 1 . . . 
        . . . . . . 1 1 1 . . . 1 . . . 
        . . . . . . . 1 . . . 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . 1 1 1 . 1 1 . . . . . . 
        . . . . 1 . . . . 1 1 . . . . . 
        `)
    pause(100)
    kelinci.setImage(img`
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . 3 1 1 . . . . . . . 
        . . . . . . 3 1 1 . . . . 3 1 . 
        . . . . . . 3 1 1 . . . 3 1 1 . 
        . . . . . . . 1 1 . . . 3 1 . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . . . 1 f 1 1 f . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 f f f . . . . 
        . . . . . . . . 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 1 1 1 1 . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . 1 1 . . . . 1 . . . . . . 
        `)
    pause(100)
    kelinci.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 3 1 f 1 f 1 3 3 1 . . . 
        . . 1 3 . 1 1 1 1 1 . 3 1 . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . 1 1 . 1 . 1 1 . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . . . . . . . 1 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
})
