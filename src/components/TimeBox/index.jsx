import React, { useEffect, useState } from "react";
import style from "./info-box.module.css";
import Info1 from "../../assets/images/info_one.svg";
import intervalToDuration from "date-fns/intervalToDuration";
import format from "date-fns/format";

const TimeBox = ({ timestamp }) => {
  const [timer, setTimer] = useState();
  const [timerInterval, setTimerInterval] = useState();

  useEffect(() => {
    if (timestamp > 0) {
      const interval = setInterval(() => {
        setTimer(
          intervalToDuration({ start: new Date(timestamp), end: new Date() })
        );
        setTimerInterval(interval);
      }, 1000);
    } else {
      clearInterval(timerInterval);
      setTimer();
    }
  }, [timestamp]);

  useEffect(() => {
    if(new Date().valueOf() >= timestamp && timer){
      console.log("checking")
      clearInterval(timerInterval);
      setTimer();
    }
  }, [timer])

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p>Unlock Time</p>
          <img src={Info1.src} alt="" />
        </div>
        <div className={style.info__value}>
          <div className={style.time}>
            <div className={style.time__value}>
              {timer
                ? timer?.days < 10
                  ? timer?.days.toString().padStart(2, "0")
                  : timer?.days
                : "00"}
            </div>
            <div className={style.time__unit}>Days</div>
          </div>
          <div className={style.time__separator}>:</div>
          <div className={style.time}>
            <div className={style.time__value}>
              {timer
                ? timer?.hours < 10
                  ? timer?.hours.toString().padStart(2, "0")
                  : timer?.hours
                : "00"}
            </div>
            <div className={style.time__unit}>Hours</div>
          </div>
          <div className={style.time__separator}>:</div>
          <div className={style.time}>
            <div className={style.time__value}>
              {timer
                ? timer?.minutes < 10
                  ? timer?.minutes.toString().padStart(2, "0")
                  : timer?.minutes
                : "00"}
            </div>
            <div className={style.time__unit}>Mins</div>
          </div>
          <div className={style.time__separator}>:</div>
          <div className={style.time}>
            <div className={style.time__value}>
              {timer
                ? timer?.seconds < 10
                  ? timer?.seconds.toString().padStart(2, "0")
                  : timer?.seconds
                : "00"}
            </div>
            <div className={style.time__unit}>Secs</div>
          </div>
        </div>
        <div className={style.unlock_date}>
          {timestamp == 0
            ? "You haven't staked yet"
            : format(new Date(timestamp), "dd / MM / yyyy")}
        </div>
      </div>
    </div>
  );
};

export default TimeBox;
