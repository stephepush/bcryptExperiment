const bcrypt = require('bcryptjs');

async function hashesString(userInput) {
    const password = userInput
    const saltRounds = 15;

    const userInputHashed = await bcrypt.hash(password, saltRounds)
    return userInputHashed;

}

async function passwordCheck(bcryptHash, userInput) {
    const hash = bcryptHash
    const text = userInput

    const compareInput = await bcrypt.compare(text, hash)
    return compareInput;
}

module.exports.hashesString = hashesString
module.exports.passwordCheck = passwordCheck