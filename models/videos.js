var allPosts = []

var VideoPost = function(postData){

	this.name = postData.name
	this.url = postData.url
	this.title = postData.title
	this.desc = postData.desc
	allPosts.push(this)
}

module.exports = {

	allPosts : allPosts,
	VideoPost : VideoPost
}

