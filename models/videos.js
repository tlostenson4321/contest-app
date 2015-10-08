var allPosts = []

var VideoPost = function(name, url, title, desc.){

	this.name = name
	this.url = url
	this.title = title
	this.desc = desc
	allPosts.push(this)
}

module.exports = {

	allPosts : allPosts
	VideoPost : VideoPost
}