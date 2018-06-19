var bcrypt=require("bcrypt-nodejs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;

var weaponSchema = mongoose.Schema({
    description:{type:String,required:true},
    force:{type:Number,required:true},
    category:{type:String,required:true},
    ammo:{type:Boolean},    
});

var donothing= ()=>{
    
}
weaponSchema.pre("save",function(done){
    var weapon = this;
    if(!weapon.isModified("description")){
        return done();

    };
});

var Weapon = mongoose.model("Weapon",weaponSchema);
module.exports = Weapon;