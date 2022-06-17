const express = require("express");
const {newOrder,allOrders,getOrder,updateOrder,deleteOrder} = require('../controllers/orderController')

const router = express.Router();

router.route("/orders").get(allOrders);
router.route("/order/new").post(newOrder);

router.route("/order/:id").get(getOrder).put(updateOrder).delete(deleteOrder);

module.exports = router;
