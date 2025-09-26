import { InviteScreen, WorkerInviteScreen } from "@/screens";
import { useManagementMode } from "@/src/contexts";

const IndexScreen = () => {
  const { managementMode } = useManagementMode();

  return managementMode ? <InviteScreen /> : <WorkerInviteScreen />;
};

export default IndexScreen;
