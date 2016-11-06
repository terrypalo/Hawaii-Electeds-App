<?php

$sqlUser = 'USER';
$sqlDatabase = 'DB_NAME';
$sqlPass = 'PASS';

$conn = mysql_connect($sqlHost, $sqlUser, $sqlPass) or die("Couldn't connect to MySQL server on $sqlHost: " . mysql_error() . '.');

$db = mysql_select_db($sqlDatabase, $conn) or die("Couldn't select database $sqlDatabase: " . mysql_error() . '.');

$sql="SELECT HD, MIN(visitTime) AS firstVisited, MAX(visitTime) AS lastVisit, SUM(1) AS numVisits FROM VISIT NATURAL JOIN BALLOT GROUP BY HD ORDER BY HD";
$visitsTable = mysql_query($sql, $conn) or die("Couldn't perform query (".__LINE__."): " . mysql_error() . '.');
$house = [];
while ($visit = mysql_fetch_assoc($visitsTable)) array_push($house,$visit);

$sql="SELECT SD, MIN(visitTime) AS firstVisited, MAX(visitTime) AS lastVisit, SUM(1) AS numVisits FROM VISIT NATURAL JOIN BALLOT GROUP BY SD ORDER BY SD";
$visitsTable = mysql_query($sql, $conn) or die("Couldn't perform query (".__LINE__."): " . mysql_error() . '.');
$senate = [];
while ($visit = mysql_fetch_assoc($visitsTable)) array_push($senate,$visit);

$sql="SELECT CD, MIN(visitTime) AS firstVisited, MAX(visitTime) AS lastVisit, SUM(1) AS numVisits FROM VISIT NATURAL JOIN BALLOT GROUP BY CD ORDER BY CD";
$visitsTable = mysql_query($sql, $conn) or die("Couldn't perform query (".__LINE__."): " . mysql_error() . '.');
$congress = [];
while ($visit = mysql_fetch_assoc($visitsTable)) array_push($congress,$visit);

$sql="SELECT CC, MIN(visitTime) AS firstVisited, MAX(visitTime) AS lastVisit, SUM(1) AS numVisits FROM VISIT NATURAL JOIN BALLOT GROUP BY CC ORDER BY CC";
$visitsTable = mysql_query($sql, $conn) or die("Couldn't perform query (".__LINE__."): " . mysql_error() . '.');
$council = [];
while ($visit = mysql_fetch_assoc($visitsTable)) array_push($council,$visit);

$json = json_encode(["house" => $house, "senate" => $senate, "council" => $council, "congress" => $congress ]);
echo $json;

?>
