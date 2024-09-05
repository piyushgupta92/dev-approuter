console.log("Hello world! ");
const cds = require('@sap/cds');
// const us = require ('unique-string');

exports = cds.service.impl(function(srv){
    console.log("I am in the anonymous function: ");
    cds.log('capb2b')('test log');
    // Register your event handlers in here, for example, ...
    this.on ('READ','Books', (...rest) => {
        console.log(us());
    })
  })