import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import style from "./apr-notice.module.css";

const APRNoticeModal = ({ isOpen, onCloseModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={style.modal_dialog} onClose={onCloseModal}>
          <div className={style.modal_dialog_container}>
            <Dialog.Overlay className={style.modal_dialog_overlay} />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className={style.modal_dialog_container_spacer}
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={style.modal_dialog_content}>
                <div className={style.modal_dialog_header}>
                  <div className={style.modal_dialog_header_content}>
                    <Dialog.Title as="h3" className={style.modal_dialog_title}>
                      Disclaimer
                    </Dialog.Title>
                    <span
                      onClick={onCloseModal}
                      className={style.modal_dialog_close}
                    >
                      &times;
                    </span>
                  </div>
                </div>

                <div className={style.modal_dialog_body}>
                  <div className={style.modal_dialog_notice}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                    <div>
                      <p>APR and Staking Deposit % are variable and subject to change*</p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default APRNoticeModal;
