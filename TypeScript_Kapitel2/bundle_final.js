(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
var finalNamespace;
(function (finalNamespace) {
    let picture1;
    let picture2;
    let picture3;
    let serverAnswer;
    let buttonSend;
    let buttonReturn;
    window.addEventListener("load", init);
    function init() {
        picture1 = document.getElementById("picture1");
        picture2 = document.getElementById("picture2");
        picture3 = document.getElementById("picture3");
        serverAnswer = document.getElementById("serverAnswer");
        buttonSend = document.getElementById("buttonSend");
        buttonReturn = document.getElementById("buttonReturn");
        buttonSend.addEventListener("click", function () { sendAnswer("https://gis-communication.herokuapp.com"); });
        buttonReturn.addEventListener("click", function () { resetCookies(); });
        displayPictures();
    }
    /**
     * Displays all current pictures already selected.
     */
    function displayPictures() {
        picture1.src = utility_1.UtilityNamespace.getCookie("picture1");
        picture2.src = utility_1.UtilityNamespace.getCookie("picture2");
        picture3.src = utility_1.UtilityNamespace.getCookie("picture3");
    }
    /**
     * Resets all Cookies and proceeds you to the start-page.
     */
    function resetCookies() {
        utility_1.UtilityNamespace.resetCookie("picture1");
        utility_1.UtilityNamespace.resetCookie("picture2");
        utility_1.UtilityNamespace.resetCookie("picture3");
        window.location.href = "./index.html";
    }
    /**
     * Sends an Answer to the given Server and reports its response.
     * @param url - The URL to send the Answer to.
     */
    async function sendAnswer(url) {
        console.log("SendingAnswer");
        let objectToSend = [["picture1", utility_1.UtilityNamespace.getCookie("picture1")], ["picture2", utility_1.UtilityNamespace.getCookie("picture2")], ["picture3", utility_1.UtilityNamespace.getCookie("picture3")],
            ["picture4", utility_1.UtilityNamespace.getCookie("picture4")], ["picture5", utility_1.UtilityNamespace.getCookie("picture5")], ["picture6", utility_1.UtilityNamespace.getCookie("picture6")],
            ["picture7", utility_1.UtilityNamespace.getCookie("picture7")], ["picture8", utility_1.UtilityNamespace.getCookie("picture8")], ["picture9", utility_1.UtilityNamespace.getCookie("picture9")]];
        let query = new URLSearchParams(objectToSend);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        console.log("Response", response);
        response.json()
            .then(data => {
            if (data.error) {
                serverAnswer.textContent = "There was an Error sending your Data!\n" + data.error;
            }
            else if (data.message) {
                serverAnswer.textContent = "Your Data was send successfully!\n" + data.message;
            }
            else {
                serverAnswer.textContent = "Unknown Error!";
            }
        });
    }
})(finalNamespace || (finalNamespace = {}));

},{"./utility":2}],2:[function(require,module,exports){
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
