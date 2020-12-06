import { PictureNamespace } from "./pictures";
import { UtilityNamespace } from "./utility";

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

namespace bildNamespace {
    let picture: HTMLImageElement;
    let picture1: HTMLImageElement;
    let picture2: HTMLImageElement;
    let picture3: HTMLImageElement;
    let buttonLeft: HTMLInputElement;
    let buttonRight: HTMLInputElement;
    let buttonConfirm: HTMLInputElement;
    let images: PictureNamespace.Pictures = new PictureNamespace.Pictures();

    window.addEventListener("load", init);

    /**
     * Used to communicate with an URL and read its response.
     * Used to get the .JSON file.
     * @param _url - The URL where the file to request lies.
     */
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
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

    function init(): void {
        communicate("http://127.0.0.1:8080/data.json");
        picture = <HTMLImageElement>document.getElementById("picture");
        picture1 = <HTMLImageElement>document.getElementById("picture1");
        picture2 = <HTMLImageElement>document.getElementById("picture2");
        picture3 = <HTMLImageElement>document.getElementById("picture3");
        buttonLeft = <HTMLInputElement>document.getElementById("buttonLeft");
        buttonRight = <HTMLInputElement>document.getElementById("buttonRight");
        buttonConfirm = <HTMLInputElement>document.getElementById("buttonConfirm");
        buttonLeft.addEventListener("click", function() {setLastPicture(picture); });
        buttonRight.addEventListener("click", function() {setNextPicture(picture); });
        buttonConfirm.addEventListener("click", function() {confirmSelection(); });
        picture1.src = UtilityNamespace.getCookie("picture1");
        picture2.src = UtilityNamespace.getCookie("picture2");
        picture3.src = UtilityNamespace.getCookie("picture3");
        picture1.alt = UtilityNamespace.getCookie("picture1");
        picture2.alt = UtilityNamespace.getCookie("picture2");
        picture3.alt = UtilityNamespace.getCookie("picture3");
    }

    /**
     * Gets the NEXT Picture in line.
     * @param picture - The Image Element of the current picture. 
     */
    function getNextPicture(picture: HTMLImageElement): string {
        if (picture.alt.toString() == images.picture1) {
            return images.picture2;
        } else if (picture.alt.toString() == images.picture2) {
            return images.picture3;
        } else if (picture.alt.toString() == images.picture3) {
            return images.picture4;
        } else if (picture.alt.toString() == images.picture4) {
            return images.picture5;
        } else if (picture.alt.toString() == images.picture5) {
            return images.picture6;
        } else if (picture.alt.toString() == images.picture6) {
            return images.picture7;
        } else if (picture.alt.toString() == images.picture7) {
            return images.picture8;
        } else if (picture.alt.toString() == images.picture8) {
            return images.picture9;
        } else {
            return images.picture1;
        }
    }

    /**
     * Gets the LAST Picture in line.
     * @param picture - The Image Element of the current picture. 
     */
    function getLastPicture(picture: HTMLImageElement): string {
        if (picture.alt.toString() == images.picture2) {
            return images.picture1;
        } else if (picture.alt.toString() == images.picture3) {
            return images.picture2;
        } else if (picture.alt.toString() == images.picture4) {
            return images.picture3;
        } else if (picture.alt.toString() == images.picture5) {
            return images.picture4;
        } else if (picture.alt.toString() == images.picture6) {
            return images.picture5;
        } else if (picture.alt.toString() == images.picture7) {
            return images.picture6;
        } else if (picture.alt.toString() == images.picture8) {
            return images.picture7;
        } else if (picture.alt.toString() == images.picture9) {
            return images.picture8;
        } else {
            return images.picture9;
        }
    }

    /**
     * Sets the NEXT Picture in line on the current Image Element.
     * @param picture - The Image Element of the current picture. 
     */
    function setNextPicture(picture: HTMLImageElement): void {
        let nextPicture: string = getNextPicture(picture);
        picture.src = nextPicture;
        picture.alt = nextPicture;
        console.log(picture.src);
    }

    /**
     * Sets the LAST Picture in line on the current Image Element.
     * @param picture - The Image Element of the current picture. 
     */
    function setLastPicture(picture: HTMLImageElement): void {
        let lastPicture: string = getLastPicture(picture);
        picture.src = lastPicture;
        picture.alt = lastPicture;
        console.log(picture.src);
    }

    /**
     * Gets the currently selected picture by reading its alt-value.
     * @param picture - The Image Element of the current picture. 
     */
    function getCurrentPicture(picture: HTMLImageElement): string {
        return picture.alt;
    }

    /**
     * Confirms your selection and proceeds you to the next page, where you can select the next picture.
     */
    function confirmSelection(): void {
        var currentPath: string = window.location.pathname.split('/').pop();
        var currentPicture: string = getCurrentPicture(picture);
        if (currentPath == "index.html" || currentPath == "") {
            document.cookie = "picture1 = " + currentPicture + "; expires=" + UtilityNamespace.inOneHour + "; path=/";
            console.log(document.cookie);
            window.location.href = "./index2.html";
        } else if (currentPath == "index2.html") {
            document.cookie = "picture2 = " + currentPicture + "; expires=" + UtilityNamespace.inOneHour + "; path=/";
            console.log(document.cookie);
            window.location.href = "./index3.html";
        } else if (currentPath == "index3.html") {
            document.cookie = "picture3 = " + currentPicture + "; expires=" + UtilityNamespace.inOneHour + "; path=/";
            console.log(document.cookie);
            window.location.href = "./final.html";
        } else {
            console.log("Something went wrong with confirming your Selection");
        }
    }
}