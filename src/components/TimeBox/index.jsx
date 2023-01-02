import React, { useEffect, useState } from "react";
import style from "./info-box.module.css";
import Info3 from "../../assets/images/info_three.svg";
import intervalToDuration from "date-fns/intervalToDuration";
import format from "date-fns/format";
import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";
import Countdown, { zeroPad } from "react-countdown";

const TimeBox = ({  }) => {
  const { userInfo } = usePyroDapp();
  const [timeValue, setTimeValue] = useState(new Date());

  const oldTimestamp = userInfo?.oldLockEndTime * 1000;
  const timestamp = userInfo?.lockEndTime * 1000;

  useEffect(() => {
    if (oldTimestamp > 0 && oldTimestamp > new Date().valueOf()) {
      if(timeValue != oldTimestamp){
        setTimeValue(oldTimestamp);
      }
    } else if (timestamp > 0) {
      if(timeValue != timestamp){
        setTimeValue(timestamp);
      }
    }
  }, [userInfo]);

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className={style.info__value}>
        <div className={style.time}>
          <div className={style.time__value}>{zeroPad(days)}</div>
          <div className={style.time__unit}>Days</div>
        </div>
        <div className={style.time__separator}>:</div>
        <div className={style.time}>
          <div className={style.time__value}>{zeroPad(hours)}</div>
          <div className={style.time__unit}>Hours</div>
        </div>
        <div className={style.time__separator}>:</div>
        <div className={style.time}>
          <div className={style.time__value}>{zeroPad(minutes)}</div>
          <div className={style.time__unit}>Mins</div>
        </div>
        <div className={style.time__separator}>:</div>
        <div className={style.time}>
          <div className={style.time__value}>{zeroPad(seconds)}</div>
          <div className={style.time__unit}>Secs</div>
        </div>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p>Unlock Time</p>
          <img src={Info3.src} alt="" />
        </div>
        <Countdown
          date={timeValue}
          renderer={renderer}
          autoStart={true}
          key={timeValue}
        />
        <div className={style.unlock_date}>
          {oldTimestamp == 0 && timestamp == 0
            ? "Stake to start timer"
            : format(new Date(timeValue), "dd / MM / yyyy")}
        </div>
      </div>
    </div>
  );
};

export default TimeBox;
