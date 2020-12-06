import { UtilityNamespace } from "./utility";

namespace FinalNamespace {
    let picture1: HTMLImageElement;
    let picture2: HTMLImageElement;
    let picture3: HTMLImageElement;
    let serverAnswer: HTMLSpanElement;
    let buttonSend: HTMLInputElement;
    let buttonReturn: HTMLInputElement;
    window.addEventListener("load", init);

    function init(): void {
        picture1 = <HTMLImageElement>document.getElementById("picture1");
        picture2 = <HTMLImageElement>document.getElementById("picture2");
        picture3 = <HTMLImageElement>document.getElementById("picture3");
        serverAnswer = <HTMLInputElement>document.getElementById("serverAnswer");
        buttonSend = <HTMLInputElement>document.getElementById("buttonSend");
        buttonReturn = <HTMLInputElement>document.getElementById("buttonReturn");
        buttonSend.addEventListener("click", function() {sendAnswer("https://gis-communication.herokuapp.com"); });
        buttonReturn.addEventListener("click", function() {resetCookies(); });
        displayPictures();
    }

    /**
     * Displays all current pictures already selected.
     */
    function displayPictures(): void {
        picture1.src = UtilityNamespace.getCookie("picture1");
        picture2.src = UtilityNamespace.getCookie("picture2");
        picture3.src = UtilityNamespace.getCookie("picture3");
    }

    /**
     * Resets all Cookies and proceeds you to the start-page.
     */
    function resetCookies(): void {
        UtilityNamespace.resetCookie("picture1");
        UtilityNamespace.resetCookie("picture2");
        UtilityNamespace.resetCookie("picture3");
        window.location.href = "./index.html";
    }

    /**
     * Sends an Answer to the given Server and reports its response.
     * @param url - The URL to send the Answer to.
     */
    async function sendAnswer(url: string): Promise<void> {
        console.log("SendingAnswer");
        let objectToSend: string[][] = [["picture1", UtilityNamespace.getCookie("picture1")], ["picture2", UtilityNamespace.getCookie("picture2")], ["picture3", UtilityNamespace.getCookie("picture3")]
        , ["picture4", UtilityNamespace.getCookie("picture4")], ["picture5", UtilityNamespace.getCookie("picture5")], ["picture6", UtilityNamespace.getCookie("picture6")]
        , ["picture7", UtilityNamespace.getCookie("picture7")], ["picture8", UtilityNamespace.getCookie("picture8")], ["picture9", UtilityNamespace.getCookie("picture9")]];
        let query: URLSearchParams = new URLSearchParams(<any>objectToSend);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        console.log("Response", response);
        response.json()
        .then(data => {
            if (data.error) {
                serverAnswer.textContent = "There was an Error sending your Data!\n" + data.error;
            } else if (data.message) {
                serverAnswer.textContent = "Your Data was send successfully!\n" + data.message;
            } else {
                serverAnswer.textContent = "Unknown Error!";
            }
        });


    }
}