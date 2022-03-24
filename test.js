const fs = require('fs');

export function test() {
    console.log("called the function");
    fs.readFileSync("swag", function() {
        console.log("Cool guy")
      });
}
