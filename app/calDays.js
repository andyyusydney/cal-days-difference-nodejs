// convert to UTC
function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

// correct the format
function formatDate(dateStr) {
	var dateArr = dateStr.toString().split('/');
	return dateArr[1]+'/'+dateArr[0]+'/'+dateArr[2];
}

// calcualte the days between two given dates
function daysBetween(startDate, endDate) {
    //console.log('startDate=%s, endDate=%s', startDate, endDate);
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return Math.abs((treatAsUTC(formatDate(endDate)) - treatAsUTC(formatDate(startDate))) / millisecondsPerDay) - 1;
}

function output(startDate, endDate){
	return '\r\n' + daysBetween(startDate, endDate) + ' days';
}

module.exports = output;