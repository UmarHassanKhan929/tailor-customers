const express = require('express')

const {newCustomer,allCustomers,getCustomer,updateCustomer,deleteCustomer} = require('../controllers/customerController')

const router = express.Router()

//get all customer route
router.route("/customers").get(allCustomers)
router.route("/customer/new").post(newCustomer)
router.route("/customer/:id").get(getCustomer).put(updateCustomer).delete(deleteCustomer);


module.exports = router;
