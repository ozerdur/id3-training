import FlProfileDetailItemDesign from 'generated/my-components/FlProfileDetailItem';

export default class FlProfileDetailItem extends FlProfileDetailItemDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
}
