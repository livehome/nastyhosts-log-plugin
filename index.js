const fs = require("fs");

const log_send =
module.exports = function(config) {
  return {
    middleware: function(req, res, next) {
      const res_send = res.send.bind(res);
      res.send = function(data) {
        res_send.call(this, data);
        fs.stat("log.txt", function(err, stats) {
          if(err || stats.size < 20*1024*1024) {
            const log = JSON.stringify({
              timestamp: Date.now(),
              data
            });
            fs.appendFile("log.txt", log+"\n");
          }
        });
      };
      next();
    }
  };
};
