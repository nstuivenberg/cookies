/**
 * Created by nstuivenberg on 07/02/2018.
 */
function pageLoad(aBoolean) {

    if(aBoolean !== false) {
        tellerCookie();
    }

    document.getElementById("c1Value").innerHTML = ifEmptyReturnANiceString("cTeller");
    document.getElementById("c2Value").innerHTML = ifEmptyReturnANiceString("cNieuw");
    document.getElementById("c3Value").innerHTML = ifEmptyReturnANiceString("cAanpassen");
    document.getElementById("c4Value").innerHTML = ifEmptyReturnANiceString("cDelete");
    document.cookie = "youtubeId=dQw4w9WgXcQ; expires=Wed, 01 Jan 2020 12:00:00 UTC; path=/";
}

function tellerCookie() {
    var teller = getCookie("cTeller");
    if (teller != "" && !isNaN(teller)) {
        teller = parseInt(teller) + 1;
    } else {
        teller = "1";
        makeSomeCookies();
    }
    setCookie("cTeller", teller, 1);
}

function ifEmptyReturnANiceString(cName) {
    if (getCookie(cName) != "") {
        return getCookie(cName);
    }
    return "Geen cookie met deze naam aanwezig!"
}

/*
 Dit is een algemene functie die een cookie aanmaakt
 Je moet in deze functie drie variabelen gooien:
 naam van de cookie (cname)
 de waarde van de cookie (cvalue)
 in hoeveel dagen deze moet verlopen (exdays)
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function buildYoutubeVid() {
    var waardeCookie = getCookie("youtubeId");
    var youtubeLink = "https://www.youtube.com/embed/";
    youtubeLink += waardeCookie;
    youtubeLink += "?autoplay=1";

    var youtubeElement = document.createElement("iframe");
    youtubeElement.setAttribute("width", "560");
    youtubeElement.setAttribute("height", "315");
    youtubeElement.setAttribute("src", youtubeLink);
    youtubeElement.setAttribute("frameborder", "0");
    youtubeElement.setAttribute("allow", "autoplay; encrypted-media");
    youtubeElement.setAttribute("allowfullscreen", "");

    document.getElementById("movie").appendChild(youtubeElement);
    document.getElementById("movie").style.display = "block";
    document.getElementById("movieButton").style.display = "none";
}


function makeSomeCookies() {
    document.cookie = "besteDocent=Nick";
    document.cookie = "leuksteVak=Web Programming";
    document.cookie = "toetsenbord=QWERTY";
}

function lala() {
    document.getElementById("docCookie").innerHTML = document.cookie;
}

function showAnswerAddCookie() {
    setCookie("cNieuw","Leipe dinges ouwe", 4);
    setCookie("voornaam","Vladimir", 22);
    setCookie("kleur","groen", 1);

    document.getElementById("addCookieAnswer").style.display = "block";

    pageLoad(false);
}

function showUitlegAanpassen() {
    document.getElementById("cookieAanpassenButton").style.display = "none";
    document.getElementById("cookieAanpassenDiv").style.display = "block";

}

function cookieAanpassenVoorbeeldUno() {
    setCookie("cAanpassen","Super aanpasbaar", 4);
    document.getElementById("c3Value").innerHTML = ifEmptyReturnANiceString("cAanpassen");
}
function cookieAanpassenVoorbeeldDuo() {
    setCookie("cAanpassen","I feel changed!", 4);
    document.getElementById("c3Value").innerHTML = ifEmptyReturnANiceString("cAanpassen");
}

function cookieDeleteAanmaken() {
    setCookie("cDelete","I feel alive", 4);
    document.getElementById("c4Value").innerHTML = ifEmptyReturnANiceString("cDelete");
}

function cookieDeleteDelete() {
    setCookie("cDelete","", -1);
    document.getElementById("c4Value").innerHTML = ifEmptyReturnANiceString("cDelete");
}

function cookieDeleteShowCodeOne() {
    document.getElementById("cookieVerwijderenButtonOne").style.display = "none";
    document.getElementById("cookieVerwijderenDivOne").style.display = "block";

}

function cookieTellerUitleg() {
    document.getElementById("cookieTellerButton").style.display = "none";
    document.getElementById("cookieTellerDiv").style.display = "block";

}