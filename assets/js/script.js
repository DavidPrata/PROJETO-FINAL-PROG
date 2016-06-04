$(document).ready(function(){
	
	$(".aqueroda a").click(function() {
		var path = $(this).attr("href");
		var alt = $(this).attr("title");
		
		$("#aquelafixa").attr({src: path, alt: alt});
		return false;
	});	
    
    $('#right').click( function () {
        var pos = 0;
        $('.itemgaleria').each( function (index, item) {
            if ($(item).hasClass('active')) {
                $(item).removeClass('active');
                if (index === ($('.itemgaleria').length - 1)) {
                    pos = -1;
                } else {
                    pos = index;
                }
            }
        });
        
        $($('.itemgaleria')[pos + 1]).addClass('active');
        var path = $('.active').attr("href");
		var alt = $('.active').attr("title");
        $("#aquelafixa").attr({src: path, alt: alt});
    });
    
    $('#left').click( function () {
        var pos = 0;
        $('.itemgaleria').each( function (index, item) {
            if ($(item).hasClass('active')) {
                $(item).removeClass('active');
                if (index === 0) {
                    pos = $('.itemgaleria').length;
                } else {
                    pos = index;
                }
            }
        });
        $($('.itemgaleria')[pos-1]).addClass('active');
        var path = $('.active').attr("href");
		var alt = $('.active').attr("title");
        $("#aquelafixa").attr({src: path, alt: alt});
    });
    
    $('.cubo').mouseover( function () {
        var id = $(this).attr('id').replace('quadrados','rectangulo'); //substitui a palavra quadrados do valor devolvido pelo atributo id por rectangulo
        $('#' + id).fadeIn(500);
        
    });
    
    $('.cubo').mouseout( function () {
        var id = $(this).attr('id').replace('quadrados','rectangulo'); //substitui a palavra quadrados do valor devolvido pelo atributo id por rectangulo
        $('#' + id).fadeOut(100);
        
    });
    
    $('.painel h3:first').addClass('active');
    $('.painel p:not(:first)').hide();
    
    $('.painel h3').click(function(){
        $(this).next('p').slideToggle('slow').siblings('p:visible').slideUp('slow');
        $(this).toggleClass('active');
        $(this).siblings('h3').removeClass('active');
    });
    
});


