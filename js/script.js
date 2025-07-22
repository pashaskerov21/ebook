document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('.menu-toggle-button').click(function () {
            $(this).toggleClass('active');
        });

        $(window).on('scroll', function () {
            let scrollTop = $(window).scrollTop();
            let rotateDeg = (scrollTop * 0.03) % 360;

            $('.about-shape img').css('transform', 'rotate(' + rotateDeg + 'deg)');
        });
    });
});