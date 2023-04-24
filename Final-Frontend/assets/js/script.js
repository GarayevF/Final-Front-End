$(document).ready(function() {
    
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1,
        autoplay: true
    })

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 6,
        autoplay: true
    })

    $(document).on('click', '.sub-menu-link, .btn-prev, .menu-link, .menu-btn, .nav-list, .category-item, .color, .credit-item', function() {
        if ($(this).hasClass('sub-menu-link')){
            $(this).children(".sub-content").toggleClass('d-none')
            $(this).children(".link-wrapper").children(".sub-menu")
            .children(".arrow-div").children("i").toggleClass('opened')
        }

        if ($(this).hasClass('btn-prev')){
            $(this).parent().toggleClass('d-block')
        }

        if ($(this).hasClass('menu-link')){
            $(this).parent().children(".menu-content").toggleClass('d-block')
        }

        if ($(this).hasClass('menu-btn')){
            $('.mobile-menu').toggleClass('d-block')
        }

        if ($(this).hasClass('nav-list')){
            $(this).children(".ft-menu-content").toggleClass('d-block')
        }

        if ($(this).hasClass('category-item')){
            
            if(!$(this).hasClass("active")){
                $(".category-item").removeClass('active')
                $(".category-content").removeClass('active-drop')
                $(this).addClass('active')
                $(this).children(".category-content").addClass('active-drop')
            }else{
                $(".category-item").removeClass('active')
                $(".category-content").removeClass('active-drop')
                
            }
            
        }

        if ($(this).hasClass('color')){
            if(!$(this).hasClass("active")){
                $(this).siblings(".color").removeClass("active")
                $(this).addClass('active')
            }
        }

        if ($(this).hasClass('credit-item')){
            if(!$(this).hasClass("selected-credit")){
                $(this).siblings(".credit-item").removeClass("selected-credit")
                $(this).addClass('selected-credit')
            }
        }
        
    })

    $('#gotoregister').click(function(e){
        e.preventDefault();
    })


    $(window).click(function(e) {
        if(!$(e.target).hasClass('lang-list')){
            $('#lang-drop').removeClass('d-block');
        }else{
            $('#lang-drop').toggleClass('d-block');
        }

        if(!$(e.target).hasClass('profile-list')){
            $('#profile-drop').removeClass('d-block');
        }else{
            $('#profile-drop').toggleClass('d-block');
        }

        if($(e.target).hasClass('user-drop')){
            if(!$('#login-register-div').hasClass('active')){
                $('#login-register-div').css('display', 'flex');
                $('#login-register-div').addClass('active');
            }else{
                $('#login-register-div').css('display', 'none');
                $('#login-register-div').removeClass('active');
            }
        }else{
            if(!$(e.target).closest("#login-register-div").length > 0){
                if($('#login-register-div').hasClass('active')){
                    $('#login-register-div').css('display', 'none');
                    $('#login-register-div').removeClass('active');
                }
            }
        }

        if($(e.target).hasClass('wish-drop')){
            if(!$('.wish-dropdown').hasClass('active')){
                $('.wish-dropdown').css('display', 'block');
                $('.wish-dropdown').addClass('active');
            }else{
                $('.wish-dropdown').css('display', 'none');
                $('.wish-dropdown').removeClass('active');
            }
        }else{
            if(!$(e.target).closest(".wish-dropdown").length > 0){
                if($('.wish-dropdown').hasClass('active')){
                    $('.wish-dropdown').css('display', 'none');
                    $('.wish-dropdown').removeClass('active');
                }
            }
        }

        if($(e.target).hasClass('basket-drop')){
            if(!$('.basket-dropdown').hasClass('active')){
                $('.basket-dropdown').css('display', 'block');
                $('.basket-dropdown').addClass('active');
            }else{
                $('.basket-dropdown').css('display', 'none');
                $('.basket-dropdown').removeClass('active');
            }
        }else{
            if(!$(e.target).closest(".basket-dropdown").length > 0){
                if($('.basket-dropdown').hasClass('active')){
                    $('.basket-dropdown').css('display', 'none');
                    $('.basket-dropdown').removeClass('active');
                }
            }
        }
    });
})