import { Slider } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Localhost, useEthers, useTokenBalance } from "@usedapp/core";
import React, { useState, useEffect } from "react";
import { TOKEN_ADDRESS } from "../../constants/address";
import { useUnstakeTokens } from "../../hooks/stake/useUnstakeTokens";
import { useStakeContract } from "../../hooks/useContract";
import style from "./stake-widget.module.css";
import {
  compareNonTokenWithToken,
  genFormatter,
  onInputNumberChange,
} from "../../utils/utils";
import { formatUnits } from "ethers/lib/utils";
import { BigNumber } from "ethers";
import SpinnerAlt from "../../assets/images/spinner-alt.svg";
import WalletManager from "../WalletManager";
import ConfirmStakeModal from "../ConfirmStakeModal";
import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";

const StakeWidget = ({ stakedTokens, rewards }) => {
  const { account } = useEthers();
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const stakeContract = useStakeContract();
  const balance = useTokenBalance(TOKEN_ADDRESS[Localhost.chainId], account);

  const [formattedBalance, setFormattedBalance] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUnstaking, setIsUnstaking] = useState(false);

  const { isChainError } = usePyroDapp();

  const { send: unstakeToken, state: unstakeState } = useUnstakeTokens();

  useEffect(() => {
    if (isUnstaking && unstakeState.status == "Success") {
      alert("Successfully unstaked");
      setIsUnstaking(false);
      setAmount(0);
    } else if (
      isUnstaking &&
      (unstakeState.status == "Fail" || unstakeState.status == "Exception")
    ) {
      alert("Failed to unstake tokens");
      setIsUnstaking(false);
    }
  }, [unstakeState]);

  useEffect(() => {
    if (balance) {
      setFormattedBalance(formatUnits(balance, 18));
    } else {
      setFormattedBalance(0);
    }
  }, [balance]);

  useEffect(() => {
    if (account) {
      if (amount <= 0) {
        setErrorMessage("Enter an amount");
      } else if (
        balance != undefined &&
        compareNonTokenWithToken(balance, amount, 18) == -1 &&
        stakedTokens != undefined &&
        compareNonTokenWithToken(stakedTokens, amount, 18) == -1
      ) {
        setErrorMessage("Insufficient balance");
      } else {
        setErrorMessage("");
      }
    }
  }, [amount]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeWalletModal = () => {
    setWalletModalOpen(false);
  };

  const handleUnstakeToken = () => {
    setIsUnstaking(true);
    try {
      void unstakeToken();
    } catch (e) {
      console.error("Exception Thrown: ", e);
      setIsUnstaking(false);
    }
  };

  const handleStakeAmountChange = (value) => {
    setSliderValue(0);
    setAmount(value);
  };

  const setMaxValue = () => {
    setAmount(formattedBalance);
  };

  const setStakeValue = (value) => {
    setSliderValue(value);
    if (balance) {
      const val = BigNumber.from(balance.mul(value).div(100));
      const res = formatUnits(val, 18);
      setAmount(value == 100 ? res : (+res).toFixed(4));
    }
  };

  const CustomSlider = withStyles({
    rail: {
      color: "#4d4d4d",
      height: 7,
    },
    track: {
      backgroundImage:
        "linear-gradient(180deg, #FA6921 0%, #FA2032 100%, #FA2032 100%)",
      height: 7,
      border: "0px !important",
    },
    thumb: {
      width: 10,
      height: 10,
      color: "#ffffff",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "0px 0px 0px 8px rgba(255, 255, 255, 0.16) !important",
      },
    },
    mark: {
      color: "#4d4d4d !important",
      height: "4px !important",
      width: 1,
    },
    markLabel: {
      color: "#4d4d4d !important",
      fontFamily: "Nexa-Regular, sans-serif !important",
      fontSize: "12px !important",
    },
  })(Slider);

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.stake__header}>
          <p className={style.stake__title}>Stake</p>
          <p className={style.stake__balance}>
            Balance:{genFormatter.format(formattedBalance)}
          </p>
        </div>
        <div className={style.stake__form}>
          <input
            className={style.stake__input}
            type="text"
            value={amount}
            onChange={(e) => {
              onInputNumberChange(e, handleStakeAmountChange);
            }}
          />
          <div className={style.stake__slider}>
            <CustomSlider
              aria-label="amount"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={10}
              min={0}
              max={100}
              marks={marks}
              value={sliderValue}
              onChange={(e) => setStakeValue(e.target.value)}
            />
            <button onClick={() => setMaxValue()}>Max</button>
          </div>
          <p className="pt-1 nexa-reg-15 text-red-600">{errorMessage}</p>
        </div>
        <div className={style.stake__buttons}>
          {account ? (
            <>
              <button
                onClick={() => {
                  setModalOpen(true);
                }}
                disabled={
                  amount <= 0 ||
                  compareNonTokenWithToken(balance, amount, 18) == -1 ||
                  isUnstaking || isChainError
                }
              >
                Stake
              </button>
              <button
                disabled={
                  stakedTokens == undefined || stakedTokens <= 0 ||
                  isUnstaking || isChainError
                }
                onClick={handleUnstakeToken}
                className="flex justify-center items-center gap-1"
              >
                Unstake
                {isUnstaking && (
                  <img className="w-6" src={SpinnerAlt.src} alt="" />
                )}
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setWalletModalOpen(true);
              }}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
      <WalletManager isOpen={walletModalOpen} onCloseModal={closeWalletModal} />
      <ConfirmStakeModal
        isOpen={modalOpen}
        onCloseModal={closeModal}
        stakeAmount={amount}
        contract={stakeContract?.address}
      />
    </div>
  );
};

export default StakeWidget;
