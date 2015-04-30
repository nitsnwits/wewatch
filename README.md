WeWatch
========

CMPE 280 Semester project - WeWatch using Node.js

Visit [Website](http://wewatch-nitsnwits.rhcloud.com)

To install dependencies, run the following command in project directory:
- `npm install`

To start the server, use server script in the following way:
- `./bin/server server.js start` : Start the server
- `./bin/server server.js stop`  : Stops the server
- `./bin/server server.js list`  : Lists running servers

The following log files will be generated by the server:
```
-rw-r--r--   1 nsharm002c  1258410764    56 Dec  7 00:45 wewatch.log
```

To view the error log visit `localhost:3000/errors` in your browser.

To view the cpu statistics visit `localhost:3000/cpu` in your browser.

To start a call, sign up and click on `Start Video Chat button`


### ReadMe for Videochat server

To install dependencies, run the following command in project directory:
- `npm install`

To run the server, run:
- `node app.js`
