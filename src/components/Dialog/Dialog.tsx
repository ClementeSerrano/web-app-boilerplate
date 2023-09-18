import { createPortal } from 'react-dom';
import { useTransition } from 'react-spring';

import DialogHeader from './components/DialogHeader';
import DialogClose from './components/DialogClose';
import DialogTitle from './components/DialogTitle';
import DialogBody from './components/DialogBody';
import DialogFooter from './components/DialogFooter';
import { DialogComponent, DialogProps } from './Dialog.interfaces';
import { DialogBackdrop, DialogContainer } from './Dialog.styles';

/**
 * Inform users about a task and can contain critical information,
 * require decisions, or involve multiple tasks.
 * @param show - Flag that indicates if the dialog should render or not
 * (true renders, false not).
 * @param children - Children to wrap into a dialog.
 * @param style - Styles to add to the main dialog container.
 * @param className - Classnames to add to the main dialog container.
 * @returns The main Dialog component and a subset of utilities sub-components:
 * 1. Dialog.Header: Wrap the header of the dialog here.
 * 2. Dialog.Close: Close button rendered in the header.
 * 3. Dialog.Title: Title typography to render the title of the dialog.
 * 4. Dialog.Body: Wrap the body content of the dialog here.
 * 5. Dialog.Footer: Wrap the footer content of the dialog here.
 * @example
 * A full example of usage is:
 * ```
 * function Component(){
 *   const [showDialog, setShowDialog] = useState(false);
 *
 *   return (
 *     <>
 *       <button onClick={() => setShowDialog(true)}>
 *         open dialog...
 *       </button>
 *
 *       <Dialog show={showDialog}>
 *         <Dialog.Header>
 *           <Dialog.Title>title...</Dialog.Title>
 *           <Dialog.Close onClick={() => setShowDialog(false)} />
 *         </Dialog.Header>
 *         <Dialog.Body>body...</Dialog.Body>
 *         <Dialog.Footer>footer...</Dialog.Footer>
 *       </Dialog>
 *     </>
 *   )
 * }
 * ```
 */
export default function Dialog({
  show,
  children,
  size = 'md',
  style,
  className,
}: DialogProps) {
  const transitions = useTransition(show, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return createPortal(
    <>
      {transitions(
        (transitionStyle, item) =>
          item && (
            <DialogBackdrop
              style={transitionStyle}
              aria-modal="true"
              role="dialog"
            >
              <DialogContainer
                container
                $size={size}
                size="md"
                className={className}
                style={{ ...transitionStyle, ...style }}
              >
                {children}
              </DialogContainer>
            </DialogBackdrop>
          ),
      )}
    </>,
    document.body,
  ) as unknown as DialogComponent;
}

Dialog.Header = DialogHeader;
Dialog.Close = DialogClose;
Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
