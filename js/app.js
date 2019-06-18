function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


$(".color-1").click(function () {
	$(".navbar").css('background-image','linear-gradient(to right , #7b24ebba, #ab22dab5, #ca2fcac7, #df44bdc7, #ed5bb3c2)');
	$(".sidenav-color").css('background-image','linear-gradient(to left bottom , #7b24ebba, #ab22dab5, #ca2fcac7, #df44bdc7, #ed5bb3c2)');
});
$(".color-2").click(function () {
	$(".navbar").css('background-image','linear-gradient(to right, rgba(5, 25, 55, 0.74), rgba(0, 77, 122, 0.7), rgba(0, 135, 147, 0.71), rgba(0, 191, 114, 0.7), rgba(168, 235, 18, 0.7)');
	$(".sidenav-color").css('background-image','linear-gradient(to left bottom, rgba(5, 25, 55, 0.74), rgba(0, 77, 122, 0.7), rgba(0, 135, 147, 0.71), rgba(0, 191, 114, 0.7), rgba(168, 235, 18, 0.7)');
});
$(".color-3").click(function () {
	$(".navbar").css('background-image','linear-gradient(to right, rgba(235, 153, 47, 0.7), rgba(236, 130, 28, 0.7), rgba(236, 104, 14, 0.7), rgba(236, 73, 11, 0.7), rgba(235, 18, 18, 0.7))');
	$(".sidenav-color").css('background-image','linear-gradient(to left bottom, rgba(235, 153, 47, 0.7), rgba(236, 130, 28, 0.7), rgba(236, 104, 14, 0.7), rgba(236, 73, 11, 0.7), rgba(235, 18, 18, 0.7))');
});
$(".color-4").click(function () {
	$(".navbar").css('background-image','linear-gradient(to right, rgba(47, 63, 235, 0.7), rgba(0, 119, 255, 0.7), rgba(0, 147, 227, 0.7), rgba(0, 166, 176, 0.7), rgba(40, 179, 137, 0.7))');
	$(".sidenav-color").css('background-image','linear-gradient(to left bottom, rgba(47, 63, 235, 0.7), rgba(0, 119, 255, 0.7), rgba(0, 147, 227, 0.7), rgba(0, 166, 176, 0.7), rgba(40, 179, 137, 0.7))');
});