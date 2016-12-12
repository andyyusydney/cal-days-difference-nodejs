const calDays = require('./calDays');
const readline = require('readline');

const encoding = 'utf-8';
var firstDateStr = '',
	secondDateStr = '',
	lineNumber = 0;
	
// check if dates passed in as params
firstDateStr = new Buffer(process.argv[2] || '', encoding);
secondDateStr = new Buffer(process.argv[3] || '', encoding);
//console.log('Passed params first Date=%s, second Date=%s', firstDateStr, secondDateStr);

if (firstDateStr.length > 0 && secondDateStr.length > 0) {
  console.log(calDays(firstDateStr, secondDateStr));
  process.exit();
} else if (firstDateStr.length > 0) {
  lineNumber = 1;
  readLine(firstDateStr);
}

// read dates input
process.stdin.setEncoding(encoding);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', readLine);
rl.setPrompt('Please enter the first date:\r\n');
rl.prompt();

function readLine (line) {
	if (lineNumber === 0) {
		firstDateStr = new Buffer(line || '', encoding);
		rl.on('line', readLine);
		rl.setPrompt('Please enter the second date:\r\n');
		rl.prompt();
	} else if (lineNumber === 2) {
		secondDateStr = new Buffer(line || '', encoding);
		
		//console.log('firstDateStr=%s, secondDateStr=%s', firstDateStr, secondDateStr);
		console.log(calDays(firstDateStr, secondDateStr));
		process.exit();
	}

	lineNumber += 1;
}

//console.log(calDays('06/02/1983', '06/22/1983')); // test

// exit
process.on("SIGINT", function () {
  process.exit();
});