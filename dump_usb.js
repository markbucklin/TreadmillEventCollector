
var portname = process.argv[2];
var filename = process.argv[3];
const SerialPort = require('serialport');
const fs = require('fs');


var port = new SerialPort(portname, {
  baudRate: 115200
});

var stream = fs.createWriteStream(filename);

port.on("open", function () {
  console.log('open');
  port.on('data', function (data) {
    stream.write(data);
    console.log(stream.bytesWritten);
  });
});