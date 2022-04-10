import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
const [modal, setModal] = useRecoilState(modalState);

  return (
    <div>
      {modal && <p>THE MODAL IS OPEN</p>}
    </div>
  )
}
export default Modal
