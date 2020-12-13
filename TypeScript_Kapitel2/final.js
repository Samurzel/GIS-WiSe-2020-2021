"use strict";
//import { UtilityNamespace } from "./utility";
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
        picture1.src = getCookie("picture1");
        picture2.src = getCookie("picture2");
        picture3.src = getCookie("picture3");
    }
    /**
     * Resets all Cookies and proceeds you to the start-page.
     */
    function resetCookies() {
        resetCookie("picture1");
        resetCookie("picture2");
        resetCookie("picture3");
        window.location.href = "./index.html";
    }
    /**
     * Sends an Answer to the given Server and reports its response.
     * @param url - The URL to send the Answer to.
     */
    async function sendAnswer(url) {
        console.log("SendingAnswer");
        let objectToSend = [["picture1", getCookie("picture1")], ["picture2", getCookie("picture2")], ["picture3", getCookie("picture3")],
            ["picture4", getCookie("picture4")], ["picture5", getCookie("picture5")], ["picture6", getCookie("picture6")],
            ["picture7", getCookie("picture7")], ["picture8", getCookie("picture8")], ["picture9", getCookie("picture9")]];
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
//# sourceMappingURL=final.js.map