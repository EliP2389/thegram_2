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
        <div
          className="flex min-h-[800px] items-end justify-center 
        px-4 pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in  duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
              
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Modal
