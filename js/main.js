;(function($, window, document, undefined) {        
    
    var app = {
        
        duration: 500,
        
        init: function() {                         
            app.hint.init();
            app.contentLoad.init();
        },
        
        contentLoad: {
            
            init: function() {
                try {
                    var mq = window.matchMedia("(min-width: 480px)");            

                    if (mq.matches) {
                        app.contentLoad.twoColumnsBehaviour();
                    }
                    else {
                        app.contentLoad.oneColumnBehaviour();
                    }

                    mq.addListener(function(e){
                        if (e.matches) {
                            app.contentLoad.twoColumnsBehaviour();
                        } else {
                            app.contentLoad.oneColumnBehaviour();
                        }
                    });
                }
                catch(err) {
                    app.contentLoad.oneColumnBehaviour();
                } 
            },
            
            twoColumnsBehaviour: function() {
                
                $(".view-large").each(function(){
                    var item = $(this);  
                    item.off('click');
                    item.on('click', function(e){                    
                        e.preventDefault();                    
                        $.fancybox.open({
                            'href': item.attr('href'),
                            'closeBtn': false,
                            'closeClick': true
                        });                  
                    });
                }); 
            
                $(window).scroll(function() {                                
                
                    app.hint.show($(this));                                     

                    clearTimeout($.data(this, 'scrollTimer'));
                    $.data(this, 'scrollTimer', setTimeout(function() {                                        

                        if ( ($(window).scrollTop() + $(window).height()) > ($(document).height() - 500) ) {                                                
                                                                                    
                            var tile = $('.hidden-tile').first();                                                        
                            var yearBox = tile.closest('.year-box');
                            var leftHeight = yearBox.find('.left-row').height();
                            var rightHeight = yearBox.find('.right-row').height();
                            
                            if ( yearBox.find('.left-row .hidden-tile').length > 0 ) {
                                if ( (leftHeight <= rightHeight) || (yearBox.find('.right-row .hidden-tile').length === 0) ) {
                                    app.tile.load(yearBox.find('.left-row .hidden-tile').first());                           
                                }
                                else {
                                    app.tile.load(yearBox.find('.right-row .hidden-tile').first());                           
                                }
                            }
                            else {
                                app.tile.load(yearBox.find('.right-row .hidden-tile').first());                           
                            }
                                                      
                            yearBox.fadeIn();
                        }

                    }, 20));  

                });
            },
            
            oneColumnBehaviour: function() {
                
                $('.right-row .info-tile').not('.hide').each(function(){
                    app.tile.hide($(this));
                });

                $(".view-large").off('click');
                $(".view-large").on('click', function(e){
                    e.preventDefault();
                });

                $(window).scroll(function() {                                

                    app.hint.show($(this));                

                    clearTimeout($.data(this, 'scrollTimer'));
                    $.data(this, 'scrollTimer', setTimeout(function() {

                        if ( ($(window).scrollTop() + $(window).height()) > ($(document).height() - 600) ) {

                            var yearBox = $('.year-box .hide').first().closest('.year-box');

                            yearBox.fadeIn(function() {                                                       

                                app.tile.load(yearBox.find('.hide').first());                            

                            });
                        }

                    }, 250));


                });
            }
                                    
        },                
                      
        hint: {
            
            init: function() {
                $('.back-to-top').on('click', function(event) {
                    event.preventDefault();
                    $('html, body').animate({scrollTop: 0}, app.duration);
                });
            },
            
            show: function(w) {            
                if (w.scrollTop() > 500) {
                    $('.back-to-top').fadeIn(app.duration);
                } else {
                    $('.back-to-top').fadeOut(app.duration);
                }
            }          
            
        },   
        
        tile: {
            
            
            load: function(tile) {
                
                var imgElement = tile.find('img');                        
                var attr = imgElement.attr('data-src');  
                console.log(imgElement);
                console.log(attr);
                if (typeof(attr) !== 'undefined' && attr !== false) {                
                    imgElement.attr('src', attr);
                    console.log('attr added');
                }                       

                setTimeout(function(){
                    tile.removeClass('hidden-tile').addClass('animated');                
                    return true;
                }, 20);
            
            },
            
            hide: function(tile) {
                tile.addClass('hidden-tile').removeClass('animated');
                var imgElement = tile.find('img');            
                var attr = imgElement.attr('src');            
                if (typeof(attr) !== 'undefined' && attr !== false) {                
                    imgElement.attr('data-src', attr);
                    imgElement.attr('src', attr);
                    return true;
                }                       
            }
            
        }                        
                
    };

    $(document).ready(function() {        
        app.init();              
    });

})(jQuery, window, document);