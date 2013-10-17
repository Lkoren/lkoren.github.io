var isDesktop = ((function() { //mobile detector logic by Alexander Prinzhorn
	return !(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
})());

/*
if (isDesktop) {
	var image = $(".content-container").css('background-image')
	if (image === undefined) {
		$(".content-container").css({'background-image': '/images/index_background_800square_flipped.jpg'})
	}
}*/

var test = function() {
	var image = $(".content-container").css('background-image')
	var image_path = ["url(", window.location.host, "/images/index_background_800square_flipped.jpg)"].join("")

	if ((!image) || image === "none") {
		$(".content-container").css({'background-image': image_path})
	}
}