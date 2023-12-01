const input = require('fs').readFileSync('calibration-input.txt', 'utf-8').split(/\r?\n/);

const toCharArray = (line) => [...line]
const getFirstAndLastNumber = (line) => `${line.find(isNumber)}${line.findLast(isNumber)}`
const isNumber = (char) => char >= '0' && char <= '9'

const answer = input
                .map(toCharArray)
                .map(getFirstAndLastNumber)
                .reduce((acc, val) => acc + Number(val), 0);