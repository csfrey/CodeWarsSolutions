let solutions = [
  require("./solutions/rangeExtraction.js"),
  require("./solutions/integerRecreationOne.js"),
  require("./solutions/greed.js"),
  require("./solutions/beeramid.js"),
];

let args = process.argv.slice(2) || [];

if (args[0] === "help") {
  getHelp();
}

if (args[0] === undefined) {
  solutions.forEach((s) => s.test());
} else {
  let s = solutions.find((s) => s.name === args[0]);
  if (!!s) {
    s.test();
  } else {
    getHelp();
  }
}

function getHelp() {
  console.log(
    "Give the name of the test you want to run. Available names are:"
  );
  solutions.forEach((s) => console.log(s.name));
  console.log("---\nLeave blank to run all solutions.");
}
