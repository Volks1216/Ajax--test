var $obj = $("#append");
var $name = $("#name");
var $species = $("#species");

$(function(){

    $.ajax({
        type: "GET",
        url: "animals.JSON",
        
    }).done(function(data){
        console.log(data)
        $.map(data, function(post, i) {
            $("#append").append("<br>", "name: " + post.name + ", species: "+post.species);
        })
    })

    $("#postform").submit(function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var species = $("#species").val();
        var url = $(this).attr("action");

        $.post(url, {name, species}).
        done(function(data) {
            $("#append").append("<br>", "name: " + name + ", species: "+species);
            console.log(data);
        })
    })
});