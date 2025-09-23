export interface ChecklistsFormRefHandler {
  submitData: (
    callback: (success: boolean, checklist_id?: string) => void
  ) => void;
}
