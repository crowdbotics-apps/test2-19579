import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CameraNavigator from '../features/Camera/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import MapsNavigator from '../features/Maps/navigator';
import BlankBlueprintNavigator from '../features/BlankBlueprint/navigator';
import SignIn04BlueprintNavigator from '../features/SignIn04Blueprint/navigator';
import SignIn03BlueprintNavigator from '../features/SignIn03Blueprint/navigator';
import SignIn02BlueprintNavigator from '../features/SignIn02Blueprint/navigator';
import SignIn01BlueprintNavigator from '../features/SignIn01Blueprint/navigator';
import Dashboard1BlueprintNavigator from '../features/Dashboard1Blueprint/navigator';
import TimeTrackerBlueprintNavigator from '../features/TimeTrackerBlueprint/navigator';
import AchievementBlueprintNavigator from '../features/AchievementBlueprint/navigator';
import AddItemBlueprintNavigator from '../features/AddItemBlueprint/navigator';
import ContactsBlueprintNavigator from '../features/ContactsBlueprint/navigator';
import FeedBlueprintNavigator from '../features/FeedBlueprint/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import SignUp02BlueprintNavigator from '../features/SignUp02Blueprint/navigator';
import SignUp01BlueprintNavigator from '../features/SignUp01Blueprint/navigator';
import SignIn05BlueprintNavigator from '../features/SignIn05Blueprint/navigator';
import LeaderBoardBlueprintNavigator from '../features/LeaderBoardBlueprint/navigator';
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
Camera: { screen: CameraNavigator },
Calendar: { screen: CalendarNavigator },
Maps: { screen: MapsNavigator },
BlankBlueprint: { screen: BlankBlueprintNavigator },
SignIn04Blueprint: { screen: SignIn04BlueprintNavigator },
SignIn03Blueprint: { screen: SignIn03BlueprintNavigator },
SignIn02Blueprint: { screen: SignIn02BlueprintNavigator },
SignIn01Blueprint: { screen: SignIn01BlueprintNavigator },
Dashboard1Blueprint: { screen: Dashboard1BlueprintNavigator },
TimeTrackerBlueprint: { screen: TimeTrackerBlueprintNavigator },
AchievementBlueprint: { screen: AchievementBlueprintNavigator },
AddItemBlueprint: { screen: AddItemBlueprintNavigator },
ContactsBlueprint: { screen: ContactsBlueprintNavigator },
FeedBlueprint: { screen: FeedBlueprintNavigator },
Messenger: { screen: MessengerNavigator },
SignUp02Blueprint: { screen: SignUp02BlueprintNavigator },
SignUp01Blueprint: { screen: SignUp01BlueprintNavigator },
SignIn05Blueprint: { screen: SignIn05BlueprintNavigator },
LeaderBoardBlueprint: { screen: LeaderBoardBlueprintNavigator },
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
