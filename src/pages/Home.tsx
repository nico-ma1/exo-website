import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileDrawer from "../components/MobileDrawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
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

  const onButton3Click = useCallback(() => {
    navigate("/lore");
  }, [navigate]);

  const onButton5Click = useCallback(() => {
    navigate("/mint-connect-wallet");
  }, [navigate]);

  const onButton6Click = useCallback(() => {
    window.open("https://twitter.com/ExosamaNFT");
  }, []);

  const onButton7Click = useCallback(() => {
    window.open("https://t.me/exosama");
  }, []);

  const onButton8Click = useCallback(() => {
    window.open("discord.gg/exosama");
  }, []);

  return (
    <>
      <div className={styles.homeDiv}>
        <div className={styles.navbarDiv}>
          <Link className={styles.exoLogoA} to="/">
            <img className={styles.exoLogoIcon} alt="" src="../exo-logo.svg" />
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
        <div className={styles.heroSectionDiv}>
          <img
            className={styles.blurGradientIcon}
            alt=""
            src="../blur-gradient.svg"
          />
          <div className={styles.heroContentDiv}>
            <div className={styles.heroVideoDiv}>
              <video className={styles.exoVideo} autoPlay muted loop>
                <source src="../exo-animated-1.mp4" />
              </video>
            </div>
            <div className={styles.heroContentDiv1}>
              <div className={styles.exoLogoDiv}>
                <img
                  className={styles.exoLogoIcon1}
                  alt=""
                  src="../exo-logo1.svg"
                />
              </div>
              <div className={styles.heroTextDiv}>
                <h1 className={styles.largeFontH1}>
                  <span>{`Join EVA, in a `}</span>
                  <span className={styles.questToLiberate}>
                    quest to liberate EXOs
                  </span>
                </h1>
                <div className={styles.pDiv}>
                  welcome them into the ranks of the Resistance and free Nova
                  once and for all.
                </div>
              </div>
              <div className={styles.cTADiv}>
                <button className={styles.button1} onClick={onButton1Click}>
                  <img
                    className={styles.notebookIcon}
                    alt=""
                    src="../notebook3.svg"
                  />
                  <b className={styles.rEADWIKIB2}>MINT NOW</b>
                </button>
                <button className={styles.button1}>
                  <img
                    className={styles.notebookIcon}
                    alt=""
                    src="../sailboat.svg"
                  />
                  <b className={styles.rEADWIKIB2}>VIEW COLLECTION</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.adamsSpeechBubble}>
            <img className={styles.adamIcon} alt="" src="../adam@2x.png" />
            <div className={styles.textboxDiv}>
              <div className={styles.labelDiv}>
                "And then EVA opened her eyes, and the course of Nova's history
                was changed forever"
              </div>
            </div>
          </div>
        </div>
        <div className={styles.loreSectionDiv}>
          <div className={styles.loreIntroDiv}>
            <div className={styles.loreIntroColsDiv}>
              <div className={styles.loreIntroTextDiv}>
                <div className={styles.heroTextDiv}>
                  <div className={styles.largeFontDiv}>
                    <span>{`In a world filled with `}</span>
                    <span className={styles.questToLiberate}>
                      futuristic wonders
                    </span>
                  </div>
                  <div className={styles.pDiv}>
                    <p
                      className={styles.eXOsStandAlone}
                    >{`EXOs stand alone as the pinnacle of technological achievements. `}</p>
                    <p className={styles.eXOsStandAlone}>&nbsp;</p>
                    <p className={styles.onceDesignedTo}>
                      Once designed to keep Nova safe, EXO's are now used to
                      keep a tyrant's ruthless grip on the city.
                    </p>
                  </div>
                </div>
                <button className={styles.button3} onClick={onButton3Click}>
                  <img
                    className={styles.notebookIcon}
                    alt=""
                    src="../notebook.svg"
                  />
                  <b className={styles.rEADWIKIB2}>READ THE LORE</b>
                </button>
              </div>
              <div className={styles.videoDiv}>
                <video className={styles.eVAANIMATION2} autoPlay muted loop>
                  <source src="../exo-animated-2.mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className={styles.exoCombsDiv}>
            <div className={styles.imagesDiv}>
              <img
                className={styles.exoComb2}
                alt=""
                src="../exo-comb-2@2x.png"
              />
              <img
                className={styles.exoComb3}
                alt=""
                src="../exo-comb-3@2x.png"
              />
              <img
                className={styles.exoComb1}
                alt=""
                src="../exo-comb-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.featuresSection1Div}>
          <div className={styles.featuresContentDiv}>
            <div className={styles.featuresImageDiv}>
              <img
                className={styles.exoFeaturesSection}
                alt=""
                src="../exo-features-section@2x.png"
              />
              <img
                className={styles.exoCutout1Icon}
                alt=""
                src="../exosama-cut-out@2x.png"
              />
            </div>
            <div className={styles.featuresListDiv}>
              <div className={styles.featuresDiv}>
                <div className={styles.featureDiv}>
                  <div className={styles.labelDiv1}>
                    10,000 EXO NFTs on Ethereum with their composability on
                    Polkadot.
                  </div>
                  <div className={styles.iconDiv}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../currencyethereum.svg"
                    />
                  </div>
                </div>
                <div className={styles.indentFeatureDiv}>
                  <div className={styles.featureDiv1}>
                    <div className={styles.labelDiv1}>
                      Collection by Art Director Justine Cruz, known for his
                      renowned work on Magic The Gathering
                    </div>
                    <div className={styles.iconDiv1}>
                      <img
                        className={styles.menu2Icon}
                        alt=""
                        src="../brush.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.featureDiv}>
                  <div className={styles.labelDiv1}>
                    Leveraging Moonsama 2.0 Protocol, equip and evolve your EXO
                    with outfits, weapons, hairstyles, pets, outfits and more
                  </div>
                  <div className={styles.iconDiv2}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../code.svg"
                    />
                  </div>
                </div>
                <div className={styles.indentFeatureDiv}>
                  <div className={styles.featureDiv1}>
                    <div className={styles.labelDiv1}>
                      Rich lore and story background
                    </div>
                    <div className={styles.iconDiv3}>
                      <img
                        className={styles.menu2Icon}
                        alt=""
                        src="../notebook5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.featureDiv}>
                  <div className={styles.labelDiv1}>
                    Full integration in Moonsama metaverses and games, including
                    the upcoming Battle for Nova
                  </div>
                  <div className={styles.iconDiv4}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../planet.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ecoSectionDiv}>
          <div className={styles.ecoColsDiv}>
            <div className={styles.loreIntroTextDiv1}>
              <div className={styles.heroTextDiv}>
                <div className={styles.largeFontDiv1}>
                  <span>{`At `}</span>
                  <span className={styles.questToLiberate}>
                    the cutting edge
                  </span>
                  <span> of Web 3.0</span>
                </div>
                <div className={styles.pDiv}>
                  EXOs are a part of the Moonsama ecosystem that encompasses
                  technology, community, metaverses, assets, marketplace,
                  collections, and partners.
                </div>
              </div>
              <button className={styles.button4}>
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="../notebook.svg"
                />
                <b className={styles.rEADWIKIB2}>ENTER MOONSAMA</b>
              </button>
            </div>
            <div className={styles.ecoImgmobileDiv}>
              <img
                className={styles.samaEcoMobile}
                alt="samaeco"
                src="../sama-eco-mobile.svg"
              />
            </div>
            <div className={styles.ecoImgDiv}>
              <img
                className={styles.samaEcoIcon}
                alt="smaeco"
                src="../sama-eco.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.features2SectionDiv}>
          <div className={styles.featuresContentDiv1}>
            <div className={styles.featuresLeftDiv}>
              <div className={styles.featuresListDiv1}>
                <div className={styles.featureDiv5}>
                  <div className={styles.labelDiv1}>
                    Participate in weekly Play-to-Craft Carnage event and earn
                    rewards
                  </div>
                  <div className={styles.iconDiv5}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../devicegamepad.svg"
                    />
                  </div>
                </div>
                <div className={styles.indentFeatureDiv2}>
                  <div className={styles.featureDiv6}>
                    <div className={styles.labelDiv}>
                      Access to token gated community
                    </div>
                  </div>
                  <div className={styles.iconDiv6}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../lockopen.svg"
                    />
                  </div>
                </div>
                <div className={styles.featureDiv5}>
                  <div className={styles.labelDiv1}>
                    Share of Raresama profit proceedings
                  </div>
                  <div className={styles.iconDiv1}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../currencydollar.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.exoMidDiv}>
              <div className={styles.eXOCenterDiv}>
                <img
                  className={styles.exoCenterBackdrop}
                  alt=""
                  src="../exo-center-backdrop@2x.png"
                />
                <img
                  className={styles.exoCutout2Icon}
                  alt=""
                  src="../exocutout2@2x.png"
                />
              </div>
            </div>
            <div className={styles.featuresRightDiv}>
              <div className={styles.featuresListDiv2}>
                <div className={styles.featureDiv5}>
                  <div className={styles.labelDiv1}>
                    Governance participation within Moonsama community
                  </div>
                  <div className={styles.iconDiv4}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../hierarchy.svg"
                    />
                  </div>
                </div>
                <div className={styles.indentFeatureDiv3}>
                  <div className={styles.featureDiv5}>
                    <div className={styles.labelDiv1}>Regular airdrops</div>
                    <div className={styles.iconDiv1}>
                      <img
                        className={styles.menu2Icon}
                        alt=""
                        src="../parachute.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mintCTADiv}>
                <button className={styles.button5} onClick={onButton5Click}>
                  <img
                    className={styles.notebookIcon}
                    alt=""
                    src="../notebook7.svg"
                  />
                  <b className={styles.rEADWIKIB2}>MINT NOW</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.joinCommunitySectionDiv}>
          <img
            className={styles.blurGradientIcon1}
            alt=""
            src="../blur-gradient1.svg"
          />
          <div className={styles.joinContentDiv}>
            <div className={styles.joinTheCommunityCTADiv}>
              <div className={styles.largeFontDiv}>JOIN THE COMMUNITY</div>
              <div className={styles.socialButtonsDiv}>
                <div className={styles.leftDiv}>
                  <button className={styles.button6} onClick={onButton6Click}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../brandtwitter.svg"
                    />
                    <b className={styles.rEADWIKIB2}>TWITTER</b>
                  </button>
                  <button className={styles.button6} onClick={onButton7Click}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../brandtelegram.svg"
                    />
                    <b className={styles.rEADWIKIB2}>TELEGRAM</b>
                  </button>
                </div>
                <div className={styles.leftDiv}>
                  <button className={styles.button6} onClick={onButton8Click}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../branddiscord.svg"
                    />
                    <b className={styles.rEADWIKIB2}>DISCORD</b>
                  </button>
                  <button className={styles.button6}>
                    <img
                      className={styles.menu2Icon}
                      alt=""
                      src="../notebook8.svg"
                    />
                    <b className={styles.rEADWIKIB2}>WIKI</b>
                  </button>
                </div>
              </div>
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

export default Home;
