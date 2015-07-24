$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        autoAdd: {helpBlocks: false},
        submitError: function($form, event, errors) {
            for(var o in errors) {
                var el = $("[name='" + o + "']");
                el.parent().addClass('has-error');
                el.focus(function() {
                    $(this).parent().removeClass('has-error');
                });
            }
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
