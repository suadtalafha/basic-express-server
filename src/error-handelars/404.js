'use strict';

module.exports=(req,res,next)=>{
    const error={
        status:404,
        message:'Not found'
    }
    res.status(404).json(error);
}