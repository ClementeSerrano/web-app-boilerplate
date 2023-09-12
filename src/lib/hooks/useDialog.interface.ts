export type UseDialogHook = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
};
