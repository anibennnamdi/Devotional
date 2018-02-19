var Ministry = require('../models/ministry')
module.exports={
    get:function(req,res,next){
        Ministry.find({},function(err,result){
            if(err) return next(err);
            res.status(200).json({status:1,message:null,data:result});
        });
//console.log(Ministry);
    },
    save:function(req,res,next){
        var ministry = new Ministry({
             minID:req.body.minID,
            minName:req.body.minName
        });
         ministry.save(function (err, response) {
            if (err) {
                res.status(400).json({status:0,message: JSON.stringify(err)});
            } else {
                res.status(201).json({
                    status: 1,
                    message: 'Category has been created successfully',
                    data: response
                });
            }
        })

    },
    delete:function(req,res,next){
        Ministry.find({}).remove().exec(function (err, result) {
            res.json({result});
        })
    },

    deleteOne:function(req,res,next){
        Ministry.findOne({_id:req.params.id}).remove().exec(function (err, result) {
            res.json({result});
        })
    }


}

