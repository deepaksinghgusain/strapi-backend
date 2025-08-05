import AuthLogo from './extensions/logo-admin.svg';
import MenuLogo from './extensions/logo-admin.svg';
import favicon from './extensions/favicon.ico';
import DownloadExcelButton from "./extensions/DownloadExcelButton/index"

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
  },

  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "DownloadExcelButton",
      Component: DownloadExcelButton,
    });
  },
};