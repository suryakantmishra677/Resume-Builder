<?php 
session_start();
include('config.php');

if(isset($_POST['register']))
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    $query = "INSERT INTO `users` (`Name`, `Email`, `Password`) VALUES ('$name','$email','$password')";
    $result = mysqli_query($conn,$query);

    if($result){
echo "done";
}else{
    echo "error";
    
}
}


if(isset($_POST['login']))
{
    $email=$_POST['email'];
    $password=$_POST['password'];

    $query = "SELECT * FROM `users` WHERE `Email`='$email' AND `Password`='$password'";
    $result = mysqli_query($conn,$query);
    $present=mysqli_num_rows($result);
    if($present>0){

        header('Location:index.html');
}else{
    echo "wrong email and password";
}
}


?>