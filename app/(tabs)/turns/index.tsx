import { TurndownScreen, TurnWorkerScreen } from "@/screens/tabs/turns";
import { useManagementMode } from "@/src";

const IndexScreen = () => {
  const { managementMode } = useManagementMode();
  return managementMode ? <TurndownScreen /> : <TurnWorkerScreen />;
};

export default IndexScreen;
