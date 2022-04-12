import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "react";

function Modal() {
const [modal, setModal] = useRecoilState(modalState);

  return (
    <div>
      <h1></h1>
    </div>
  )
}
export default Modal
