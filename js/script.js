$('.nav-tit').on({'mouseover focusin':function(){
    $(this).addClass('active');
},  'mouseout focusout':function(){
    $(this).removeClass('active');
}
});