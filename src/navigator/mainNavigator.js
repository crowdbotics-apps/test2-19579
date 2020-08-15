import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ProfilesBlueprintNavigator from '../features/ProfilesBlueprint/navigator';
import ArticlesBlueprintNavigator from '../features/ArticlesBlueprint/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import NotificationsBlueprintNavigator from '../features/NotificationsBlueprint/navigator';
import Settings90762Navigator from '../features/Settings90762/navigator';
import Settings90743Navigator from '../features/Settings90743/navigator';
import Dashboard21990728Navigator from '../features/Dashboard21990728/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
ArticlesBlueprint: { screen: ArticlesBlueprintNavigator },
Tutorial: { screen: TutorialNavigator },
NotificationsBlueprint: { screen: NotificationsBlueprintNavigator },
Settings90762: { screen: Settings90762Navigator },
Settings90743: { screen: Settings90743Navigator },
Dashboard21990728: { screen: Dashboard21990728Navigator },

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
