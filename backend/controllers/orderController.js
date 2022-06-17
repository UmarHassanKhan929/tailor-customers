const Order = require("../models/orderModel")

const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const ErrorHandler = require('../utils/ErrorHandler')

//get all orders details
exports.allOrders = catchAsyncErrors(async(req,res)=>{
    const orders = await Order.find({orderStatus:req.query.orderStatus}).populate(
        "customer"
    )
    res.status(200).json({
        success:true,
        orders,
    })
})

//add new order
exports.newOrder = catchAsyncErrors(async(req,res)=>{

    const order = await Order.create(req.body)

    order.populate(
        "customer"
    )

    res.status(200).json({
        success:true,
        order,
    })
})

//get single order detail
exports.getOrder = catchAsyncErrors(async(req,res,next)=>{

    const order = await Order.findById(req.params.id).populate(
        "customer"
    )
    
    if(!order){
        return next(new ErrorHandler("order not found", 404));
    }

    res.status(200).json({
        success:true,
        order,
    })
})

//update customer detail
exports.updateOrder = catchAsyncErrors(async(req,res,next)=>{

    const newOrderData={
        orderStatus:req.body.orderStatus
    }

    const order = await Order.findByIdAndUpdate(req.params.id,newOrderData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    if(!order){
        return next(new ErrorHandler("order not found", 404));
    }
    
    res.status(200).json({
        success:true,
        order
    })
})

//delete customer
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "customer"
    )

    if(!order){
        return next(new ErrorHandler("order not found", 404));
    }
    
    await order.remove();

    res.status(200).json({
        success: true,
        message:"order removed"
    });
})
