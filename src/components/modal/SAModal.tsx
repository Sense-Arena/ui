import { Backdrop, Box, Modal } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import { forwardRef, ReactNode } from 'react';
import { modalBox } from './modal.css';

interface FadeProps {
  children?: ReactNode;
  in: boolean;
  onEnter?: () => void;
  onExited?: () => void;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

type ModalProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  children?: ReactNode;
};

export const SAModal = ({ handleClose, handleOpen, open, children }: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        zIndex: '10998',
      }}
    >
      <Fade in={open}>
        <Box className={modalBox}>{children}</Box>
      </Fade>
    </Modal>
  );
};
