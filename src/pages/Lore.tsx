import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileDrawer from "../components/MobileDrawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Lore.module.css";

const Lore: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const onGhostButtonClick = useCallback(() => {
    navigate("/lore");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/mint-connect-wallet");
  }, [navigate]);

  const openMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(true);
  }, []);

  const closeMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(false);
  }, []);

  const onButton1Click = useCallback(() => {
    navigate("/mint-connect-wallet");
  }, [navigate]);

  return (
    <>
      <div className={styles.loreDiv}>
        <div className={styles.navbarDiv}>
          <Link className={styles.exoLogoA} to="/">
            <img className={styles.exoLogoIcon} alt="" src="../exo-logo2.svg" />
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
                <b className={styles.rEADWIKIB}>THE LORE</b>
              </button>
              <button className={styles.ghostButton}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook.svg"
                />
                <b className={styles.rEADWIKIB}>VIEW COLLECTION</b>
              </button>
              <button className={styles.button} onClick={onButtonClick}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook.svg"
                />
                <b className={styles.rEADWIKIB2}>MINT NOW</b>
              </button>
            </div>
            <button
              className={styles.hamburgerButton}
              onClick={openMobileDrawer}
            >
              <img className={styles.menu2Icon} alt="" src="../menu2.svg" />
              <b className={styles.rEADWIKIB3}>{` `}</b>
            </button>
          </div>
        </div>
        <div className={styles.loreBodyDiv}>
          <div className={styles.loreContainerDiv}>
            <div className={styles.pDiv}>
              <p className={styles.eXOsStandAlone}>
                EXOs stand alone as the pinnacle of technological achievements.
                Once designed to keep Nova safe, EXO's are now used to keep a
                tyrant's ruthless grip on the city.
              </p>
              <p className={styles.eXOsStandAlone}>&nbsp;</p>
              <p className={styles.eXOsStandAlone}>
                Join EVA, in a quest to liberate other EXOs, welcome them into
                the ranks of the Resistance and free Nova once and for all.
              </p>
              <p className={styles.eXOsStandAlone}>&nbsp;</p>
              <p className={styles.eXOsStandAlone}>
                There was a time where all that Nova's citizens had to fear were
                the creatures roaming the wasteland beyond the city gates. A
                dramatic crime escalation, an entire district sunk in chaos, or
                the loss of a loved one... it's not clear what was it that
                pushed Adam, Nova's greatest mind, to seek an ultimate solution
                to bring peace. What is known is that EXOs were his response.
              </p>
              <p className={styles.eXOsStandAlone}>&nbsp;</p>
              <p className={styles.eXOsStandAlone}>
                In a world filled with futuristic wonders, EXOs stand alone as
                the pinnacle of technological achievements.
              </p>
              <p className={styles.eXOsStandAlone}></p>
              <p className={styles.eXOsStandAlone}>
                These cyborgs, once designed to keep the streets of Nova safe,
                are now used to keep a tyrant' ruthless grip on the city, Xeon.
              </p>
              <p className={styles.eXOsStandAlone}></p>
              <p className={styles.joinEVAIn1}>
                Join EVA, in a quest to liberate other EXOs, welcome them into
                the ranks of the Resistance and free Nova once and for all.
              </p>
            </div>
            <div className={styles.cTAsDiv}>
              <button className={styles.button1} onClick={onButton1Click}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook12.svg"
                />
                <b className={styles.rEADWIKIB2}>MINT NOW</b>
              </button>
              <button className={styles.button1}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../sailboat1.svg"
                />
                <b className={styles.rEADWIKIB2}>VIEW COLLECTION</b>
              </button>
            </div>
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

export default Lore;
