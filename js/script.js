$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
$("#phone").click(function() {
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-99-99");

$(document).ready(function() {
    $('.accordion').click(function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
});

$(function() {
    var height = $('#service_cost_card_2').height();
    $('#service_cost_card_1').height(height);
});

(function() {
    let speed = 2; // Скорость скролла.

    let scroll = document.querySelector('.experts_content');

    let left = 0; // отпустили мышку - сохраняем положение скролла
    let drag = false;
    let coorX = 0; // нажали мышку - сохраняем координаты.

    scroll.addEventListener('mousedown', function(e) {
        drag = true;
        coorX = e.pageX - this.offsetLeft;
    });
    document.addEventListener('mouseup', function() {
        drag = false;
        left = scroll.scrollLeft;
    });
    scroll.addEventListener('mousemove', function(e) {
        if (drag) {
            this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX) * speed;
        }
    });

})();