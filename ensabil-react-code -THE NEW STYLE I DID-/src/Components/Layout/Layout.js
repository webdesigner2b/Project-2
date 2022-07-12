import React, { Fragment } from 'react';

import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';
import PreNavBar from '../Shared/PreNavBar/PreNavBar';

import { footerData, navBarData, preNavBarData } from '../../Pages/Layout/LayoutData';

const Layout = (props) => {
  const { children, pathName } = props

  return (
    <Fragment>
      <PreNavBar data={preNavBarData} />
      <NavigationBar data={navBarData} routeToHightlight={pathName} />
      {children}
      <Footer data={footerData} />
    </Fragment>
  );
}

export default Layout;
