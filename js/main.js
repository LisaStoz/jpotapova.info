;(function($, window, document, undefined) {

    $(document).ready(function() {
        
        var duration = 500;                
                                                           
        function loadTile(tile) {
            
            var imgElement = tile.find('img');                        
            var attr = imgElement.attr('data-src');             
            if (typeof attr !== 'undefined' && attr !== false) {                
                imgElement.attr('src', attr);
            }                       
            
            setTimeout(function(){
                tile.removeClass('hidden-tile').addClass('animated');                
            }, 20);
            
        }
        
        function hideTile(tile) {
            tile.addClass('hidden-tile').removeClass('animated');
            var imgElement = tile.find('img');            
            var attr = imgElement.attr('src');            
            if (typeof attr !== 'undefined' && attr !== false) {                
                imgElement.attr('data-src', attr);
                imgElement.attr('src', attr);
            }                       
        }
        
        function displayHints(w) {
            if (w.scrollTop() > 500) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        }                
        
        function twoColumnsBehaviour() {
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
                
                displayHints($(this));                                     
                
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {                                        
                                        
                    if ( ($(window).scrollTop() + $(window).height()) > ($(document).height() - 500) ) {                                                

                        var yearBox = $('.year-box .hidden-tile').first().closest('.year-box');

                        yearBox.fadeIn(function() {                                                       

                            loadTile(yearBox.find('.right-row .hidden-tile').first());
                            loadTile(yearBox.find('.left-row .hidden-tile').first());

                            var difference = yearBox.find('.left-row').height() - yearBox.find('.right-row').height();
                            var smthToLoad = true;
                            while ((Math.abs(difference) > 300) && (yearBox.find('.hidden-tile').length > 0) && smthToLoad) {

                                if (difference > 0) {
                                    yearBox.find('.right-row .hidden-tile').first().removeClass('hidden-tile').addClass('animated');
                                    if (yearBox.find('.right-row .hidden-tile').length === 0) {
                                        smthToLoad = false;
                                    }
                                }
                                else {
                                    yearBox.find('.left-row .hidden-tile').first().removeClass('hidden-tile').addClass('animated');
                                    if (yearBox.find('.left-row .hidden-tile').length === 0) {
                                        smthToLoad = false;
                                    }
                                }

                                difference = yearBox.find('.left-row').height() - yearBox.find('.right-row').height();                                
                            }
                            
                            

                        });
                    }
                    
                    
                }, 250));  
                                             
            });
            
            
        }
        
        function oneColumnBehaviour() {
            $('.right-row .info-tile').not('.hidden-tile').each(function(){
                hideTile($(this));
            });
            
            $(".view-large").off('click');
            $(".view-large").on('click', function(e){
                e.preventDefault();
            });
            
            $(window).scroll(function() {                                

                displayHints($(this));                
                
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {

                    if ( ($(window).scrollTop() + $(window).height()) > ($(document).height() - 600) ) {
                        
                        var yearBox = $('.year-box .hidden-tile').first().closest('.year-box');
                        
                        yearBox.fadeIn(function() {                                                       
                            
                            loadTile(yearBox.find('.hidden-tile').first());                            
                                                                                                                                                                                                                                                                                                                                     
                        });
                    }

                }, 250));
                
                
            });
        } 
        
        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
        });               
                
        try
        {
            var mq = window.matchMedia("(min-width: 480px)");            
            
            if (mq.matches) {
                twoColumnsBehaviour(duration);
            }
            else {
                oneColumnBehaviour(duration);
            }
            
            mq.addListener(function(e){
                if (e.matches) {
                    twoColumnsBehaviour(duration);
                } else {
                    oneColumnBehaviour(duration);
                }
            });
        }
        catch(err) {
            oneColumnBehaviour(duration);
        } 
                                      
    });

})(jQuery, window, document);