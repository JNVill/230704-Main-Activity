const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	courseID : {
		type : String,
		required : [true, "Course ID is required"]
	},
	courseName : {
		type : String,
		required : [true, "Course name is required"]
	}
})

module.exports = mongoose.model("User", userSchema);