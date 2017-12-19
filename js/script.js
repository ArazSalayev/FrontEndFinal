// $(window).scroll(function(){
// 	if ( $(document).scrollTop() > 200){
// 		$('.nav-footer').css({
// 			position : 'fixed',
// 			top:'0',
// 			left : '0',
// 			zIndex : '60',
// 			width: "100%",
// 			margin: "0"
// 		});
// 	}else{
// 		$(".nav-footer").css({
// 			position: "static"
// 		});
// 		$(".nav-footer .container-fluid").css({
// 			margin: "0px -15px"
// 		});
// 	}
// })
// ---------------------------------------------


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
var a=true;
$('#search').click(function(){

	$('input').toggle()
	$('.inputs-icon').toggle()

	if(a== true){
		$(this).find('i.fa').removeClass('fa-search').addClass('fa-times')
		
		a=false;

	}else {
		$(this).find('i.fa').removeClass('fa-times').addClass('fa-search')
		a=true;

	}
	
})
// -------------------------------------------------------
c=0
$('#bar').click(function(){
	$(this).removeClass('fa-bars').addClass('fa-arrow-left')
	if(c==0){
	$('.nav-footer').css("margin-left","0")

	c=1
}else{
	$('.nav-footer').css("margin-left","-400px")
	$(this).removeClass('fa-arrow-left').addClass('fa-bars')
	c=0
}
	
})
// ----------------------------------------------


$('.second-slide').hide()
$('.third-slide').hide()

$('.first-dot').click(function(event){
	$('.second-slide').fadeOut(500)
	$('.third-slide').fadeOut(500)
	$('.first-slide').fadeIn(500)
})
$('.second-dot').click(function(event){
	$('.second-slide').fadeIn(500)
	$('.third-slide').fadeOut(500)
	$('.first-slide').fadeOut(500)
})
$('.third-dot').click(function(event){
	$('.second-slide').fadeOut(500)
	$('.third-slide').fadeIn(500)
	$('.first-slide').fadeOut(500)
})

// -----------------------------------------------------
var x=0;
var y=0;
var z=0;
var n=0;
var intervalFirst;
var intervalSecond;
var intervalThird;
var intervalFourth;

	intervalFirst=setInterval(function(){
$(".first-count").text(
		
			x+=1
		
	)
if(x==100){
	clearInterval(intervalFirst);
}

},10)
	intervalSecond=setInterval(function(){
$(".second-count").text(
		
			y+=1
		
	)
if(y==10){
	clearInterval(intervalSecond);
}

},10)
	intervalThird=setInterval(function(){
$(".third-count").text(
		
			z+=1
		
	)
if(z==1954){
	clearInterval(intervalThird);
}

},.2)
	intervalFourth=setInterval(function(){
$(".fourth-count").text(
		
			n+=1
		
	)
if(n==2597){
	clearInterval(intervalFourth);
}

},.1)
// -----------------------------------------------------------

$(document).ready(function() {
	count=0;
$(".serv-but-left").click(function(event){
	if(count > 0){
		$($(".repair")[count-1]).animate({
			marginLeft: "+="+$($(".repair")[0]).css("width")
		})
		count--;
	}
});
$(".serv-but-right").click(function(event) {
	if(count < $(".repair").length-4){
		$($(".repair")[count]).animate({
			marginLeft: "-="+$($(".repair")[0]).css("width")
		})
		count++;
	}
	});
});
// ----------------------------------------------------


$(document).ready(function() {
cnt=0
$("#manufactures .dots .dotSecond").click(function(event){
	if(cnt > 0){
		$($(".innerMan")[cnt-1]).animate({
			marginLeft: "+="+39+$($(".innerMan")[0]).css("width")
		})
		cnt--;
	}
})
$("#manufactures .dots .dotThird").click(function(event) {
	if(count < $(".innerMan").length-5){
		$($(".innerMan")[cnt]).animate({
			marginLeft: "-="+39+$($(".innerMan")[0]).css("width")
		})
		cnt++;
	}
	});
})




