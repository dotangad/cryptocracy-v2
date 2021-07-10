<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" href="/img/footer-logo-white-bg.png" type="image/png" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <link href="{{ asset('/fonts/style.css') }}" rel="stylesheet" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168595780-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-168595780-1');
    </script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <title>Cryptocracy 2021</title>
  </head>
  <body>
    @inertia
  </body>
</html>
