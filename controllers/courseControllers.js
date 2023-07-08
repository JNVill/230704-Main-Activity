const Course = require('../models/Course');


/*
    Check if the courseId is already exists
    Steps:
        - use mongoose 'find' method to find duplicate courseCodes
        - use the 'then' method to send a response back to the frontend application bassed on the result
*/

module.exports.checkCourseIDexists = (reqBody) => {
    //the result is sent back to the frontend via the 'then' method found in the route file
    return Course.find({courseID : reqBody.courseID})
            .then(result => {
                // the find method returns a record if a match is found
                if(result) {
                    return true;
                    // no duplication courseId found
                    // the course is not yet registered in the database
                } else {
                    return false;
                }
            })
}

