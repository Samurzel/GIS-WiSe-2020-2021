(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pictures_1 = require("./pictures");
const utility_1 = require("./utility");
/**
 * Der folgende Code musste mithilfe von Browsify auf einem Browser ausführbar gemacht werden.
 *
 * Zuvor muss mithilfe von "npm install -g http-server" ein HTTP-Server installiert werden.
 *
 * Das sind die Befehle die ausgeführt werden müssen, damit ein lokaler HTTP Server erstellt wird mit dem dann die Webseite unter http://127.0.0.1:8080/index.html aufgerufen werden kann.
 * browserify final.js -o bundle_final.js //Nur bei Änderung der final.js
 * browserify bild.js -o bundle_bild.js //Nur bei Änderung der bild.js
 * http-server
 *
 * Anders war es nicht möglich die "import" Anweisungen zu verwenden, da das Clientseitige Javascript das nicht unterstützt! In der Vorlesung wurde dies auch nicht weiter erläutert.
 */
var bildNamespace;
(function (bildNamespace) {
    let picture;
    let picture1;
    let picture2;
    let picture3;
    let buttonLeft;
    let buttonRight;
    let buttonConfirm;
    let images = new pictures_1.PictureNamespace.Pictures();
    window.addEventListener("load", init);
    /**
     * Used to communicate with an URL and read its response.
     * Used to get the .JSON file.
     * @param _url - The URL where the file to request lies.
     */
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        response.json()
            .then(data => {
            console.log("Data", data);
            images.setPicture1(data.picture1);
            images.setPicture2(data.picture2);
            images.setPicture3(data.picture3);
            images.setPicture4(data.picture4);
            images.setPicture5(data.picture5);
            images.setPicture6(data.picture6);
            images.setPicture7(data.picture7);
            images.setPicture8(data.picture8);
            images.setPicture9(data.picture9);
            console.log("Bilder", images);
        });
    }
    function init() {
        communicate("http://127.0.0.1:8080/data.json");
        picture = document.getElementById("picture");
        picture1 = document.getElementById("picture1");
        picture2 = document.getElementById("picture2");
        picture3 = document.getElementById("picture3");
        buttonLeft = document.getElementById("buttonLeft");
        buttonRight = document.getElementById("buttonRight");
        buttonConfirm = document.getElementById("buttonConfirm");
        buttonLeft.addEventListener("click", function () { setLastPicture(picture); });
        buttonRight.addEventListener("click", function () { setNextPicture(picture); });
        buttonConfirm.addEventListener("click", function () { confirmSelection(); });
        picture1.src = utility_1.UtilityNamespace.getCookie("picture1");
        picture2.src = utility_1.UtilityNamespace.getCookie("picture2");
        picture3.src = utility_1.UtilityNamespace.getCookie("picture3");
        picture1.alt = utility_1.UtilityNamespace.getCookie("picture1");
        picture2.alt = utility_1.UtilityNamespace.getCookie("picture2");
        picture3.alt = utility_1.UtilityNamespace.getCookie("picture3");
    }
    /**
     * Gets the NEXT Picture in line.
     * @param picture - The Image Element of the current picture.
     */
    function getNextPicture(picture) {
        if (picture.alt.toString() == images.picture1) {
            return images.picture2;
        }
        else if (picture.alt.toString() == images.picture2) {
            return images.picture3;
        }
        else if (picture.alt.toString() == images.picture3) {
            return images.picture4;
        }
        else if (picture.alt.toString() == images.picture4) {
            return images.picture5;
        }
        else if (picture.alt.toString() == images.picture5) {
            return images.picture6;
        }
        else if (picture.alt.toString() == images.picture6) {
            return images.picture7;
        }
        else if (picture.alt.toString() == images.picture7) {
            return images.picture8;
        }
        else if (picture.alt.toString() == images.picture8) {
            return images.picture9;
        }
        else {
            return images.picture1;
        }
    }
    /**
     * Gets the LAST Picture in line.
     * @param picture - The Image Element of the current picture.
     */
    function getLastPicture(picture) {
        if (picture.alt.toString() == images.picture2) {
            return images.picture1;
        }
        else if (picture.alt.toString() == images.picture3) {
            return images.picture2;
        }
        else if (picture.alt.toString() == images.picture4) {
            return images.picture3;
        }
        else if (picture.alt.toString() == images.picture5) {
            return images.picture4;
        }
        else if (picture.alt.toString() == images.picture6) {
            return images.picture5;
        }
        else if (picture.alt.toString() == images.picture7) {
            return images.picture6;
        }
        else if (picture.alt.toString() == images.picture8) {
            return images.picture7;
        }
        else if (picture.alt.toString() == images.picture9) {
            return images.picture8;
        }
        else {
            return images.picture9;
        }
    }
    /**
     * Sets the NEXT Picture in line on the current Image Element.
     * @param picture - The Image Element of the current picture.
     */
    function setNextPicture(picture) {
        let nextPicture = getNextPicture(picture);
        picture.src = nextPicture;
        picture.alt = nextPicture;
        console.log(picture.src);
    }
    /**
     * Sets the LAST Picture in line on the current Image Element.
     * @param picture - The Image Element of the current picture.
     */
    function setLastPicture(picture) {
        let lastPicture = getLastPicture(picture);
        picture.src = lastPicture;
        picture.alt = lastPicture;
        console.log(picture.src);
    }
    /**
     * Gets the currently selected picture by reading its alt-value.
     * @param picture - The Image Element of the current picture.
     */
    function getCurrentPicture(picture) {
        return picture.alt;
    }
    /**
     * Confirms your selection and proceeds you to the next page, where you can select the next picture.
     */
    function confirmSelection() {
        var currentPath = window.location.pathname.split('/').pop();
        var currentPicture = getCurrentPicture(picture);
        if (currentPath == "index.html" || currentPath == "") {
            document.cookie = "picture1 = " + currentPicture + "; expires=" + utility_1.UtilityNamespace.inOneHour + "; path=/";
            console.log(document.cookie);
            window.location.href = "./index2.html";
        }
        else if (currentPath == "index2.html") {
            document.cookie = "picture2 = " + currentPicture + "; expires=" + utility_1.UtilityNamespace.inOneHour + "; path=/";
            console.log(document.cookie);
            window.location.href = "./index3.html";
        }
        else if (currentPath == "index3.html") {
            document.cookie = "picture3 = " + currentPicture + "; expires=" + utility_1.UtilityNamespace.inOneHour + "; path=/";
            console.log(document.cookie);
            window.location.href = "./final.html";
        }
        else {
            console.log("Something went wrong with confirming your Selection");
        }
    }
})(bildNamespace || (bildNamespace = {}));

},{"./pictures":2,"./utility":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureNamespace = void 0;
var PictureNamespace;
(function (PictureNamespace) {
    class Pictures {
        constructor() {
            this.picture1 = "default-image.png";
            this.picture2 = "default-image.png";
            this.picture3 = "default-image.png";
            this.picture4 = "default-image.png";
            this.picture5 = "default-image.png";
            this.picture6 = "default-image.png";
            this.picture7 = "default-image.png";
            this.picture8 = "default-image.png";
            this.picture9 = "default-image.png";
        }
        setPicture1(pictureToSet) {
            this.picture1 = pictureToSet;
        }
        setPicture2(pictureToSet) {
            this.picture2 = pictureToSet;
        }
        setPicture3(pictureToSet) {
            this.picture3 = pictureToSet;
        }
        setPicture4(pictureToSet) {
            this.picture4 = pictureToSet;
        }
        setPicture5(pictureToSet) {
            this.picture5 = pictureToSet;
        }
        setPicture6(pictureToSet) {
            this.picture6 = pictureToSet;
        }
        setPicture7(pictureToSet) {
            this.picture7 = pictureToSet;
        }
        setPicture8(pictureToSet) {
            this.picture8 = pictureToSet;
        }
        setPicture9(pictureToSet) {
            this.picture9 = pictureToSet;
        }
    }
    PictureNamespace.Pictures = Pictures;
})(PictureNamespace = exports.PictureNamespace || (exports.PictureNamespace = {}));

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityNamespace = void 0;
var UtilityNamespace;
(function (UtilityNamespace) {
    UtilityNamespace.inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
    UtilityNamespace.inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
    /**
     * Get Cookie Function.
     * https://www.w3schools.com/js/js_cookies.asp
     * @param cname - The name of the Cookie to get.
     * @return Returns the cname Cookie.
     */
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
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
    UtilityNamespace.getCookie = getCookie;
    /**
     * Resets the Cookie.
     * @param cname - The name of the Cookie to reset.
     */
    function resetCookie(cname) {
        document.cookie = cname + " = 'toDelete'; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    UtilityNamespace.resetCookie = resetCookie;
})(UtilityNamespace = exports.UtilityNamespace || (exports.UtilityNamespace = {}));

},{}]},{},[1]);
