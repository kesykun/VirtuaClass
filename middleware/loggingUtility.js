const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const assert = require('assert');

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const padString = (argString, defaultEmptySpaceLength) => {
    const argStringLength = argString.length;
    assert(argStringLength < defaultEmptySpaceLength, 'defaultEmptySpaceLength must be greater than argString length.');
    let padLength = defaultEmptySpaceLength - argStringLength;
    for (let i=0; i<padLength; i++) {
        argString += ' ';
    }
    return argString;
}

const handleFormatString = (argString, defaultPadSpaceLength) => {
    let separatedArgString = argString.split('&');
    let separatedArgStringLength = separatedArgString.length;
    let result = '';
    for (let i=0; i<separatedArgStringLength; i++) {
        result += padString(separatedArgString[i], defaultPadSpaceLength);
    }
    return result;
}


const handleLogEvent = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);

    try {
        const logDir = 'logs';
        const logDirPath = path.join(__dirname, '..', logDir);
        if (!fs.existsSync(logDirPath)) {
            await fsPromises.mkdir(logDirPath, (err) => {
                if (err) throw err;
                console.log(`"${logDir}" directory created...`);
            });
        }
        const logFilePath = path.join(logDirPath, 'eventsLog.txt');
        await fsPromises.appendFile(logFilePath, `${logItem}\n`);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    handleFormatString,
    handleLogEvent
};