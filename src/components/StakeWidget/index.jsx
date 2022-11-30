import { Slider } from "@mui/material";
import {withStyles} from "@mui/styles";
import React from "react";
import style from "./stake-widget.module.css";

const StakeWidget = () => {

  const CustomSlider = withStyles({
    rail: {
      color: "#4d4d4d",
      height: 7,
    },
    track: {
      backgroundImage: "linear-gradient(180deg, #FA6921 0%, #FA2032 100%, #FA2032 100%)",
      height: 7,
      border: "0px !important"
    },
    thumb:{
      width: 10,
      height: 10,
      color: "#ffffff",
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: '0px 0px 0px 8px rgba(255, 255, 255, 0.16) !important',
      },
    },
    mark:{
      color:"#4d4d4d !important",
      height: "4px !important",
      width: 1
    },
    markLabel:{
      color:"#4d4d4d !important",
      fontFamily: "Nexa-Regular, sans-serif !important",
      fontSize: "12px !important"
    }
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
          <p className={style.stake__balance}>Balance: 0.00</p>
        </div>
        <div className={style.stake__form}>
          <input className={style.stake__input} type="text" />
          <div className={style.stake__slider}>
            <CustomSlider
              aria-label="amount"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={10}
              min={0}
              max={100}
              marks={marks}
            />
            <button>Max</button>
          </div>
        </div>
        <div className={style.stake__buttons}>
          <button>Stake</button>
          <button>Unstake</button>
        </div>
      </div>
    </div>
  );
};

export default StakeWidget;
