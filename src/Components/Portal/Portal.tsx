import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import './style/css.css'
import { modal } from "../../helpers/Modal.helpper";

export const Portal = ({ showPortal, children }: { showPortal: boolean, children: JSX.Element | JSX.Element[] }) => {

  useEffect(() => {
    modal.classList.toggle('portal-open')
  }, [showPortal])

  return createPortal(
    children,
    modal
  )

}