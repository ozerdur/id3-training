import LviProfileDetailDesign from 'generated/my-components/LviProfileDetail';
import { getCombinedStyle } from '@smartface/extension-utils/lib/getCombinedStyle';

export default class LviProfileDetail extends LviProfileDetailDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}

    set fieldText(value:string){
        this.flProfileDetailItem.field.text = value;
    }
    get fieldText():string{
        return this.flProfileDetailItem.field.text;
    } 

    set valueText(value:string){
        this.flProfileDetailItem.value.text = value;
    }

    get valueText():string{
        return this.flProfileDetailItem.value.text;
    }

    static getHeight(){
        return getCombinedStyle('.lvProfile').height || 0;
    }
}
