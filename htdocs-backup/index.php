<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>플러그인 정리</title>
	
</head>

<body>
	<div>
		<h1>목차</h1>
		<ul>
			<li><a href="/pluginmaster/index.php">플러그인</a></li>
			<li><a href="/todayhealth/index.php">오운완</a></li>
		</ul>
	</div>
</body>


<!-- ?php
	
	$DB_SERVER = 'localhost';
	$DB_LOGIN = 'dotmemp';
	$DB_PASSWORD = 'dot3568!';
	$DB = 'dotmemp';

	$dbconn = mysqli_connect($DB_SERVER,$DB_LOGIN,$DB_PASSWORD) or die("서버연결 실패");
	$status = mysqli_select_db($dbconn, $DB);
	if(!$status){echo"디비선택 실패";}

	$query = "select * from testmember";
	$result = mysqli_query($query);
	$row = mysqli_fetch_object($result);

	*/


	
	
	/*
	간이 테스트
	$connect = mysqli_connect("localhost","dotmemp","dot3568!","dotmemp");
	 
	if($connect->connect_errno){
		echo '[연결실패..] : '.$connect->connect_error.'';
	}else{
		echo '[연결성공!]'.'<br>';
	}
	*/


	$host = "localhost";
    $user = "dotmemp";
    $pw = "dot3568!";
    $dbName = "dotmemp";

    $conn = new mysqli($host, $user, $pw, $dbName);
    
    /* DB 연결 확인 */
    if($conn){ 
		/*echo "연결성공";*/
	} else { 
		die( '연결실패: ' . mysqli_error($conn) ); 
	}
    
	$sql = "SELECT * FROM testmember";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result)){
        /*echo $row['name']." ".$row['msg']."<br>";*/
    }

	/*
	삭제
	$sql = "DELETE FROM testmember WHERE name = '김똥키'";
    $result = mysqli_query($conn, $sql);
 	
    if($result) { echo "insert success!"; }
    else { echo "failure"; }
	*/

	/*
	입력
	$sql = "INSERT INTO `testmember`(`uid`, `name`, `age`, `msg`) VALUES ('5','김똥키','6','납치됨')";
    $result = mysqli_query($conn, $sql);
 	
    if($result) { echo "insert success!"; }
    else { echo "failure"; }

	

	$sql = "SELECT * FROM testmember";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result)){
        echo $row['name']." ".$row['msg']."<br>";
    }
	*/


    mysqli_close($conn);

? -->



<!-- //?direct=/page/02_chart.php 이렇게쓰면 강제연결 -->
</html>