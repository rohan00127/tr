const express = require("express");
const mongo = require("mongoose");

const productchema = mongo.Schema({

    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    discountPercentage :{
        type : Number,
        required : true
    },
    stock :{
        type : Number,
        required : true
    },
    brand :{
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    thumbnail : {
        type : String,
        required : true
    },
    images : {
        type : String,
        required : true
    }
    




});

const productmodel = new mongo.model("Productslist" , productchema);

module.exports = productmodel;




