<?php
// Database connection details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if it's a login or signup form submission
    if (isset($_POST["login-username"]) && isset($_POST["login-password"])) {
        // Handle login form submission
        $username = $_POST["login-username"];
        $password = $_POST["login-password"];

        // Query to check if the username and password match in the database
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            echo "Login successful!";
        } else {
            echo "Invalid username or password.";
        }
    } elseif (isset($_POST["signup-name"]) && isset($_POST["signup-username"]) && isset($_POST["signup-email"]) && isset($_POST["signup-mobile"]) && isset($_POST["signup-dob"]) && isset($_POST["signup-password"])) {
        // Handle signup form submission
        $name = $_POST["signup-name"];
        $username = $_POST["signup-username"];
        $email = $_POST["signup-email"];
        $mobile = $_POST["signup-mobile"];
        $dob = $_POST["signup-dob"];
        $password = $_POST["signup-password"];

        // Insert user data into the database
        $sql = "INSERT INTO users (name, username, email, mobile, dob, password) VALUES ('$name', '$username', '$email', '$mobile', '$dob', '$password')";
        if ($conn->query($sql) === TRUE) {
            echo "Sign up successful!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Invalid form submission.";
    }
}

// Close connection
$conn->close();
?>
