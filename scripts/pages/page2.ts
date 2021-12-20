import Page2Design from 'generated/pages/page2';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import touch from '@smartface/extension-utils/lib/touch';
import Image from '@smartface/native/ui/image';
import PageTitleLayout from 'components/PageTitleLayout';
import componentContextPatch from '@smartface/contx/lib/smartface/componentContextPatch';
import Color from '@smartface/native/ui/color';
import System from '@smartface/native/device/system';

//import {getCombinedStyle} from '@smartface/extension-utils/lib/getCombinedStyle';
//import Simple_listviewitem from 'components/Simple_listviewitem';
import LviProfile from 'components/LviProfile';
import * as RandomServiceUser from 'api/randomuser';
import { isTemplateExpression } from 'typescript';

type AsyncReturnType<T extends (...args:any) => any> =
T extends (...args:any) => Promise<infer U> ? U :
T extends (...args:any) => infer U ? U : 
any;




export default class Page2 extends Page2Design {
  router: any;
  routeData: any;
  parentController: any;
  dataList: AsyncReturnType<typeof RandomServiceUser.getUsers>['results'] = [];
  
 // dataList = Array(10).fill(null).slice(1).map((_, index) => ({ text: `id3 & Smartface = ${index}`}));
  constructor() {
    super();
    // Overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // Overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  }

  initlistView() {
        this.lvMain.onRowHeight = (index:number)=>{
            return LviProfile.getHeight();
        }
        
        this.lvMain.onRowBind = (item: LviProfile, index: number) => {
            item.labelText = this.dataList[index]?.name?.first || '';
            item.imageURL = this.dataList[index]?.picture.large;
        }

        this.lvMain.onPullRefresh = () => {
            //this.refreshListView();
            this.lvMain.stopRefresh();
        };

        this.lvMain.onRowSelected= (item: LviProfile, index: number) => {
            this.router.push('/pages/profileDetail', { userData: this.dataList[index]});
        }
        
  }

  refreshListView() {
        this.lvMain.itemCount = this.dataList.length;
        this.lvMain.refreshData();
  }
 
  async serviceCall(){
      const result = await RandomServiceUser.getUsers(10);
      ///console.log(result);
      this.dataList =result.results;
      this.refreshListView();
  }

}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 */
function onShow(this: Page2, superOnShow: () => void) {
  superOnShow();
  this.headerBar.titleLayout.applyLayout();
  this.routeData && console.info(this.routeData.message);
  this.serviceCall();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad(this: Page2, superOnLoad: () => void) {
  superOnLoad();
  
  let headerBar;
  this.headerBar.titleLayout = new PageTitleLayout();
  componentContextPatch(this.headerBar.titleLayout, 'titleLayout');
  this.headerBar.setItems([
    new HeaderBarItem({
      title: 'Option',
      onPress: () => {
        console.warn('You pressed Option item!');
      },
    }),
  ]);
  if (System.OS === 'Android') {
    headerBar = this.headerBar;
    headerBar.setLeftItem(
      new HeaderBarItem({
        onPress: () => {
          this.router.goBack();
        },
        image: Image.createFromFile('images://arrow_back.png'),
      }),
    );
  } else {
    headerBar = this.parentController.headerBar;
  }
  headerBar.itemColor = Color.WHITE;
  
  this.initlistView();

}
