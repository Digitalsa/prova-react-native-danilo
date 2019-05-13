/**
 * @format
 */

import { AppRegistry } from "react-native";
import Main from "./src/Main";
import { name as appName } from "./app.json";
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Main);
