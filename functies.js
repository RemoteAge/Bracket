function toonPrompt() {
    var code = prompt('vul uw code in','uw code');
    var tekst = 'de code die u invoerde was: ' + code;
    document.getElementById('divResult').innerHTML = tekst;
} 