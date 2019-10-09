//toggle the completed style when clicked on list
$("#ListTodos").on("click", ".TodoItem", function (){
    $(this).toggleClass("completed");
});

//remove the item when clicked on the span with a fadeout delay
$("#ListTodos").on("click", ".TodoItem span", function (event){
    $(this).parent().fadeOut(500, function ()
    {
        $(this).remove();
    });
    console.log("clicked");
    
    event.stopPropagation();
});

$("#AddTodo").keypress(function (event) { 
    if (event.which == 13)
    {
        var newTodo = $(this).val();

        if (newTodo != "")
        {
            $(this).val("");
            $("#ListTodos").append("<li class='TodoItem'><span class='GarbageIcon'><i class='far fa-trash-alt'></i></span>" + newTodo + "</li>");
        }
    }
});

$("#PlusIcon").on("click", function () {
    $("#AddTodo").fadeToggle();
});