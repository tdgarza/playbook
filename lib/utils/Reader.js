const fs = require("fs");


class Reader{
    static readJsonFile (path){

const rawdata = fs.readFileSync(path);
const explorers = JSON.parse(rawdata);

}
}
module.exports=Reader

console.log("Leyendo")
 