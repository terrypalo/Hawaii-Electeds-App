<?php
$sqlUser = 'USER';
$sqlDatabase = 'DB_NAME';
$sqlPass = 'PASS';

$conn = mysql_connect($sqlHost, $sqlUser, $sqlPass) or die("Couldn't connect to MySQL server on $sqlHost: " . mysql_error() . '.');

$db = mysql_select_db($sqlDatabase, $conn) or die("Couldn't select database $sqlDatabase: " . mysql_error() . '.');

$hd= $_REQUEST['hd'];
$sd= $_REQUEST['sd'];
$cd= $_REQUEST['cd'];
$cc= $_REQUEST['cc'];


$sql="SELECT * FROM BALLOT WHERE HD='$hd' AND CD='$cd' AND SD='$sd' AND CC='$cc'";
$ballotReturned = mysql_query($sql, $conn) or die("Couldn't perform query (".__LINE__."): " . mysql_error() . '.');

if($ballot= mysql_fetch_assoc($ballotReturned ))
{
  $bid=$ballot['bid'];
  $sql="INSERT INTO VISIT SET bid='$bid'";
  $query=mysql_query($sql, $conn) or die("Couldn't perform query (".__LINE__."): " . mysql_error() . '.');
  $json = json_encode(["status" => "success", "bid" => $bid]);
}
else
{
  $json = json_encode(["status" => "fail"]);
}
echo $json;

?>
