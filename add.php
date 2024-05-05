<?php
        include("data.php");
        if(isset($_POST['submit']) && isset($_POST['species'])){
        
                $name = $_POST['name'];
                $species = $_POST['species'];
                
                $sql = "INSERT 
                        INTO animals(name, species)
                        VALUES ('$name', '$species')";
                
                $result = mysqli_query($conn, $sql);
        
        }
        
    ?>