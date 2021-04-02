// jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true})



// first we need to create a schema for mongooes to work.
const fruitSchema = new mongoose.Schema({    
    name:{
        type:String,
        required:[true,"please check your data, no name specified."]}, // this will check if name is specified or not 
    rating:{
        type:Number,
        min:1,      // only no from 1 to 10 will be assigned.
        max:10},
    reviews:String
});


const Fruit = mongoose.model("Fruit",fruitSchema);   



const fruit=new Fruit({
    name:"apple",
    rating:7,
    review:"i donot like eating it."
});

const kiwi = new Fruit({
    name:"kiwi",
    rating:10,
    review:"best fruit"
});

const mango = new Fruit({
    name:"mango",
    rating:9,
    review:"best fruit in india"
});
const banana = new Fruit({
    name:"banana",
    rating:6,
    review:"easy to eat."
});

// creating a new collections.
const personSchema = new mongoose.Schema({    
    name:{
        type:String,
        required:[true,"please check your data, no name specified."]}, // this will check if name is specified or not 
    
    character:String
});

const Person = mongoose.model("Person",personSchema);  

const person =new Person({
    name:"ranjan",
    character:"i donot like him."
});


// this is me adding a new relation to the person class as fav fruit.
const pineapple = new Fruit({
    name:"pineapple",
    rating:6,
    review:"easy to eat."
});

const person1 =new Person({
    name:"amy",
    character:"i donot like him.",
    favrouite:pineapple
});

pineapple.save();

person.save();




// insert into db.
Fruit.insertMany([mango,banana,kiwi] , function(err){
    if(err){console.log(err);}
    else{console.log("succesfully saved all files to address.");}

});


// this will save the file each time we run the code.

//fruit.save();


// to find or loop through the fruit
Fruit.find(function(err,fruits){
    if(err){ console.log(err);}
    else{
        mongoose.connection.close(); // this is added to close the node and mongooes and no need to do ctrl+c

        fruits.forEach(function(fruit){console.log(fruit.name);}); // print the objects in sequence .
    }
});

// update an entry

Fruit.updateOne({_id:"60675a8537c4fe1aa00bf595"},{name:"peach"},function(err){
    if(err){
        console.log(err);
    }
    else{console.log("succesfully updated the document.")}

});


// delete the entry
Fruit.deleteOne({name:"peach"},function(err)
{if(err){ console.log(err);


}
else{console.log("deleted the entry succesfully");}});



// delete the entire collection.
//Person.deleteMany({name:"ranj"},function(err){
  //  if(err){console.log(err);}
    //else{console.log("the entire list has been deleted.")}
//})




