radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
radio.onReceivedString(function (receivedString) {
    msg = receivedString
})
let msg = ""
let v = 0
basic.showString("R")
radio.setGroup(1)
basic.forever(function () {
    if (msg == "F") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
    } else if (msg == "B") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 50)
    } else if (msg == "L") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Left, 50)
    } else if (msg == "R") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Right, 50)
    } else {
        TPBot.stopCar()
    }
})
