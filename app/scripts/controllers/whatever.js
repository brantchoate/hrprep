var Converter=require("csvtojson").core.Converter;
var csvConverter=new Converter({constructResult:false}); // The parameter false will turn off final result construction. It can avoid huge memory consumption while parsing. The trade off is final result will not be populated to end_parsed event.

var readStream=require("fs").createReadStream("crunchbase-data-basic.csv");

var writeStream=require("fs").createWriteStream("outpuData.json");

readStream.pipe(csvConverter).pipe(writeStream);