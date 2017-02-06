let express = require("express");

let app = express();
 
var thorio = require("thor-io.vnext").ThorIO;
var controllers = require("./controllers/Temperature.Controller.js");

var thorIO = new thorio.Engine(
    [
   controllers.MicroServiceController
    ]
); 

var expressWs = require("express-ws")(app);

app.use("/", express.static("app"));
app.use("/lib", express.static("node_modules")); 


thorIO.addEndpoint(thorio.BufferMessageTransport,"127.0.0.1",4503);

app.ws("/", function (ws, req) {    
       thorIO.addWebSocket(ws,req);
});

var port = process.env.PORT || 1337;
app.listen(port);