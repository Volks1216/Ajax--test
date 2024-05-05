<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include("get.php");
    include("add.php");
    ?>
    <div id="append"></div>
    <form action="index.php" method="POST">
        <P>ADD NEW PETS</P>
        name
        <input type="text", id="name", name="name"><br>
        species
        <input type="text", id="species" name="species"><br>
        <input type="submit" id="submt", name="submit">
    </form>

</body>
    <script src="jquery.js"></script>
    <script src="js.js"></script>
</html>