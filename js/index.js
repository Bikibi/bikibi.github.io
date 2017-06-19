codeBadges("Bikibi").freecodecamp().github().codecademy().codeschool();



function myFunction() { 
  var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function() {
		$('.codeschool .outer .inner .user').html("63");
    $('.codeschool .outer .inner div:nth-child(2)').text("achievements");
      //$('.codewars .outer .inner div:nth-child(4)').text("CodinGame Member");
      //$('.codewars .outer .inner div:nth-child(5)').text("Rank");
      //$('.codewars .outer .inner div:nth-child(6)').text("1846th")	
  
  // grab the initial top offset of the navigation 
  
        var stickyNavTop = $('.nav').offset().top;	   	
		   	var stickyNav = function(){
			  var scrollTop = $(window).scrollTop(); 
			    
          if (scrollTop > stickyNavTop) { 
			        $('nav').addClass('sticky');
			    } else {
			        $('nav').removeClass('sticky'); 
			    }
			};
			stickyNav();
			$(window).scroll(function() {
				stickyNav();
			});
  });


$(function() {
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#1abc9c',
    trackColor:	"#ecf0f1",
    size: 160,
    animate: 500
  });
});