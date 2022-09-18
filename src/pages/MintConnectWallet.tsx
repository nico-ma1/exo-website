import { FunctionComponent, useState, useCallback } from "react";
import WalletSelect from "../components/WalletSelect";
import PortalPopup from "../components/PortalPopup";
import { Link, useNavigate } from "react-router-dom";
import MobileDrawer from "../components/MobileDrawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./MintConnectWallet.module.css";

const MintConnectWallet: FunctionComponent = () => {
  const [isWalletSelectPopupOpen, setWalletSelectPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const openWalletSelectPopup = useCallback(() => {
    setWalletSelectPopupOpen(true);
  }, []);

  const closeWalletSelectPopup = useCallback(() => {
    setWalletSelectPopupOpen(false);
  }, []);

  const onGhostButtonClick = useCallback(() => {
    navigate("/lore");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/mint-connect-wallet");
  }, [navigate]);

  const openMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(true);
  }, []);

  const closeMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.mintConnectWallet}>
        <div className={styles.mintInputDiv}>
          <div className={styles.nftNumInputDiv}>
            <div className={styles.nftCountDiv}>
              <b className={styles.mintedB}>5000</b>
              <b className={styles.mintedB}>/</b>
              <b className={styles.mintedB}>10000</b>
            </div>
            <div className={styles.ammountInputDiv}>
              <input
                className={styles.inoutInput}
                type="number"
                placeholder="0"
                min={1}
                disabled
              />
            </div>
          </div>
          <button className={styles.button} onClick={openWalletSelectPopup}>
            <img
              className={styles.notebookIcon}
              alt=""
              src="../notebook12.svg"
            />
            <b className={styles.rEADWIKIB}>Connect Wallet</b>
          </button>
        </div>
        <div className={styles.navbarDiv}>
          <Link className={styles.exoLogoA} to="/">
            <img className={styles.exoLogoIcon} alt="" src="../exo-logo4.svg" />
          </Link>
          <div className={styles.menuDiv}>
            <div className={styles.linksDiv}>
              <button
                className={styles.ghostButton}
                onClick={onGhostButtonClick}
              >
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook.svg"
                />
                <b className={styles.rEADWIKIB1}>THE LORE</b>
              </button>
              <button className={styles.ghostButton}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook.svg"
                />
                <b className={styles.rEADWIKIB1}>VIEW COLLECTION</b>
              </button>
              <button className={styles.button1} onClick={onButton1Click}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook.svg"
                />
                <b className={styles.rEADWIKIB}>MINT NOW</b>
              </button>
            </div>
            <button
              className={styles.hamburgerButton}
              onClick={openMobileDrawer}
            >
              <img className={styles.menu2Icon} alt="" src="../menu2.svg" />
              <b className={styles.rEADWIKIB4}>{` `}</b>
            </button>
          </div>
        </div>
      </div>
      {isWalletSelectPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.5)"
          placement="Top center"
          onOutsideClick={closeWalletSelectPopup}
        >
          <WalletSelect onClose={closeWalletSelectPopup} />
        </PortalPopup>
      )}
      {isMobileDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.5)"
          placement="Top"
          onOutsideClick={closeMobileDrawer}
        >
          <MobileDrawer onClose={closeMobileDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default MintConnectWallet;
