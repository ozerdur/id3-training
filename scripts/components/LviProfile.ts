import { getCombinedStyle } from '@smartface/extension-utils/lib/getCombinedStyle';
import LviProfileDesign from 'generated/my-components/LviProfile';

export default class LviProfile extends LviProfileDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
    
    set labelText(value:string){
        this.flProfile.labelText = value;
    }
    get labelText():string{
        return this.flProfile.labelText;
    } 

    set imageURL(value:string){
        this.flProfile.imageURL = value;
    }

    get imageURL():string{
        return this.flProfile.imageURL;
    }

    static getHeight(){
        return getCombinedStyle('.lvProfile').height || 0;
    }
    
}
