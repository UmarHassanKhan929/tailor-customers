const Customer = require("../models/customerModel")

const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const ErrorHandler = require('../utils/ErrorHandler')

//get all customers details
exports.allCustomers = catchAsyncErrors(async(req,res)=>{
    const customers = await Customer.find()
    res.status(200).json({
        success:true,
        customers,
    })
})

//add new customer
exports.newCustomer = catchAsyncErrors(async(req,res)=>{
    const customer = await Customer.create(req.body)

    res.status(200).json({
        success:true,
        customer,
    })
})

//get single customer detail
exports.getCustomer = catchAsyncErrors(async(req,res,next)=>{
    const customer = await Customer.findById(req.params.id)
    
    if(!customer){
        return next(new ErrorHandler("customer not found", 404));
    }

    res.status(200).json({
        success:true,
        customer,
    })
})

//update customer detail
exports.updateCustomer = catchAsyncErrors(async(req,res,next)=>{

    const newCustomerData={
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        phone:req.body.phone,
        size:{
            kurtalength:req.body.size.kurtalength,
            chest:req.body.size.chest,
            waist:req.body.size.waist,
            hips:req.body.size.hips,
            shoulders:req.body.size.shoulders,
            sleeves:req.body.size.sleeves,
            collar:req.body.size.collar,
            shalwarlength:req.body.size.shalwarlength
        }
    }

    const customer = await Customer.findByIdAndUpdate(req.params.id,newCustomerData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    if(!customer){
        return next(new ErrorHandler("customer not found", 404));
    }
    
    res.status(200).json({
        success:true,
        customer
    })
})

//delete customer
exports.deleteCustomer = catchAsyncErrors(async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);

    if(!customer){
        return next(new ErrorHandler("customer not found", 404));
    }
    
    await customer.remove();

    res.status(200).json({
        success: true,
    });
})
