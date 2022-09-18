import { FunctionComponent } from "react";
import styles from "./WalletSelect.module.css";

type WalletSelectType = {
  onClose?: () => void;
};

const WalletSelect: FunctionComponent<WalletSelectType> = ({ onClose }) => {
  return (
    <div className={styles.walletSelectDiv}>
      <div className={styles.connectWalletDiv}>
        <div className={styles.textDiv}>
          <b className={styles.connectYourWallet}>Connect your wallet</b>
        </div>
        <div className={styles.walletsDiv}>
          <button className={styles.button}>
            <div className={styles.metamaskDiv}>
              <img className={styles.groupIcon} alt="" src="../group.svg" />
            </div>
            <b className={styles.rEADWIKIB}>METAMASK</b>
          </button>
          <button className={styles.button}>
            <div className={styles.talismanDiv}>
              <img
                className={styles.talismanIcon}
                alt=""
                src="../talisman.svg"
              />
            </div>
            <b className={styles.rEADWIKIB}>TALISMAN</b>
          </button>
          <button className={styles.button}>
            <div className={styles.talismanDiv}>
              <img
                className={styles.frameIcon}
                alt=""
                src="../frame-1058.svg"
              />
            </div>
            <b className={styles.rEADWIKIB}>NOVA</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletSelect;
