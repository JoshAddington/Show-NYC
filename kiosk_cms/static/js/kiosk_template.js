// adds 'Generate Kiosk Template' button to campaign admin page
(function($) {
    $(document).ready(function($) {
        $(".historylink").closest(".object-tools").append('<li><a href="template/" class="addlink">Generate Kiosk Template</a></li>');
    });
})
(django.jQuery);