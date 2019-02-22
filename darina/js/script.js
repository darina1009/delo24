$(function(){
  $(document).ready(function(){
//=================================
        	$('.slider1').on('initialize.owl.carousel',function(e){ 
console.log('Слайдер 1 прошел инициализацию'+(e.item.index+1)); 
});
        $('.slider1').owlCarousel({
			items:1,
			nav: true,
			navText:['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'], responsive:{
				0:{
					items:1,
					nav:false,
					dots:false
					
				}, 
				600:{
					items:2,
					nav:true,
					dots:true
				},
				900:{
					items:1,
					nav:true,
					dots:true
				}
			}
		});

        $('.items button').on('click',function(){
            var imgItem=$('.items input').val();
            if(0<imgItem && imgItem<11){
              $('.items input').val('');
                $('.slider1').trigger('to.owl.carousel',imgItem-1);
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
					items:2,
					nav:false,
					dots:false
				},
				900:{
					items:3,
					nav:false,
					dots:false,
                    }
			}
		});
       $('.slider2').on('changed.owl.carousel', function(e){
			console.log($('.veil').getAttribute('visible'));
		});

//=================================      
  });
});
