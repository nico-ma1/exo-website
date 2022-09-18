import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileDrawer from "../components/MobileDrawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./MintMint.module.css";

const MintMint: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

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
      <div className={styles.mintMint}>
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
                required
                autoFocus
              />
              <button className={styles.button}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook.svg"
                />
                <b className={styles.rEADWIKIB}>MINT</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.navbarDiv}>
          <Link className={styles.exoLogoA} to="/">
            <img className={styles.exoLogoIcon} alt="" src="../exo-logo3.svg" />
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

export default MintMint;
