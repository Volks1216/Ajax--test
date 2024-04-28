var $obj = $("#append");
var $name = $("#name");
var $species = $("#species");

$(function(){

    $.ajax({
        type: "GET",
        url: "https://learnwebcode.github.io/json-example/animals-1.json",
        success: function(obj) {
            $.each(obj, function(i, obj1) {
                $obj.append("<br>", " name: " +obj1.name+ ", species: "+obj1.species);
            });
        }
    });
});

$("#btn").click(function() {

    var obj = {
        name: $name.val(),
        species: $species.val(),
    };

    $.ajax ({
        type: "POST",
        url: "https://learnwebcode.github.io/json-example/animals-1.json",
        data: obj,
        dataType: "text",
        success: function(newObj) {
            $obj.append("<br>", " name: " +newObj.name+ ", species: "+newObj.species);
        }
    })
});