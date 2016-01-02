<?php
    $veibeskrivelse = "https://www.google.no/maps/dir/Sandar+Kirke,+3210+Sandefjord/Framnesveien+7,+3222+Sandefjord/@59.1292263,10.2213868,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4646c09763f34069:0x8d6beee996f1373e!2m2!1d10.2267684!2d59.1348324!1m5!1m1!1s0x4646c08148c30c69:0xf2c787a5cf567880!2m2!1d10.2310623!2d59.1197795";
    $url_atlantic = "https://www.nordicchoicehotels.no/clarion-collection/clarion-collection-hotel-atlantic/";
    $url_park = "https://www.rica.no/hoteller/sandefjord/rica-park-hotel-sandefjord/";
    $url_magasinet = "http://www.magasinetcafe.no/#hjem";
    $url_gaveliste_cg = "http://www.bryllupslisten.no/Guest/Index";
    $url_gaveliste_sg = "http://www.designforevig.no/onskelister/213/0/?view=wishlist_guest&amp;list=48AD8251-02E2-44A8-9DCF-5437F7825544";
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="<?=$season?> no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="<?=$season?> no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="<?=$season?> no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="<?=$season?> no-js lt-ie10 resp"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js resp"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bryllup</title>
        <meta name="description" content="Informasjonsside for bryllupet til Håkon og Camilla">

        <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="page.css">
    </head>
    <body>
        <div class="wrap">
            <h1>Bryllup!</h1>
		    <p>Camilla + Håkon = sant <br> 2.august 2014</p>
            
            <div class="top-img">
                <img src="img.jpg" alt="Camilla og Håkon" />
            </div>
            
            <h2>Vielsen</h2>
            <p>Vielsen finner sted i Sandar Kirke i Sandefjord kl. 14:15</p>

            <h2>Middagen</h2>
            <p>Middagen blir servert på <a href="<?=$url_magasinet?>">Magasinet Cafe</a>. Dette er en veldig koselig resturant litt utenfor sentrum, og de har dørene åpne kun for bryllupsgjestene. De åpner for oss rett etter vielsen, der det vil bli servert litt enkel fingermat før middagen serveres senere på kvelden. Hvis noen har noen spesielle allergier er det fint hvis vi får vite det i god tid så vi kan si ifra.</p>

            <h2>Praktisk informasjon</h2>
            <p>Sandar Kirke er Sandefjords eldste kirke. En hvit og erverdig trekirke i sentrum, rett ved siden av togstasjonen.<br><br>
Magasinet Café ligger på Framnes ut mot Vesterøya, <a href="<?=$veibeskrivelse?>">drøye 3 km fra Sandar Kirke</a>, . Adressen er Framnesveien 7, 3222 Sandefjord. Litt utenfor sentrum og med en fantastisk utsikt over indre havn.<br><br>

For dere som kommer langveisfra og som trenger et overnattingssted finnes det flere hyggelige hoteller i sentrum. Noen eksempler er:</p>
            <p><a href="<?=$url_park?>">Park Hotell</a><br /> Et flott hotell med fantastisk utsikt over fjorden, <br>(der brudeparet kommer til å overnatte).</p>
            
            <p><a href="<?=$url_atlantic?>">Hotel Atlantic</a><br /> Et gammelt og flott hotell i sentrum, rett ved siden av kirken.</p>

	        <h2>Ønskelister</h2>
            <p>Vi har sørget for masse valgmuligheter og presenterer <u>to</u> gavelister!</p>
            <p>
                <a href="<?=$url_gaveliste_cg?>">Christiania Glasmagasin</a> (gjestepassord: Camilla&amp;Håkon)
                <br />og<br />
                <a href="<?=$url_gaveliste_sg?>">Design For Evig / (bla. Sandefjord Glasmagasin)</a>
            </p>
            <p style="margin-top: 7px;">Begge listene krysses av ved at man ringer inn, eller ordner det i butikken.</p>
        </div>

        <script>
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-39137865-1']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script'); ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>
    </body>
</html>
