'use client'

import Image from "next/image"
import { useState } from "react";
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { Portal } from '@mui/base/Portal';
import { FocusTrap } from '@mui/base/FocusTrap';
import { Button } from '@mui/base/Button';
import { unstable_useModal as useModal } from '@mui/base/unstable_useModal';
import Fade from '@mui/material/Fade';

interface GoWorkProps {
    _id: string,
    name: string,
    operatingHours: string,
    address: string,
    province: string,
    postelcode: string,
    tel: string,
    picture: string,
    __v: string,
    id: string
}

export default function ThumbnailCard(props: GoWorkProps) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='w-[300px] h-[350px] bg-white flex-col text-center items-center rounded-2xl my-10 mx-5'>
            <div className="w-[300px] h-[300px] z-10 rounded-t-2xl overflow-hidden relative">
                <Image src={props.picture}
                alt='goWork Picture'
                fill={true}
                className='object-cover rounded-t-2xl'/>
            </div>

            <TriggerButton onClick={handleOpen} className="w-[300px] h-[50px] bg-1975FF hover:bg-6FA9FF text-white font-semibold z-10 rounded-b-2xl flex flex-row place-content-center py-3">
                    {props.name} <Image src='/whiteArrow.png' alt="arrow" width={20} height={20} className="ml-1"/>
            </TriggerButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <ModalContent sx={style}>
                        <h3 id="transition-modal-title" className="modal-title">
                            {props.name}
                        </h3>
                        <span id="transition-modal-description" className="modal-description">
                            <div className="flex flex-row">
                                {props.address}
                                {props.province}
                                {props.postelcode}
                                {props.operatingHours}
                                {props.tel}
                            </div>
                        </span>
                    </ModalContent>
                </Fade>
              </Modal>
        </div>
    )
}

interface ModalProps {
    children: React.ReactElement;
    closeAfterTransition?: boolean;
    container?: Element | (() => Element | null) | null;
    disableAutoFocus?: boolean;
    disableEnforceFocus?: boolean;
    disableEscapeKeyDown?: boolean;
    disablePortal?: boolean;
    disableRestoreFocus?: boolean;
    disableScrollLock?: boolean;
    hideBackdrop?: boolean;
    keepMounted?: boolean;
    onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
    onTransitionEnter?: () => void;
    onTransitionExited?: () => void;
    open: boolean;
  }
  
  const Modal = React.forwardRef(function Modal(
    props: ModalProps,
    forwardedRef: React.ForwardedRef<HTMLElement>,
  ) {
    const {
      children,
      closeAfterTransition = false,
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onClose,
      open,
      onTransitionEnter,
      onTransitionExited,
      ...other
    } = props;
  
    const propsWithDefaults = {
      ...props,
      closeAfterTransition,
      disableAutoFocus,
      disableEnforceFocus,
      disableEscapeKeyDown,
      disablePortal,
      disableRestoreFocus,
      disableScrollLock,
      hideBackdrop,
      keepMounted,
    };
  
    const {
      getRootProps,
      getBackdropProps,
      getTransitionProps,
      portalRef,
      isTopModal,
      exited,
      hasTransition,
    } = useModal({
      ...propsWithDefaults,
      rootRef: forwardedRef,
    });
  
    const classes = {
      hidden: !open && exited,
    };
  
    const childProps: {
      onEnter?: () => void;
      onExited?: () => void;
      tabIndex?: string;
    } = {};
    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = '-1';
    }
  
    // It's a Transition like component
    if (hasTransition) {
      const { onEnter, onExited } = getTransitionProps();
      childProps.onEnter = onEnter;
      childProps.onExited = onExited;
    }
  
    const rootProps = {
      ...other,
      className: clsx(classes),
      ...getRootProps(other),
    };
  
    const backdropProps = {
      open,
      ...getBackdropProps(),
    };
  
    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }
  
    return (
      <Portal ref={portalRef} container={container} disablePortal={disablePortal}>
        {/*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */}
        <CustomModalRoot {...rootProps}>
          {!hideBackdrop ? <CustomModalBackdrop {...backdropProps} /> : null}
          <FocusTrap
            disableEnforceFocus={disableEnforceFocus}
            disableAutoFocus={disableAutoFocus}
            disableRestoreFocus={disableRestoreFocus}
            isEnabled={isTopModal}
            open={open}
          >
            {React.cloneElement(children, childProps)}
          </FocusTrap>
        </CustomModalRoot>
      </Portal>
    );
  });
  
  const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
    (props, ref) => {
      const { open, ...other } = props;
      return (
        <Fade in={open}>
          <div ref={ref} {...other} />
        </Fade>
      );
    },
  );
  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };
  
  const ModalContent = styled('div')(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#FFF'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 4px 12px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.20)'
    };
    padding: 1rem;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
  
  
    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-right: 0.5rem;
    }
  
    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
    }
    `,
  );
  
  const CustomModalRoot = styled('div')`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const CustomModalBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  
  const TriggerButton = styled(Button)(
    ({ theme }) => `
    cursor: pointer;
  `,
  );