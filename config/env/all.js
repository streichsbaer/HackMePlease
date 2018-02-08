// default app configuration
module.exports = {
    port: process.env.PORT || 4000,
    db:  process.env.MONGOLAB_URI || process.env.MONGODB_URI || "mongodb://hackmeplease:hackmeplease@ds127888.mlab.com:27888/hackmeplease",
    cookieSecret: "123123123123123la;sdk;asmdas;ld",
    cryptoKey: "lasd;asdm3lkmamsdamsdaksd;lasm;d",
    cryptoAlgo: "aes256",
    hostName: "localhost"
};
