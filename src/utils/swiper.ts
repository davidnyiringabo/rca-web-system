    import { StaticImageData } from "next/image";

    export class SwiperNavigation {
        items:StaticImageData[];
        index:number;
        constructor(items:StaticImageData[]){
    this.items = items;
    this.index=0
        }
        handleForward(){
    if(this.index <this.items.length ){
        this.index++;
    }
        }
        handleBackward(){
            if(this.index > 0){
                this.index--;
            }
        }
    }