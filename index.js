$(document).ready(function() {
    $("#button").on("click", function() {
        var newItem = $("#newItem").val().trim();
        if (newItem !== '') {
            $("<li>" + newItem + "</li>")
                .appendTo("#sortable")
                .dblclick(function() {
                    $(this).remove();
                });
            $("#newItem").val('');
            $("#sortable").sortable(); // Enable sorting after adding new item
        }
    });

    $("#sortable").sortable();
    $("#sortable").disableSelection(); // Disable text selection during drag-and-drop
});


