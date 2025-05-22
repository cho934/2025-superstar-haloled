radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 44) {
        tirette = 1
    }
})
input.onButtonPressed(Button.A, function () {
    Clignoter()
})
function Clignoter () {
    while (true) {
        haloDisplay.showRainbow(1, 360)
        haloDisplay.show()
        basic.pause(1000)
        haloDisplay.clear()
        haloDisplay.show()
        basic.pause(1000)
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "BLUE") {
        color = 2
    }
    if (receivedString == "YELLOW") {
        color = 1
    }
})
input.onButtonPressed(Button.B, function () {
    color = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let color = 0
let tirette = 0
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let countdetection = 0
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(100)
serial.redirectToUSB()
let enabledetection = 0
radio.setGroup(169)
radio.setFrequencyBand(64)
radio.setTransmitPower(7)
tirette = 0
color = 0
basic.forever(function () {
    while (tirette == 0) {
        if (color == 1) {
            basic.clearScreen()
            basic.showIcon(IconNames.Skull)
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Yellow))
        }
        if (color == 2) {
            basic.clearScreen()
            basic.showIcon(IconNames.Diamond)
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Blue))
        }
        if (color == 0) {
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        basic.pause(100)
    }
    basic.clearScreen()
    haloDisplay.clear()
    haloDisplay.show()
    basic.showIcon(IconNames.Angry)
    basic.pause(85000)
    tirette = 0
    color = 0
    Clignoter()
})
basic.forever(function () {
	
})
