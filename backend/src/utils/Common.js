// common functions
module.exports = {
  capitalize: (str) => {
    return str[0].toUpperCase() + str.slice(1);
  },

  lowercase: (str) => {
    return str.toLowerCase();
  },

  capitalizeEachWord: (str) => {
    let words = str.trim().split(" ");
    words.forEach((word, index)=> {
      words[index] = word[0].toUpperCase() + word.slice(1);
    });
    return words.join(' ');
  },

  validateRequiredFields: (data, requiredFields) => {
    let requiredData = [];
    for (let [key, value] of Object.entries(requiredFields)) {
      if (!data[key]) {
        requiredData.push({
          key: key,
          msg: `${value} is required`
        });
      }
    }
    return requiredData;
  },

  returnError: (statusCode, errorMessage) => {
    let error = new Error(errorMessage);
    error.statusCode = statusCode ? statusCode : 400;
    return error;
  },
  
  throwError: (statusCode, errorMessage, data = null) => {
    let error = new Error(errorMessage);
    error.statusCode = statusCode ? statusCode : 400;
    if (data) error.data = data;
    throw error;
  },
}
