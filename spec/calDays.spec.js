const calDays = require('../app/calDays');

describe("Function: daysBetween", function() {
    it("returns days difference", function() {
		expect(calDays('02/06/1983', '22/06/1983')).toBe('\r\n19 days');
		expect(calDays('04/07/1984', '25/12/1984')).toBe('\r\n173 days');
		expect(calDays('03/01/1989', '03/08/1983')).toBe('\r\n1979 days');
    });
});