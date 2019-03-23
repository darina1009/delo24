$(function(){
  $(document).ready(function(){
//=================================

        $('.slider1').owlCarousel({
			items:1,
			// nav: true,
			// navText:['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'],
			 responsive:{
				0:{
					items:1,
					// nav:false,
					dots:false

				},
				600:{
					items:1,
					// nav:true,
					dots:true
				},
				900:{
					items:1,
					// nav:true,
					dots:true
				}
			}
		});

        $('.slider1').on('changed.owl.carousel', function(e){
			$('.slider2').trigger('to.owl.carousel',(e.item.index-1));
		});

        $('.slider2').on('click', '.owl-item', function () {
            $(".slider1").trigger('to.owl.carousel', $(this).index());
        });


        $('.slider2').owlCarousel({
			items:1,
			nav: true,
			navText:['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'], responsive:{
				0:{
					items:1,
					nav:true,
					dots:false

				},
				600:{
					items:3,
					nav:false,
					dots:false
				},
				900:{
					items:5,
					nav:false,
					dots:false,
                    }
			}
		});
		
		$('.lp-slider3').owlCarousel({
			items:1,
			nav: true,
			navText:['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'], responsive:{
				0:{
					items:1,
					nav:true,
					dots:false

				},
				600:{
					items:1,
					nav:false,
					dots:false
				},
				900:{
					items:1,
					nav:false,
					dots:false,
                    }
			}
		});

    $('.lp-slider2').owlCarousel({
			items:1,
			nav: true,
			navText:['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'], responsive:{
				0:{
					items:1,
					nav:true,
					dots:false

				},
				600:{
					items:3,
					nav:false,
					dots:false
				},
				900:{
					items:5,
					nav:false,
					dots:false,
                    }
			}
		});

       $('.slider2').on('changed.owl.carousel', function(e){
       $('.slide').find('.visible').removeClass('visible');
       $('.slide').on('click', function(e){
        $(this).addClass('visible');
       });
    });
    $('.lp-mfp-inline').magnificPopup({
      type: 'inline'
	});
	
	$('.lp-header').each(function() { //Несколько галерей
    $(this).magnificPopup({
    type: 'image',
    delegate: 'a',

      gallery:{
      enabled:true
        },
    callbacks: {

      buildControls: function() {
    // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          }

          }
    });
	});

  $('.lp-gallery').each(function() { //Несколько галерей
    $(this).magnificPopup({
    type: 'image',
    delegate: 'a',

      gallery:{
      enabled:true
        },
    callbacks: {

      buildControls: function() {
    // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          }

          }
    });
	});
	
	//galerey
    $('.popup-slider1').on('click',function(){

$.magnificPopup.open({
 items:[ {
  src: '',
  type: 'image'
},{
  src: '',
  type: 'image'
},{
  src: '',
  type: 'image'
}
],
gallery:{enabled:true}
});
});
$('.popup-slider2').on('click',function(){

	$.magnificPopup.open({
	 items:[ {
		src: 'img/massazh1.png',
		type: 'image'
	},{
		src: 'img/massazh2.png',
		type: 'image'
	},{
		src: 'img/massazh3.png',
		type: 'image'
	}
	],
	gallery:{enabled:true}
	});
	});
	$('.popup-slider3').on('click',function(){

		$.magnificPopup.open({
		 items:[ {
			src: '',
			type: 'image'
		},{
			src: '',
			type: 'image'
		},{
			src: '',
			type: 'image'
		}
		],
		gallery:{enabled:true}
		});
		});
		$('.popup-slider4').on('click',function(){

			$.magnificPopup.open({
			 items:[ {
				src: '',
				type: 'image'
			},{
				src: '',
				type: 'image'
			},{
				src: '',
				type: 'image'
			}
			],
			gallery:{enabled:true}
			});
			});
			$('.popup-slider5').on('click',function(){

				$.magnificPopup.open({
				 items:[ {
					src: 'img/3.png',
					type: 'image'
				},{
					src: 'img/4.png',
					type: 'image'
				},{
					src: 'img/5.png',
					type: 'image'
				}
				],
				gallery:{enabled:true}
				});
				});


$('.slider3').owlCarousel({
items:1,
// nav: true,
// navText:['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'],
responsive:{
0:{
  items:3,
  // nav:false,
  dots:false

},
600:{
  items:3,
  // nav:true,
  dots:true
},
900:{
  items:3,
  // nav:true,
  dots:true
}
}
});


//=================================
  });
});


