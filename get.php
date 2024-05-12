<?php
        include("data.php");
        $sql = "SELECT * 
            FROM animals";

            $result = mysqli_query($conn, $sql);

        if($result) {
            echo("ADDED PETS". "<br>". "<br>");
            while($row = mysqli_fetch_assoc($result)) {
            echo("Name: ".$row["name" ]. ", Species: ".$row["species" ]."<br>");
        }
    }
    ?>