import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import './style/css.css'

const portalRoot = document.querySelector('.portal') as HTMLElement

export const Portal = ({ showPortal, children }: { showPortal: boolean, children: JSX.Element | JSX.Element[] }) => {

  useEffect(() => {
    if (showPortal) {
      portalRoot.classList.add('portal-open')
    }
    else {
      portalRoot.classList.remove('portal-open')
    }
  }, [showPortal])

  return createPortal(
    children,
    portalRoot
  )

}