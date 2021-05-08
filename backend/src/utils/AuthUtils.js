const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const { returnError, throwError } = require('./Common');
const crypto = require('crypto');
const { ENCRYPTION_KEY, ENCRYPTION_ALGORITHM } = require("../config/credentials");
const privateKey = fs.readFileSync(path.join(__dirname, '../private/private.key'), 'utf8');
const publicKey = fs.readFileSync(path.join(__dirname, '../private/public.key'), 'utf8');

module.exports = {

  encrypt: (str) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
    const encrypted = Buffer.concat([cipher.update(str), cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
  },

  decrypt: (cipherText) => {
    const textParts = cipherText.split(":");
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
    const decrpyted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return decrpyted.toString();
  },
  
  generateJWT: (id, email, role) => {
    let options = { 
      expiresIn: '3h',
      issuer: "Books",
      subject: id.toString(), 
      algorithm: "RS256" 
    };
    return new Promise((resolve, reject) => {
      jwt.sign({ id, email, role }, 
        privateKey, options, function(err, token) {
        if (err) reject(new Error("Token Creation Failed"));
        resolve(token);
      });
    });
  },

  verifyJWT: (token) => {
    return new Promise((resolve, reject) => {
      let options = { 
        issuer: "Books",
        algorithm: ["RS256"] 
      };
      jwt.verify(token, publicKey, options, (err, decode) => {
        if (err) {
          if (err.name == 'TokenExpiredError') reject(returnError(406, "Token Expired"));
          if (err.name == 'JsonWebTokenError') reject(returnError(406, "Token Malformed"));
          if (err.name == 'NotBeforeError') reject(returnError(400, "Token Inactive"));
        }
        resolve(decode);
      });
    });
  },

  verifyBT: (token) => {
    if (token === bearerToken) {
      return { role: "tester" };
    }
    else throwError(406, "Token Malformed");
  },
}