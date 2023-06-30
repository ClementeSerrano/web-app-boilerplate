import { useState } from 'react';

import { UseDialogHook } from './useDialog.interface';

export function useDialog(initialShow = false): UseDialogHook {
  const [show, setShow] = useState(initialShow);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return { show, setShow, handleOpen, handleClose };
}
