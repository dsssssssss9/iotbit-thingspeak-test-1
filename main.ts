basic.showIcon(IconNames.SmallHeart)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("XHsc40000", "ncc1701a")
if (ESP8266_IoT.wifiState(false)) {
    basic.showIcon(IconNames.No)
} else {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "RL9M1HNE38H8OIOJ",
    1,
    2,
    3,
    4,
    5,
    6,
    7
    )
    ESP8266_IoT.uploadData()
    basic.pause(1000000)
})
