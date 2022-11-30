import InfoSection from "../../components/InfoSection";
import Stake from "../../components/Stake";
import Head from "next/head";
import { usePoolInfo } from "../../hooks/stake/usePoolInfo";
import { useStakerInfo } from "../../hooks/stake/useStakerInfo";
import {useEthers} from "@usedapp/core";
import { usePendingRewards } from "../../hooks/stake/usePendingRewards";

export default function StakePage() {
    const { account } = useEthers();
    // const staker = useStakerInfo(account);
    const rewards = usePendingRewards(account);

    const userInfo = useStakerInfo(account);

    return (
      <>
      {/* <Head>
        <title>$YANTRA | SRI</title>
      </Head> */}
        <InfoSection userInfo={userInfo} pendingRewards={rewards}/>
        <Stake userInfo={userInfo} pendingRewards={rewards} />
      </>
    );
  }