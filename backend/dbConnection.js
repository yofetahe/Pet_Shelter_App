module.exports = function(mongoose) {

    const URI = "mongodb://localhost/pet_shelter";

    mongoose.connect(URI, {useNewUrlParser: true}, 
        err => console.log("db connections", err)
    );
}