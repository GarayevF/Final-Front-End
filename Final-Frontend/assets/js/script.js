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

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1,
        autoplay: true
    })

    $('.product-detail-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1,
        autoplay: false,
        dots: true,
    })

    let dropbtn = document.querySelector('.main-detail .item-info .container .content .item-content .right .credit-calculator .wrapper .li-body .price .dropdown .dropbtn');
    let dropbtnicon = document.querySelector('.main-detail .item-info .container .content .item-content .right .credit-calculator .wrapper .li-body .price .dropdown .dropbtn i');
    let dropdown = document.querySelector("#credit-dropdown")

    dropbtn.addEventListener('click', function(){
        dropdown.classList.toggle("show");
        if (dropdown.classList.contains('show')) {
            dropbtnicon.style.transform = "rotate(-90deg)"
            dropdown.style.height = dropdown.scrollHeight + 'px';
        }else{
            dropbtnicon.style.transform = "rotate(0deg)"
            dropdown.style.height = '0px';
        }
    })

    window.addEventListener('resize', function(e){
        let sidebar_mob = document.querySelector('.main-shop .container .content');
        if(window.innerWidth > 991.8){
            sidebar_mob.classList.remove('sidebar-active')
        }
      });

    $(document).on('click', '.sub-menu-link, .btn-prev, .menu-link, .menu-btn, .nav-list, .category-item, .color, .credit-item, .filter-button, .filter-btn-mobile', function() {
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
        
        if ($(this).hasClass('filter-button')){
            $(this).toggleClass('active')
            $(this).parent().children(".drop-content").toggleClass('active-content')
            $(this).children("i").toggleClass('opened')
        }

        if ($(this).hasClass('filter-btn-mobile')){
            $(this).parent().toggleClass('sidebar-active')
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

    const rangeInput = document.querySelectorAll(".main-shop .left .pricefilter .content-box .range-input input"),
    priceInput = document.querySelectorAll(".main-shop .left .pricefilter .content-box .price-input input"),
    range = document.querySelector(".main-shop .left .pricefilter .content-box .slider .progress");
    let priceGap = 500;

    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value);
            let maxPrice = parseInt(priceInput[1].value);
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);

            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap;
                    priceInput[0].value = maxVal - priceGap;
                    range.style.left = (((maxVal - priceGap) / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = minVal + priceGap;
                    priceInput[1].value = minVal + priceGap;
                    range.style.right = 100 - ((minVal + priceGap) / rangeInput[1].max) * 100 + "%";
                }
            }else{
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    
})