//import { UtilityNamespace } from "./utility";

namespace finalNamespace {
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
        picture1.src = getCookie("picture1");
        picture2.src = getCookie("picture2");
        picture3.src = getCookie("picture3");
    }

    /**
     * Resets all Cookies and proceeds you to the start-page.
     */
    function resetCookies(): void {
        resetCookie("picture1");
        resetCookie("picture2");
        resetCookie("picture3");
        window.location.href = "./index.html";
    }

    /**
     * Sends an Answer to the given Server and reports its response.
     * @param url - The URL to send the Answer to.
     */
    async function sendAnswer(url: string): Promise<void> {
        console.log("SendingAnswer");
        let objectToSend: string[][] = [["picture1", getCookie("picture1")], ["picture2", getCookie("picture2")], ["picture3", getCookie("picture3")]
        , ["picture4", getCookie("picture4")], ["picture5", getCookie("picture5")], ["picture6", getCookie("picture6")]
        , ["picture7", getCookie("picture7")], ["picture8", getCookie("picture8")], ["picture9", getCookie("picture9")]];
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