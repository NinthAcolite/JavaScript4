const { logString } = require('3.js');

describe('logString', () => {
    let consoleOutput = [];
    const originalLog = console.log;
    beforeEach(() => {
        console.log = (...output) => consoleOutput.push(...output);
    });
    afterEach(() => {
        console.log = originalLog;
        consoleOutput = [];
    });

    it('must show the line', () => {
        logString("Hello", "my", "world!");
        expect(consoleOutput.join(' ')).toBe("Hello my world!");
    });
});
