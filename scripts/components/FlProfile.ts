import FlProfileDesign from 'generated/my-components/FlProfile';

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
            url: value
        });
        this._imgUrl = value;
    }

    get imageURL():string{
        return this._imgUrl;
    }
    
}
