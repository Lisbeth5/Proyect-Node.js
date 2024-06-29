const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex") 

console.log(secret) //25fcba18398fe8d9360e6e805f74e7a16cc0eed2b7d531bbfcdf8c9a1b0dede1