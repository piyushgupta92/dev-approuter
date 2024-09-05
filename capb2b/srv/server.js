const cds = require('@sap/cds')
const express = require('express')
const app = express();
const axios = require('axios')



cds.on('bootstrap', (app)=>{
    console.log("Hello");
    app.use('/eycc', async (req, res, next) => {
        try {
          console.log("Hello from eycc");
          const response = await axios.get('http://localhost:58805/eycc2');
          res.json(response.data);
        } catch (error) {
          console.error('Error fetching external service:', error);
          res.status(500).send('Internal Server Error');
        }
      });

      app.use('/eycc2', async (req, res, next) => {
        try {
        //   console.log("Hello from eycc");
          res.json('{"data": "Hello from eycc2"}}');
        } catch (error) {
          console.error('Error fetching external service:', error);
          res.status(500).send('Internal Server Error');
        }
      });
  // add your own middleware before any by cds are added

  // for example, serve static resources incl. index.html
//   app.use(express.static(__dirname+'/srv/public'))
})