import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import style from "./confirm-stake.module.css";
import {
  ApprovalState,
  useApproveCallback,
} from "../../hooks/useApproveCallback";
import { utils } from "ethers";
import { useStakeTokens } from "../../hooks/stake/useStakeTokens";
import { useRouter } from "next/router";
import SpinnerAlt from "../../assets/images/spinner-alt.svg";
import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";

const ConfirmStakeModal = ({ isOpen, onCloseModal, stakeAmount, contract }) => {
  const router = useRouter();
  const { send: stake, state: stakeState } = useStakeTokens();
  const {
    approvalState,
    approve,
    state: approveState,
  } = useApproveCallback(stakeAmount, contract);
  const [isApproving, setIsApproving] = useState(false);
  const [isStaking, setIsStaking] = useState(false);

  const [isApproved, setIsApproved] = useState(false);
  const { poolInfo } = usePyroDapp();

  const depositFee = poolInfo ? poolInfo?.depositFee : "300";
  const earlyWithdrawalFee = poolInfo ? poolInfo?.earlyWithdrawFee : "5000";

  const handleApprove = () => {
    try {
      setIsApproving(true);
      approve();
    } catch (e) {
      console.error("Exception Thrown: ", e);
      setIsApproving(false);
    }
  };

  useEffect(() => {
    if (approvalState == ApprovalState.APPROVED) {
      setIsApproved(true);
    } else {
      setIsApproved(false);
    }
  }, [approvalState]);

  useEffect(() => {
    if (isApproving && approveState.status == "Success") {
      alert("Tokens approved successfully");
      setIsApproved(true);
      setIsApproving(false);
    } else if (
      isApproving &&
      (approveState.status == "Fail" || approveState.status == "Exception")
    ) {
      alert("Approval failed");
      setIsApproved(false);
      setIsApproving(false);
    }
  }, [approveState]);

  useEffect(() => {
    if (isStaking && stakeState.status == "Success") {
      alert("Successfully Staked");
      setIsStaking(false);
      router.reload();
    } else if (
      isStaking &&
      (stakeState.status == "Fail" || stakeState.status == "Exception")
    ) {
      alert("Failed to stake");
      setIsStaking(false);
    }
  }, [stakeState]);

  const stakeTokens = () => {
    try {
      setIsStaking(true);
      void stake(utils.parseUnits(stakeAmount, 18));
    } catch (e) {
      setIsStaking(false);
      console.error(e);
    }
  };

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
                      Stake
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
                    <p>
                      Kindly note that there is a {depositFee/100}% Tax for staking
                      Pyro. An early unstake (withdrawal before timer goes off)
                      attracts {earlyWithdrawalFee/100}% tax.
                    </p>
                  </div>
                  <div className={style.modal_dialog_buttons}>
                    <button
                      disabled={
                        // approvalState == ApprovalState.APPROVED ||
                        isApproved || isApproving || isStaking
                      }
                      className="flex justify-center items-center gap-1"
                      onClick={handleApprove}
                    >
                      Approve
                      {isApproving && (
                        <img className="w-6" src={SpinnerAlt.src} alt="" />
                      )}
                    </button>
                    <button
                      disabled={
                        // approvalState != ApprovalState.APPROVED ||
                        !isApproved || isStaking || isApproving
                      }
                      className="flex justify-center items-center gap-1"
                      onClick={stakeTokens}
                    >
                      Stake
                      {isStaking && (
                        <img className="w-6" src={SpinnerAlt.src} alt="" />
                      )}
                    </button>
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

export default ConfirmStakeModal;
