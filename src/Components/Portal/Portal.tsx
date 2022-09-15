import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import './style/css.css'

const portalRoot = document.getElementById("portal") as HTMLElement

export const Portal = ({ showPortal, children }: { showPortal: boolean, children: JSX.Element | JSX.Element[] }) => {

  useEffect(() => {
    portalRoot.style.display = showPortal ? 'block' : 'none'
  }, [showPortal])

  return createPortal(
    children,
    portalRoot
  )

}