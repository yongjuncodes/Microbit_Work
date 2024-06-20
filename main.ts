radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
let v = 0
radio.setGroup(1)
basic.forever(function () {
    if (v == 1) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
    } else if (v == 2) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 50)
    } else if (v == 3) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Left, 50)
    } else if (v == 4) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Right, 50)
    } else if (v == 0) {
        TPBot.stopCar()
    }
})
