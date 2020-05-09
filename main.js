/*Random Buttom functionality*/

var urls = [
    "https://xkcd.com/",
    'https://io9.gizmodo.com/',
    'https://www.penny-arcade.com/',
    'https://www.tor.com/',
    'https://create.adobe.com/2020/04/06/coloring_book_alphabet.html',
    'https://www.tested.com/',
    'http://www.welcometonightvale.com/',
    'https://www.astonishinglegends.com/',
    'http://journal.neilgaiman.com/',
    'https://www.youtube.com/watch?v=U76nIDJQcxQ&list=PLbp_QhwRhV_wajfL7MFgH3tFVgcy3M6ss'
];

function goRandom() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    window.location = url; // redirect
}

/*Weather Widget code*/

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');