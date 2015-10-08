var videoModel = require('../models/videos.js')

module.exports = {

	createPost : function(req, res){
		var post = new videoModel.VideoPost(req.body)
		res.send(videoModel.allPosts)
	},

	getPosts : function(req, res){
		res.send(videoModel.allPosts)
	}
}