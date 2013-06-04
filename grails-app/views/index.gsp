<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>PhoneCatApp</title>
    <meta name="description" content="">
    <!-- build:css styles/main.css -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/app.css">
    <!-- endbuild -->
  </head>
  <body>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">PhoneCatApp</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li><a href="#about">About</a></li>
              <li><a href="#about">Contact</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
    <!-- Add your site or application content here -->
    <div ng-view></div>
    <script data-main="js/app/scripts/main" src="js/app/scripts/vendor/require.js" ></script>
  </body>
</html>