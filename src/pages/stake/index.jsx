import InfoSection from "../../components/InfoSection";
import Stake from "../../components/Stake";
import Head from "next/head";
import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";

export default function StakePage() {
    const {userRewards, userInfo} = usePyroDapp();

    return (
      <>
      <Head>
        <title>Pyromatic | Staking</title>
      </Head>
        <InfoSection userInfo={userInfo} pendingRewards={userRewards}/>
        <Stake />
      </>
    );
  }