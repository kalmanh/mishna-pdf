var path = require("path");
var fs = require("fs");
var moment = require("moment");
var mishnah = require("mishnah");
var pdfGenerator = require("./pdfGenerator");

// loading the data
var scheduleJson = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "schedule.json")));
if(scheduleJson.start){
  scheduleJson.start = moment(scheduleJson.start.split(",").map(str => parseInt(str, 10)));
}

var schedule = mishnah.buildCalendar(scheduleJson);
pdfGenerator.generatePdf(schedule, "mishna_schedule.pdf");