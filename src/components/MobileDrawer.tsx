import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileDrawer.module.css";

type MobileDrawerType = {
  onClose?: () => void;
};

const MobileDrawer: FunctionComponent<MobileDrawerType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onGhostButtonClick = useCallback(() => {
    navigate("/lore");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/mint-connect-wallet");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.mobileDrawerDiv} data-animate-on-scroll>
      <div className={styles.mobileMenuDiv} data-animate-on-scroll>
        <div className={styles.mobileLinksDiv}>
          <button className={styles.ghostButton} onClick={onGhostButtonClick}>
            <img className={styles.notebookIcon} alt="" src="../notebook.svg" />
            <b className={styles.rEADWIKIB}>THE LORE</b>
          </button>
          <button className={styles.ghostButton}>
            <img
              className={styles.notebookIcon}
              alt=""
              src="../notebook12.svg"
            />
            <b className={styles.rEADWIKIB}>VIEW COLLECTION</b>
          </button>
          <button className={styles.button} onClick={onButtonClick}>
            <img
              className={styles.notebookIcon}
              alt=""
              src="../notebook12.svg"
            />
            <b className={styles.rEADWIKIB2}>MINT NOW</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
