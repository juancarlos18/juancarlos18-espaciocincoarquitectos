jQuery(document).ready(function(){

	"use strict"
	$('.slider').ripples({
	  dropRadius: 8,
	  perturbance: 0.01,
	  
	});



	$('.post-wrapper').slick({
	  slidesToShow: 1,/**/
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  nextArrow: $('.next'),
	  prevArrow: $('.prev'),
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,/**/
	        slidesToScroll: 1,/**/
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});







	$('.work').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	    enabled: true
	  },
	});




})

/* [Login] */

const inputs = document.querySelectorAll('.input');

function focusInput(){
	let parent = this.parentNode.parentNode;
	parent.classList.add('focus');
}

function blurInput(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove('focus');
	}
}

inputs.forEach(input => {
	input.addEventListener('focus', focusInput);
	input.addEventListener('blur', blurInput);
})

/*  */






var v = document.getElementsByTagName("video")[0];
v.play();




function ShowPass() {
	var pass = document.getElementById('pass');
	var icon = document.querySelector('.fa');

	if (pass.type === "password") {
		pass.type = "text";
	} else {
		pass.type = "password";
		icon.style.color = "#999999";
	}
}
/*
$("#edit-icon").on('click', function() {
	var action = $('#edit-icon').val();
	var $t=$(this);
	
	$t.attr("data-target","#formEditSt" );

});

$("#see-det-st").on('click', function() {
	var action = $('#see-det-st').val();
	var $t=$(this);
	
	$t.attr("data-target","#formDetalleSt" );

});*/



function SearchListST(query) {
	$.ajax({
		url: 'Portal Web/Function/search.php',
		type: 'POST',
		dataType: 'html',
		data: {query: consult}
	})
	.done(function(answer) {
		$("#data").html(answer);
	})
	.fail(function() {
		console.log("Error");
	})
}

$(document).on('keyup', '#search-list-st', function() {
	var valor = $(this).val();

	if(valor != "") {
		SearchListST(valor);
	} else {
		SearchListST();
	}
})