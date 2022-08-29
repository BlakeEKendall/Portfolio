/*Random Buttom functionality*/

var urls = [
    "https://xkcd.com/",
    'https://gizmodo.com/io9/',
    'https://www.penny-arcade.com/',
    'https://www.tor.com/',
    'https://create.adobe.com/2020/04/06/coloring_book_alphabet.html',
    'https://www.tested.com/',
    'http://www.welcometonightvale.com/',
    'https://www.astonishinglegends.com/',
    'http://journal.neilgaiman.com/',
    'https://www.youtube.com/c/TheCrafsMan/featured/'
];

function goRandom() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    window.location = url; // redirect
}

/*Weather Widget code*/

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');