
    $(document).ready(function () {
        //Preloader
        $(window).on("load", function () {
            preloaderFadeOutTime = 100;

            function hidePreloader() {
                var preloader = $('#loading');
                preloader.fadeOut(preloaderFadeOutTime);
            }
            hidePreloader();
        });
    }); 