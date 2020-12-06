export namespace PictureNamespace {


    export interface PicturesInterface {
        picture1: string;
        picture2: string;
        picture3: string;
        picture4: string;
        picture5: string;
        picture6: string;
        picture7: string;
        picture8: string;
        picture9: string;
    }
    
    export class Pictures implements PicturesInterface {
        picture1: string = "default-image.png";
        picture2: string = "default-image.png";
        picture3: string = "default-image.png";
        picture4: string = "default-image.png";
        picture5: string = "default-image.png";
        picture6: string = "default-image.png";
        picture7: string = "default-image.png";
        picture8: string = "default-image.png";
        picture9: string = "default-image.png";

        setPicture1(pictureToSet: string): void {
            this.picture1 = pictureToSet;
        }
        setPicture2(pictureToSet: string): void {
            this.picture2 = pictureToSet;
        }
        setPicture3(pictureToSet: string): void {
            this.picture3 = pictureToSet;
        }
        setPicture4(pictureToSet: string): void {
            this.picture4 = pictureToSet;
        }
        setPicture5(pictureToSet: string): void {
            this.picture5 = pictureToSet;
        }
        setPicture6(pictureToSet: string): void {
            this.picture6 = pictureToSet;
        }
        setPicture7(pictureToSet: string): void {
            this.picture7 = pictureToSet;
        }
        setPicture8(pictureToSet: string): void {
            this.picture8 = pictureToSet;
        }
        setPicture9(pictureToSet: string): void {
            this.picture9 = pictureToSet;
        }
    }
}
