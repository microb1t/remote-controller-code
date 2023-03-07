input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    car_set_speed = Math.constrain(car_set_speed - 10, 10, 100)
    basic.showNumber(car_set_speed)
    basic.showIcon(IconNames.Yes)
})
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    radio.sendValue("y", car_set_speed)
})
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    radio.sendValue("x", car_set_speed)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    car_set_speed = Math.constrain(car_set_speed + 10, 10, 100)
    basic.showNumber(car_set_speed)
    basic.showIcon(IconNames.Yes)
})
let car_set_speed = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
car_set_speed = 50
basic.forever(function () {
	
})
