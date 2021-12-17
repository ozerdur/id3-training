import FlProfileDesign from 'generated/my-components/FlProfile';
import Image from '@smartface/native/ui/image';
import ImageView from '@smartface/native/ui/imageview';
import { getCombinedStyle } from '@smartface/extension-utils/lib/getCombinedStyle';

export default class FlProfile extends FlProfileDesign {
	pageName?: string | undefined;
    private _imgUrl = '';
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}

    set labelText(value:string){
        this.lbProfile.text = value;
    }
    get labelText():string{
        return this.lbProfile.text;
    } 

    set imageURL(value:string){
        this.imgIcon.loadFromUrl({
            url: value,
            onSuccess: ()=>{
                //@ts-ignore
                if(this.imgIcon?.android.round){
                    //@ts-ignore
                    this.imgIcon.android.round(30);
                }
            }
        });
        this._imgUrl = value;
    }

    get imageURL():string{
        return this._imgUrl;
    }
    
}
