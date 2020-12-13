    interface PicturesInterface {
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
    
    class Pictures implements PicturesInterface {

        picture1: string;
        picture2: string;
        picture3: string;
        picture4: string;
        picture5: string;
        picture6: string;
        picture7: string;
        picture8: string;
        picture9: string;

        

        constructor(picture1: string = "", picture2: string = "", picture3: string = "", picture4: string = "", picture5: string = "", picture6: string = "", picture7: string = "", picture8: string = "", picture9: string = ""){
            this.picture1 = picture1;
            this.picture2 = picture2;
            this.picture3 = picture3;
            this.picture4 = picture4;
            this.picture5 = picture5;
            this.picture6 = picture6;
            this.picture7 = picture7;
            this.picture8 = picture8;
            this.picture9 = picture9;
        }

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