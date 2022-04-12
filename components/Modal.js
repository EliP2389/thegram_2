import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function Modal() {
  const [modal, setModal] = useRecoilState(modalState)

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setModal}
      >
        <h1>Hello World</h1>
      </Dialog>
    </Transition.Root>
  )
}
export default Modal
