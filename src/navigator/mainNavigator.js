import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212204Navigator from '../features/BlankScreen212204/navigator';
import CopyOfBlankScreen012203Navigator from '../features/CopyOfBlankScreen012203/navigator';
import BlankScreen012155Navigator from '../features/BlankScreen012155/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212204: { screen: BlankScreen212204Navigator },
CopyOfBlankScreen012203: { screen: CopyOfBlankScreen012203Navigator },
BlankScreen012155: { screen: BlankScreen012155Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
