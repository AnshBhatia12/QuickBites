'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const portalTarget = document.getElementById('overlays')!;

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    </>,
    portalTarget
  );
};

export default Modal;
