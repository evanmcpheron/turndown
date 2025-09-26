import { TurnIdWorkerScreen } from "@/screens/tabs/turns";
import { useManagementMode } from "@/src";
import { Label } from "@/src/shared/ui/data-display/font/font.component";

const IndexScreen = () => {
  const { managementMode } = useManagementMode();
  return managementMode ? <Label>Turn [ID]</Label> : <TurnIdWorkerScreen />;
};

export default IndexScreen;
