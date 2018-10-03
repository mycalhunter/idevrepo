<?
  include('connect.php');
  include('head.html');
?>

<?
  include('collection-get.php');
?>
<?
  include('footer.html');

  mysqli_close($con);
?>
