const express = require('express')
const infoRoute = express.Router()


let infoModel = require('../models/info')

//Get all Info
infoRoute.route('/').get((req, res, next) =>{
    infoModel.find((error, data) =>{
        if(error){
            return next(error)
        }else {
            res.json(data)
        }
    })    
})

//Create Info
infoRoute.route('/create-info').post((req, res, next) => {
    infoModel.create(req.body, (error, data) =>{
        if(error){
            return next(error)
        }else {
            res.json(data)
        }
    })
})

//Edit Info
infoRoute.route('/edit-info/:id').get((req, res, next) => {
    infoModel.findById(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else {
            res.json(data)
        }
    })
})

//Update Info
infoRoute.route('/update-info/:id').put((req, res, next) => {
    infoModel.findByIdAndUpdate(req.params.id,{
        $set: req.body
    }, (error, data) => {
        if(error){
            return next(error)
        }else {
            res.json(data)
            console.log('successfully updated')
        }
    })
})

//Detele Info
infoRoute.route('/delete-info/:id').delete((req, res , next) => {
    infoModel.findByIdAndDelete(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = infoRoute