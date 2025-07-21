document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('.menu-toggle-button').click(function () {
            $(this).toggleClass('active');
        })
    });
});