const db = require('../config/db.cus');

exports.getAllCustomers = function (req, res) {
    const customers = db.getCustomers().then(results=>{
    console.log(results);
    res.status(200).json({
    data: results.recordsets[0]
    }); // send all the data
    });
}

exports.getCustomerById = function( req, res){
    const {id} = req.params; // get id
    res.status(200).json({
    status: 'no implemented'
    });
}

exports.createNewCustomer = function( req, res){ // must select the body to beraw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get (attribute)
    res.status(200).json({
    status: 'no implemented'
    });
}

exports.patchCustomerById = function( req, res){ // must select the body to beraw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id (attribute)
    res.status(200).json({
    status: 'no implemented'
    });
}

exports.deleteCustomerById = function( req, res){ // must select the body to beraw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id
    res.status(200).json({
    status: 'no implemented'
    });
}