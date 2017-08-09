

//var app=require("./config/config.js").dep();
//var port=require("./config/config.js").port1();
var request = require('request');
var express = require('express');
var router = express.Router();
// gets the list of all the invoice that are having status  closed and opened


router.get('/invoicelist/:cid', function(req, res) {
  var cid = req.params.cid;
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/sale/invoice/item?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {


            res.status(response.statusCode).send(body);
        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
//all contacts in a perticular company
router.get('/single/invoice/:cid/:id', function(req, res) {
    var cid = req.params.cid;
    var id = req.params.id;
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'


    },
     url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Sale/Invoice/Item/"+id+"?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {

            res.status(response.statusCode).send(body);

        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})


router.post('/invoice/new/:cid', function(req, res) {
    var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    console.log("Request body: "+requestBody);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Sale/Invoice/Item?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 201) {

            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
router.put('/invoice/update/:cid/:id', function(req, res) {
      var id = req.params.id;
     var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    console.log("Request body: "+requestBody);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://13.126.47.35:8080/AccountRight/"+cid+"/Sale/invoice/Item/"+id+"/?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {

            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
router.delete('/invoice/delete/:cid/:id', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    console.log("Request param id: "+id);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
      url:"http://13.126.47.35:8080/AccountRight/"+cid+"/Sale/invoice/Item/"+id+"/?format=json"
    }
    request.delete(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {

            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})



//app.listen(3000)
module.exports=router;