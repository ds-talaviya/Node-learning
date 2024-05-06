const fs = require("fs");
const fileName = "./target.txt"

fs.readFile(fileName, 'UTF-8', (err, data) => {
    console.log("data", data)
})