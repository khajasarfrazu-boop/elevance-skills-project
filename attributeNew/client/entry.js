
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e48b94b4b from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e5de192fd from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/FormCss.js';
import e1b0246a4 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import e1d7c79e8 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import e0c08c7ed from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import e3b65c6ef from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/TailwindCss.js';
import e108a4227 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e51a10b58 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e334c582c from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/Avaibility.js';
import e325558ec from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/General.js';
import e091a7129 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/PageHeading.js';
import e7299d5a5 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeNew/AttributeNewForm.js';
import e432c1f7a from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e2005dd07 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e28dc02c9 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e3d074af3 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e64dcff56 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e2b21b74d from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e453de9f2 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e18d66613 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import e15962edc from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Survey.js';
import e6315b238 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e3b623b93 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e2877d51f from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e54ebb624 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e77604349 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e280a347c from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e07958b6b from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e67404b97 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e10106bfc from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import e281f9e5a from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import e5077e91a from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import e15549945 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import e5a2d2c97 from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import e221633bd from 'file:///C:/Users/Sarfaraz/evershop_project/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
Area.defaultProps.components = {
  header: {
    e48b94b4b: {
      id: 'e48b94b4b',
      sortOrder: 50,
      component: { default: e48b94b4b }
    },
    e3d074af3: {
      id: 'e3d074af3',
      sortOrder: 10,
      component: { default: e3d074af3 }
    },
    e18d66613: {
      id: 'e18d66613',
      sortOrder: 20,
      component: { default: e18d66613 }
    }
  },
  head: {
    e5de192fd: {
      id: 'e5de192fd',
      sortOrder: 5,
      component: { default: e5de192fd }
    },
    e1b0246a4: {
      id: 'e1b0246a4',
      sortOrder: 5,
      component: { default: e1b0246a4 }
    },
    e0c08c7ed: {
      id: 'e0c08c7ed',
      sortOrder: 5,
      component: { default: e0c08c7ed }
    },
    e3b65c6ef: {
      id: 'e3b65c6ef',
      sortOrder: 1,
      component: { default: e3b65c6ef }
    }
  },
  body: {
    e1d7c79e8: {
      id: 'e1d7c79e8',
      sortOrder: 10,
      component: { default: e1d7c79e8 }
    },
    e2b21b74d: {
      id: 'e2b21b74d',
      sortOrder: 10,
      component: { default: e2b21b74d }
    }
  },
  adminMenu: {
    e108a4227: {
      id: 'e108a4227',
      sortOrder: 20,
      component: { default: e108a4227 }
    },
    e2005dd07: {
      id: 'e2005dd07',
      sortOrder: 60,
      component: { default: e2005dd07 }
    },
    e453de9f2: {
      id: 'e453de9f2',
      sortOrder: 10,
      component: { default: e453de9f2 }
    },
    e3b623b93: {
      id: 'e3b623b93',
      sortOrder: 40,
      component: { default: e3b623b93 }
    },
    e2877d51f: {
      id: 'e2877d51f',
      sortOrder: 30,
      component: { default: e2877d51f }
    },
    e54ebb624: {
      id: 'e54ebb624',
      sortOrder: 50,
      component: { default: e54ebb624 }
    },
    e07958b6b: {
      id: 'e07958b6b',
      sortOrder: 500,
      component: { default: e07958b6b }
    }
  },
  quickLinks: {
    e51a10b58: {
      id: 'e51a10b58',
      sortOrder: 20,
      component: { default: e51a10b58 }
    },
    e77604349: {
      id: 'e77604349',
      sortOrder: 30,
      component: { default: e77604349 }
    }
  },
  rightSide: {
    e334c582c: {
      id: 'e334c582c',
      sortOrder: 10,
      component: { default: e334c582c }
    }
  },
  leftSide: {
    e325558ec: {
      id: 'e325558ec',
      sortOrder: 10,
      component: { default: e325558ec }
    }
  },
  content: {
    e091a7129: {
      id: 'e091a7129',
      sortOrder: 5,
      component: { default: e091a7129 }
    },
    e7299d5a5: {
      id: 'e7299d5a5',
      sortOrder: 10,
      component: { default: e7299d5a5 }
    },
    e15962edc: {
      id: 'e15962edc',
      sortOrder: 999,
      component: { default: e15962edc }
    }
  },
  settingPageMenu: {
    e432c1f7a: {
      id: 'e432c1f7a',
      sortOrder: 15,
      component: { default: e432c1f7a }
    },
    e280a347c: {
      id: 'e280a347c',
      sortOrder: 10,
      component: { default: e280a347c }
    },
    e67404b97: {
      id: 'e67404b97',
      sortOrder: 5,
      component: { default: e67404b97 }
    },
    e10106bfc: {
      id: 'e10106bfc',
      sortOrder: 20,
      component: { default: e10106bfc }
    }
  },
  footerLeft: {
    e28dc02c9: {
      id: 'e28dc02c9',
      sortOrder: 10,
      component: { default: e28dc02c9 }
    },
    e6315b238: {
      id: 'e6315b238',
      sortOrder: 20,
      component: { default: e6315b238 }
    }
  },
  adminNavigation: {
    e64dcff56: {
      id: 'e64dcff56',
      sortOrder: 10,
      component: { default: e64dcff56 }
    }
  },
  '*': {
    e281f9e5a: {
      id: 'e281f9e5a',
      sortOrder: 0,
      component: { default: e281f9e5a }
    },
    e5077e91a: {
      id: 'e5077e91a',
      sortOrder: 0,
      component: { default: e5077e91a }
    },
    e15549945: {
      id: 'e15549945',
      sortOrder: 0,
      component: { default: e15549945 }
    },
    e5a2d2c97: {
      id: 'e5a2d2c97',
      sortOrder: 0,
      component: { default: e5a2d2c97 }
    },
    e221633bd: {
      id: 'e221633bd',
      sortOrder: 0,
      component: { default: e221633bd }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );