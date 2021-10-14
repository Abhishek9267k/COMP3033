const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {

    var num1 = req.query.x;                                         // storing temeperaory value of variable x
    var num2 = req.query.y;                                         // storing temeperaory value of variable y
    var h = parseInt(num1);                                     // parsing value of h in variable h
    var j = parseInt(num2);                                     // parsing value of h in variable j
    var method = req.query.method;                                 // parameter to request the type of method
    var result;                                                      // temporary variable to store result

    if(req.query.method == 'add'){ //addition function
        result = h+j;
    }
    else if(req.query.method == 'multiply'){ //multiply function
        result = h*j;
    }
    else if(req.query.method == 'subtract'){ //subtraction function
        result = h-j;
    }
    else if(req.query.method == 'divide'){ //division function
        result = h/j;
    }
    else { // not any method
        result = "Error, Please enter a proper method";
    }
    res.json({
        "x" : h,
        "y" : j,
        "operation" : method,
        "result" : result

        
    });
});
////routers
module.exports = router;
