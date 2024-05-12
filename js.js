$("document").ready(function (){

        $.get("get.php", function(data) {
            console.log(data);
        });
            $("#submit").click(function() {
                var name = $("#name").val();
                var species = $("#species").val();
                $.post("add.php", {name:name, species:species})

            })
})