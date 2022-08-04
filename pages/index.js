import Head from 'next/head';
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { walletlink } from '../lib/connectors';
import { useEthers } from '@usedapp/core';
// import AppBar from '../components/AppBar';

export default function Home() {
  const { account, activateBrowserWallet } = useEthers();

//   const tryToActivate = () => {
//     @TODO: add walletconnect logic
//     activateBrowserWallet();
// };

  return (
    <div className="container-center-horizontal">
      <div className="landingpage-desktop-web-1920-1080 screen" >
        <Navigationsleiste
          {...navigationsleisteData}
          
        />
        <div className="overlap-group41" >
          <img
            className="vereinigungsmenge-1"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/vereinigungsmenge-1@1x.png"
          />
          <div
            className="the-home-of-stableco basicsans-regular-normal-white-44px"
            
          >
            the home of stablecoin dezentralized,
            <br />
            substainable high yield.
          </div>
          <img
            className="pfad-1"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-1@1x.png"
          />
          <img
            className="pfad-2"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-2@1x.png"
          />
          <div className="gruppe-160 basicsans-bold-white-18px" >
            <div className="easy-to-use" >
              easy to use,
            </div>
            <div className="easy-to-earn" >
              easy to earn,
            </div>
            <div className="overlap-group1-1" >
              <div className="its basicsans-bold-white-18px-2" >
                <span className="basicsans-bold-white-18px">it&#39;s</span>
                <span className="basicsans-bold-white-22px"></span>
              </div>
              <div className="overlap-group-11 basicsans-bold-regal-blue-28px" >
                <div className="e-1" >
                  e
                </div>
                <div className="asy-pi-1" >
                  asyPI
                </div>
              </div>
            </div>
          </div>
          <div className="gruppe-155" >
            <div className="e-2 basicsans-bold-regal-blue-119px" >
              e
            </div>
            <h1 className="title basicsans-bold-regal-blue-120px" >
              asyPI
            </h1>
          </div>
          <div className="overlap-group2-3" >
            <Komponente21  />
            <img
              className="bild-2"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/bild-2-1@1x.png"
            />
            <div className="audited-by basicsans-bold-regal-blue-26px" >
              AUDITED by
            </div>
          </div>
          <ChangeButton2
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/gruppe-152@1x.png"
            
          />
          <img
            className="test"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/test@1x.png"
          />
          <img
            className="element-2-5"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-2@1x.png"
          />
          <img
            className="element-7"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-7@1x.png"
          />
          <img
            className="usdc-3d-3"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/usdc-3d-3@1x.png"
          />
          <img
            className="usdt-3d"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/usdt-3d-1@1x.png"
          />
          <img
            className="dai-3d"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-3d-1@1x.png"
          />
          <img
            className="element-2-6"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-1@1x.png"
          />
        </div>
        <Gruppe702  />
        <div className="flex-col" >
          <div
            className="earn-on-your-stablec basicsans-regular-normal-astral-40px"
            
          >
            earn on your stablecoins by decentralized smart <br />
            contracts built by german engineers
          </div>
          <div className="overlap-group54" >
            <div className="overlap-group1-2" >
              <div className="overlap-group-12" >
                <div className="overlap-group31" >
                  <div className="gruppe-705" >
                    <div className="e-3 basicsans-bold-regal-blue-73px" >
                      e
                    </div>
                    <div
                      className="asy-pi-2 basicsans-bold-regal-blue-74px"
                      
                    >
                      asyPI
                    </div>
                  </div>
                  <img
                    className="element-3"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-3-2@1x.png"
                  />
                  <div className="gruppe-871" ></div>
                  <div
                    className="why-you-will-love-to-use-easy-pi basicsans-regular-normal-white-30px"
                    
                  >
                    Why You will love to use easyPI!
                  </div>
                </div>
                <div
                  className="enjoy-the-simplicity-of basicsans-regular-normal-astral-40px"
                  
                >
                  enjoy the simplicity of
                </div>
              </div>
              <div className="overlap-group42" >
                <div
                  className="what-does-easy-pi basicsans-regular-normal-white-30px"
                  
                >
                  What does easyPI?
                </div>
              </div>
              <div
                className="automated-smart-contracts basicsans-regular-normal-viking-40px"
                
              >
                automated smart contracts
              </div>
            </div>
            <div
              className="text-1 basicsans-regular-normal-astral-145px"
              
            >
              &amp;
            </div>
          </div>
        </div>
        <div className="flex-row-1" >
          <div className="overlap-group47" >
            <div
              className="easy-pi-employs-delta basicsans-bold-astral-20px-3"
              
            >
              <span className="basicsans-bold-white-20px"></span>
              <span className="basicsans-regular-normal-white-20px"></span>
              <span className="basicsans-regular-normal-astral-20px">
                easyPI employs delta neutral strategies on a perpetual derivatives <br />
                exchange in combination with Aave(lending protcol) automaised by bots on chain. Delta neutral means it
                will take both sides on marketmovements so there is net0 exposure on price movements and{" "}
              </span>
              <span className="basicsans-bold-astral-20px">collect fees on the way up or down</span>
              <span className="basicsans-regular-normal-astral-20px">
                . <br />
                Sounds complicated? This is what You have to do
              </span>
            </div>
            <img
              className="element-1"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-1-1@1x.png"
            />
          </div>
          <div className="flex-col-1" >
            <div className="overlap-group44" >
              <div
                className="earn-like-profs-with-almost-on-click basicsans-regular-normal-astral-40px"
                
              >
                earn like profs with almost on click
              </div>
              <div
                className="for-the-first-time-i basicsans-bold-astral-20px-2"
                
              >
                <span className="basicsans-regular-normal-astral-20px">
                  For the first time it is possible for everyone to profit from the market maker <br />
                  strategies like the professionals without executing trades themselves and all that <br />
                  with{" "}
                </span>
                <span className="basicsans-bold-astral-20px">almost one click.</span>
              </div>
            </div>
            <div
              className="let-smart-contracts-do-the-work-for-you basicsans-regular-normal-viking-30px"
              
            >
              let smart contracts do the work for you
            </div>
          </div>
        </div>
        <div className="flex-col-2" >
          <div className="overlap-group36" >
            <div className="gruppe-822" >
              <div
                className="how-can-you-earn-with-easy-pi basicsans-bold-white-30px"
                
              >
                How can You earn with easyPI ?
              </div>
            </div>
            <div className="overlap-group3-1" >
              <div
                className="to-earn-passiv-incom basicsans-regular-normal-astral-30px"
                
              >
                to earn passiv income with your stablecoins on easyPI
              </div>
              <div
                className="high-higher-and-even-more-apy basicsans-normal-astral-18px"
                
              >
                <span className="basicsans-regular-normal-astral-18px">high, higher</span>
                <span className="basicsans-regular-normal-astral-18px"> and even more APY</span>
              </div>
              <div className="address basicsans-bold-astral-70px" >
                3 WAYS
              </div>
            </div>
          </div>
          <div className="overlap-group-container-1" >
            <div className="overlap-group40 basicsans-regular-normal-white-18px" >
              <div className="make-your-stablecoin" >
                Make your stablecoins available to the pool <br />
                with just one click and start earning.
              </div>
              <div className="flexible-duration" >
                - FLEXIBLE DURATION - start &amp; end whenever <br />
                You like
              </div>
              <div className="claim-interest-any-time" >
                - CLAIM INTEREST ANY TIME
              </div>
              <img
                className="icon-awesome-coins-1"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-awesome-coins@1x.png"
              />
              <div className="gruppe-866" >
                <div className="earn-container" >
                  <div
                    className="relax-earn basicsans-regular-normal-astral-20px"
                    
                  >
                    relax &amp; earn
                  </div>
                  <div
                    className="earning-pool basicsans-bold-white-26px"
                    
                  >
                    EARNING POOL
                  </div>
                </div>
              </div>
              <div className="rechteck-314 border-1px-white" ></div>
            </div>
            <div className="overlap-group45" >
              <div
                className="make-your-stablecoin-1 basicsans-regular-normal-white-18px"
                
              >
                Make your stablecoins available to the pool <br />
                with just one click and start earning.. There <br />
                are no penalties. You can end your earning at <br />
                any time and do not have to specify a&nbsp;&nbsp;duration.
              </div>
              <img
                className="delta"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/delta@1x.png"
              />
              <div className="gruppe-867" >
                <div className="d-hedge basicsans-bold-white-26px" >
                  D-HEDGE
                </div>
              </div>
              <div
                className="one-click-d-hedge basicsans-regular-normal-astral-20px"
                
              >
                one click D-hedge
              </div>
              <div className="rechteck-31 border-1px-white" ></div>
            </div>
            <div className="overlap-group43" >
              <div className="overlap-group27 basicsans-regular-normal-white-47px" >
                <div className="x4x" >
                  4x
                </div>
                <img
                  className="delta-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/delta-3@1x.png"
                />
                <div className="x8x" >
                  8x
                </div>
              </div>
              <div className="gruppe-865" >
                <div className="overlap-group29" >
                  <div
                    className="d-hedge-leverage basicsans-bold-white-26px"
                    
                  >
                    D-HEDGE LEVERAGE
                  </div>
                  <div
                    className="earn-like-profs basicsans-regular-normal-regal-blue-20px"
                    
                  >
                    earn like profs
                  </div>
                </div>
              </div>
              <div
                className="make-your-stablecoin-2 basicsans-regular-normal-white-18px"
                
              >
                Make your stablecoins available to the pool <br />
                with just one click and start earning.. There <br />
                are no penalties. You can end your earning at <br />
                any time and do not have to specify a&nbsp;&nbsp;duration.
              </div>
              <div className="rechteck-31 border-1px-white" ></div>
            </div>
          </div>
          <div className="overlap-group48" >
            <div className="gruppe-870" >
              <img
                className="element-2-7"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-2@1x.png"
              />
              <div className="overlap-group15" >
                <div className="overlap-group13" >
                  <img
                    className="quadrat-10"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/quadrat-10@1x.png"
                  />
                  <img
                    className="mockup-laptop-mit-bild-dashboard-2"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/mockup-laptop-mit-bild-dashboard-2@1x.png"
                  />
                  <div className="gruppe-437" >
                    <div className="flex-col-3" >
                      <img
                        className="icon-awesome-wallet"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-awesome-wallet@1x.png"
                      />
                      <div className="overlap-group3-2" >
                        <div className="gruppe-42-1" >
                          <div
                            className="number basicsans-bold-astral-27px"
                            
                          >
                            1
                          </div>
                          <div
                            className="connect-wallet basicsans-regular-normal-astral-19px"
                            
                          >
                            connect wallet
                          </div>
                        </div>
                        <img
                          className="linie-2"
                          
                          src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/linie-2@1x.png"
                        />
                      </div>
                    </div>
                    <div className="flex-col-4" >
                      <img
                        className="icon-lock"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-open-lock-locked@1x.png"
                      />
                      <div className="overlap-group1-3" >
                        <div
                          className="start-stake basicsans-regular-normal-astral-19px"
                          
                        >
                          start <br />
                          stake
                        </div>
                        <div
                          className="number-1 basicsans-bold-astral-28px"
                          
                        >
                          2
                        </div>
                      </div>
                    </div>
                    <div className="flex-col-5" >
                      <img
                        className="icon-metro-coins"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-metro-coins@1x.png"
                      />
                      <div className="overlap-group2-4" >
                        <div className="overlap-group-13" >
                          <div
                            className="earn basicsans-regular-normal-astral-19px"
                            
                          >
                            earn
                          </div>
                          <div
                            className="number-2 basicsans-bold-astral-28px"
                            
                          >
                            3
                          </div>
                        </div>
                        <img
                          className="linie-3"
                          
                          src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/linie-3@1x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="tutorial-video-1"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/tutorial-video@1x.png"
                  />
                  <img
                    className="dai-3d-1"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-3d-1@1x.png"
                  />
                  <img
                    className="usdt-3d-1"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/usdt-3d-1@1x.png"
                  />
                </div>
                <div className="overlap-group14" >
                  <div
                    className="andits-that basicsans-bold-astral-40px"
                    
                  >
                    AND
                    <br />
                    IT&#39;S THAT
                  </div>
                  <div className="gruppe-25 basicsans-bold-astral-80px" >
                    <div className="e-4" >
                      e
                    </div>
                    <div className="asy" >
                      asy
                    </div>
                  </div>
                </div>
                <Gruppe584  />
              </div>
            </div>
            <div className="overlap-group26" >
              <div className="rechteck-185" ></div>
              <div className="overlap-group-14" >
                <div
                  className="view-all-rates basicsans-bold-white-20px"
                  
                >
                  view ALL rates
                </div>
                <div className="rechteck-184 border-1px-white" ></div>
              </div>
              <div className="overlap-group1-4" >
                <div className="gruppe-806" >
                  <Komponente21
                    className="komponente-2-2"
                    
                  />
                </div>
                <div
                  className="you-want-to-earn-more basicsans-bold-astral-26px"
                  
                >
                  You want to earn more?
                </div>
                <div className="gruppe-748" >
                  <div className="gruppe-740" >
                    <img
                      className="icon-user"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-person-1@1x.png"
                    />
                    <img
                      className="icon-weather-direction-left"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-weather-direction-left@1x.png"
                    />
                    <img
                      className="icon-user-1"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-person-1@1x.png"
                    />
                  </div>
                </div>
                <div className="gruppe-749" >
                  <div className="gruppe-606-1" >
                    <img
                      className="element-2-8"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-13@1x.png"
                    />
                    <div
                      className="level-5-3 basicsans-regular-normal-white-1px"
                      
                    >
                      LEVEL 5
                    </div>
                  </div>
                </div>
                <div className="gruppe-805" >
                  <div className="click-me basicsans-bold-white-26px" >
                    Click me
                  </div>
                </div>
              </div>
              <div
                className="all-apys-are-variable basicsans-regular-normal-white-16px"
                
              >
                All APY&#39;s are variable
              </div>
              <img
                className="avalanche-avax-logo"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/avalanche-avax-logo-1@1x.png"
              />
              <img
                className="arbitrum"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/arbitrum-1@1x.png"
              />
              <div className="overlap-group2-5" >
                <div className="rechteck-296" ></div>
                <div className="ellipse-63" ></div>
              </div>
              <div className="apy-25 basicsans-bold-astral-70px" >
                APY
              </div>
              <div className="overlap-group3-3" >
                <div className="gruppe-823" >
                  <img
                    className="icon-awesome-coins-2"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-awesome-coins-1@1x.png"
                  />
                </div>
                <div className="ellipse-6 border-1px-white" ></div>
              </div>
              <div className="overlap-group4" >
                <img
                  className="delta-2"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/delta-1@1x.png"
                />
                <div className="ellipse-6 border-1px-white" ></div>
              </div>
              <div className="overlap-group5" >
                <div className="overlap-group-15 basicsans-regular-normal-white-14px" >
                  <div className="x4x-1" >
                    4x
                  </div>
                  <img
                    className="delta-3"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/delta-2@1x.png"
                  />
                  <div className="x8x-1" >
                    8x
                  </div>
                </div>
                <div className="ellipse-6 border-1px-white" ></div>
              </div>
              <div className="gruppe-446" >
                <div className="interest-rates-container" >
                  <InterestRates
                    gruppe402Props={interestRates1Data.gruppe402Props}
                    
                  />
                  <InterestRates2
                    dai1="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-10@1x.png"
                    dai2="DAI"
                    apy="APY"
                    spanText1="21"
                    spanText2="%"
                    
                  />
                </div>
                <div className="overlap-group-container" >
                  <div className="overlap-group2-1" >
                    <div className="gruppe-403-2" >
                      <div
                        className="tether-1 basicsans-regular-normal-astral-14px"
                        
                      >
                        Tether
                      </div>
                      <div className="gruppe-401-2" >
                        <div className="overlap-group-16" >
                          <div
                            className="apy-26 basicsans-regular-normal-astral-14px"
                            
                          >
                            APY
                          </div>
                          <div
                            className="percent-3 basicsans-bold-astral-38px"
                            
                          >
                            <span className="basicsans-bold-astral-38px-2">21</span>
                            <span className="basicsans-bold-astral-18px">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="schnittmenge-7-1"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png"
                    />
                  </div>
                  <div className="overlap-group3" >
                    <div className="gruppe-403-3" >
                      <div
                        className="tether-1 basicsans-regular-normal-astral-14px"
                        
                      >
                        Tether
                      </div>
                      <div className="gruppe-401-3" >
                        <div className="overlap-group-17" >
                          <div
                            className="apy-27 basicsans-regular-normal-astral-14px"
                            
                          >
                            APY
                          </div>
                          <div
                            className="percent-4 basicsans-bold-astral-38px"
                            
                          >
                            <span className="basicsans-bold-astral-38px-2">19</span>
                            <span className="basicsans-bold-astral-18px">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="schnittmenge-7-1"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="gruppe-429" >
                <div className="interest-rates-container" >
                  <InterestRates
                    gruppe402Props={interestRates2Data.gruppe402Props}
                    
                  />
                  <InterestRates
                    className="interest-rates-1"
                    gruppe402Props={interestRates3Data.gruppe402Props}
                    
                  />
                </div>
                <div className="overlap-group-container" >
                  <div className="overlap-group2-1" >
                    <div className="gruppe-403-1" >
                      <div
                        className="tether-1 basicsans-regular-normal-astral-14px"
                        
                      >
                        Tether
                      </div>
                      <div className="gruppe-401-1" >
                        <div className="overlap-group-5" >
                          <div
                            className="apy-28 basicsans-regular-normal-astral-14px"
                            
                          >
                            APY
                          </div>
                          <div
                            className="percent-5 basicsans-bold-astral-38px"
                            
                          >
                            <span className="basicsans-bold-astral-38px-2">33</span>
                            <span className="basicsans-bold-astral-18px">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="schnittmenge-7-1"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png"
                    />
                  </div>
                  <div className="overlap-group3" >
                    <div className="gruppe-403-1" >
                      <div
                        className="tether-1 basicsans-regular-normal-astral-14px"
                        
                      >
                        Tether
                      </div>
                      <div className="gruppe-401-1" >
                        <div className="overlap-group-5" >
                          <div
                            className="apy-29 basicsans-regular-normal-astral-14px"
                            
                          >
                            APY
                          </div>
                          <div
                            className="percent-6 basicsans-bold-astral-38px"
                            
                          >
                            <span className="basicsans-bold-astral-38px-2">33</span>
                            <span className="basicsans-bold-astral-18px">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="schnittmenge-7-1"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="gruppe-428" >
                <div className="overlap-group-container-2" >
                  <div className="overlap-group-6" >
                    <Gruppe4243 >
                      4x Leverage
                    </Gruppe4243>
                    <div className="overlap-group-7" >
                      <div className="rechteck-181-2" ></div>
                      <img
                        className="dai-36"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-10@1x.png"
                      />
                      <div
                        className="dai-37 basicsans-regular-normal-astral-14px"
                        
                      >
                        DAI
                      </div>
                      <div className="overlap-group-18" >
                        <div
                          className="apy-30 basicsans-regular-normal-astral-14px"
                          
                        >
                          APY
                        </div>
                        <div
                          className="percent-7 basicsans-bold-astral-38px"
                          
                        >
                          <span className="basicsans-bold-astral-38px-2">43</span>
                          <span className="basicsans-bold-astral-18px">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-8" >
                    <Gruppe4243 >
                      8x Leverage
                    </Gruppe4243>
                    <div className="overlap-group-7" >
                      <div className="rechteck-181-2" ></div>
                      <img
                        className="dai-38"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-10@1x.png"
                      />
                      <div
                        className="dai-39 basicsans-regular-normal-astral-14px"
                        
                      >
                        DAI
                      </div>
                      <div className="overlap-group-19" >
                        <div
                          className="apy-31 basicsans-regular-normal-astral-14px"
                          
                        >
                          APY
                        </div>
                        <div
                          className="percent-8 basicsans-bold-astral-38px"
                          
                        >
                          <span className="basicsans-bold-astral-38px-2">63</span>
                          <span className="basicsans-bold-astral-18px">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-container-3" >
                  <div className="overlap-group-6" >
                    <Gruppe4243 >
                      6x Leverage
                    </Gruppe4243>
                    <div className="overlap-group-7" >
                      <div className="rechteck-181-2" ></div>
                      <img
                        className="dai-40"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-10@1x.png"
                      />
                      <div
                        className="dai-41 basicsans-regular-normal-astral-14px"
                        
                      >
                        DAI
                      </div>
                      <div className="overlap-group-20" >
                        <div
                          className="apy-32 basicsans-regular-normal-astral-14px"
                          
                        >
                          APY
                        </div>
                        <div
                          className="percent-9 basicsans-bold-astral-38px"
                          
                        >
                          <span className="basicsans-bold-astral-38px-2">52</span>
                          <span className="basicsans-bold-astral-18px">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-8" >
                    <div className="gruppe-427" >
                      <div
                        className="x10x-leverage basicsans-bold-white-18px"
                        
                      >
                        10x Leverage
                      </div>
                    </div>
                    <div className="overlap-group-7" >
                      <div className="rechteck-181-2" ></div>
                      <img
                        className="dai-42"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-10@1x.png"
                      />
                      <div
                        className="dai-43 basicsans-regular-normal-astral-14px"
                        
                      >
                        DAI
                      </div>
                      <div className="overlap-group-21" >
                        <div
                          className="apy-33 basicsans-regular-normal-astral-14px"
                          
                        >
                          APY
                        </div>
                        <div
                          className="percent-10 basicsans-bold-astral-38px"
                          
                        >
                          <span className="basicsans-bold-astral-38px-2">72</span>
                          <span className="basicsans-bold-astral-18px">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group10" >
                <div
                  className="where-does-the-yield-come-from basicsans-bold-white-20px"
                  
                >
                  where does the yield come from
                </div>
                <div className="rechteck-184-1 border-1px-white" ></div>
              </div>
            </div>
          </div>
          <div className="gruppe-820" >
            <div className="flex-row-2" >
              <div className="flex-col-6" >
                <div
                  className="supported-chains basicsans-bold-astral-26px"
                  
                >
                  Supported Chains
                </div>
                <div className="gruppe-797" >
                  <img
                    className="ethereum-trans"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/ethereum-trans@1x.png"
                  />
                  <div
                    className="ethereum-network basicsans-regular-normal-astral-20px"
                    
                  >
                    Ethereum Network
                  </div>
                </div>
              </div>
              <div className="gruppe-798" >
                <img
                  className="avalanche-avax-logo-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/avalanche-avax-logo@1x.png"
                />
                <div
                  className="avalanche-network basicsans-regular-normal-astral-20px"
                  
                >
                  Avalanche Network
                </div>
              </div>
              <div className="gruppe-796" >
                <img
                  className="arbitrum-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/arbitrum@1x.png"
                />
                <div
                  className="arbitrum-network basicsans-regular-normal-astral-20px"
                  
                >
                  Arbitrum Network
                </div>
              </div>
            </div>
            <div className="overlap-group25" >
              <div
                className="supported-stablecoins basicsans-regular-normal-astral-20px"
                
              >
                Supported stablecoins
              </div>
              <div className="gruppe-795" >
                <div className="usdc-logo" >
                  <div className="pfad-container-1" >
                    <img
                      className="pfad-104"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-104@1x.png"
                    />
                    <img
                      className="pfad-105"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-105@1x.png"
                    />
                  </div>
                </div>
                <div className="overlap-group1-5" >
                  <div className="tether-usdt-logo" >
                    <img
                      className="pfad-102"
                      
                      src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-102@1x.png"
                    />
                  </div>
                </div>
                <div className="layer_x0020_1" >
                  <img
                    className="pfad-100"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-100@1x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="easy-like-it-should-be basicsans-bold-regal-blue-38px"
            
          >
            EASY <br />
            LIKE IT SHOULD BE
          </div>
          <div className="overlap-group32" >
            <div className="flex-row-3" >
              <div className="overlap-group51" >
                <div className="pfad-container-2" >
                  <img
                    className="pfad-95"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-95@1x.png"
                  />
                  <img
                    className="pfad-96"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-96@1x.png"
                  />
                  <img
                    className="pfad-97"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-97@1x.png"
                  />
                </div>
                <div className="gruppe-453" >
                  <div className="ellipse-25" ></div>
                  <div className="gruppe-448" >
                    <div
                      className="high-sustainable-apy basicsans-bold-white-26px"
                      
                    >
                      high &amp; sustainable APY
                    </div>
                    <div
                      className="use-the-full-potenti basicsans-regular-normal-white-20px"
                      
                    >
                      Use the full potential of your stablecoins on <br />
                      easy PI. Use the pool, D-hedge, D-hedge
                      <br /> leverage and NFTs to generate passive
                      <br /> income.
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group52" >
                <img
                  className="delta-wei-kontur-15px"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/delta-wei--kontur-15px@1x.png"
                />
                <div className="gruppe-451" >
                  <div className="gruppe-97" ></div>
                  <div className="gruppe-450" >
                    <div className="overlap-group-22" >
                      <div
                        className="easiest-way-in-crypt basicsans-bold-white-26px"
                        
                      >
                        Easiest way in crypto to use&nbsp;&nbsp; -hedge and leverage
                      </div>
                      <div
                        className="no-manual-adjustment basicsans-regular-normal-white-20px"
                        
                      >
                        No manual adjustment, no own hedging <br />
                        necessary. Our smart contracts and bots make <br />
                        the necessary adjustments. Use delta hedge like <br />
                        the pros and generate high APYs. It has never <br />
                        been easier.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gruppe-452" >
                <div className="gruppe-96" >
                  <div className="gruppe-10" >
                    <div className="overlap-group-23" >
                      <img
                        className="icon-awesome-money-bill"
                        
                        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-awesome-money-bill@1x.png"
                      />
                      <div className="gruppe-9 border-1px-white" >
                        <img
                          className="linie-1-1"
                          
                          src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/linie-1@1x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gruppe-449" >
                  <div
                    className="no-minimum-amount-flexible-duration basicsans-bold-white-26px"
                    
                  >
                    no Minimum amount &amp; flexible duration
                  </div>
                  <div
                    className="you-can-start-using basicsans-regular-normal-white-20px"
                    
                  >
                    You can start using easyPI without <br />
                    having to invest a minimum amount. Start and end your earnings, when everYou like.
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group50" >
              <div className="pfad-container-3" >
                <img
                  className="pfad-16"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-16@1x.png"
                />
                <img
                  className="pfad-17"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-17@1x.png"
                />
              </div>
              <div className="gruppe-442" >
                <div className="flex-col-7" >
                  <div
                    className="your-key-your-funds basicsans-regular-normal-white-30px"
                    
                  >
                    YOUR KEY YOUR FUNDS
                  </div>
                  <div
                    className="decentralized-audi basicsans-regular-normal-white-20px"
                    
                  >
                    decentralized - audited smart&nbsp;&nbsp;contract manages your stables. We DON&#39;T control any
                    funds. You will ever be able to control your funds through the blockchain.
                  </div>
                </div>
                <div
                  className="proof basicsans-regular-normal-alabaster-18px"
                  
                >
                  proof
                </div>
              </div>
            </div>
          </div>
          <div className="easy-pi-nfts basicsans-bold-regal-blue-40px" >
            EASY PI NFT&#39;S
          </div>
          <div
            className="generate-passive-inc basicsans-bold-regal-blue-30px"
            
          >
            GENERATE PASSIVE INCOME &amp;
            <br />
            MAXIMIZE YOUR YIELDs
          </div>
          <div className="overlap-group33" >
            <div
              className="easy-pi-nft-holders basicsans-regular-normal-astral-20px"
              
            >
              Easy PI NFT holders benefit directly monetarily from their NFT. As an NFT owner, the holder earns a higher
              interest rate and receives shares in the revenue pool. The special thing: Through referrings and own use
              of the NFT, the NFTs can reach a higher LEVEL. With each new level the&nbsp;&nbsp;interest and the
              revenuesfrom the revenue pool increase and so does the value of the NFT itself.
            </div>
            <div className="gruppe-105" >
              <div
                className="rewards basicsans-regular-normal-astral-20px"
                
              >
                REWARDS
              </div>
            </div>
            <div className="gruppe-113" >
              <div
                className="higher-yields basicsans-regular-normal-astral-19px"
                
              >
                HIGHER YIELDS
              </div>
            </div>
          </div>
          <div className="overlap-group46" >
            <div className="gruppe-746" >
              <div className="gruppe-745" >
                <div className="ellipse-61" ></div>
              </div>
            </div>
            <div
              className="limited-edition-of-1000 basicsans-bold-astral-20px"
              
            >
              LIMITED EDITION of 1000
            </div>
            <Gruppe6123
              element2="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-3@1x.png"
              level2="LEVEL 2"
              
            />
            <Gruppe613  />
            <Gruppe6123
              element2="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-5@1x.png"
              level2="LEVEL 10"
              className="gruppe-614"
              
            />
          </div>
          <div className="overlap-group53" >
            <div className="overlap-group37" >
              <div className="gruppe-604" ></div>
              <div
                className="how-to-level-upyour-nft basicsans-bold-regal-blue-40px"
                
              >
                HOW TO LEVEL UPYOUR NFT?
              </div>
              <div
                className="something-is-waiting-for-you basicsans-bold-astral-18px"
                
              >
                Something is waiting for you!
              </div>
              <img
                className="element-1-1"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-1@1x.png"
              />
              <Gruppe616  />
              <div
                className="increase-your-nft-le basicsans-bold-regal-blue-40px-2"
                
              >
                <span className="basicsans-bold-regal-blue-40px">INCREASE YOUR NFT LEVEL&nbsp;&nbsp;</span>
                <span className="basicsans-bold-regal-blue-40px">
                  AND EARN MORE FROM THE NFT REWARD POOL &amp; HIGHER YIELDS
                </span>
              </div>
              <div className="gruppe-615" >
                <Gruppe605  />
                <Gruppe606
                  element2="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-7@1x.png"
                  
                />
                <Gruppe6074
                  element2="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-10@1x.png"
                  
                />
                <Gruppe606
                  element2="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-11@1x.png"
                  className="gruppe-608"
                  
                />
                <Gruppe6074
                  element2="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-10@1x.png"
                  className="gruppe-609"
                  
                />
                <Gruppe6074
                  element2="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-11@1x.png"
                  className="gruppe-610"
                  
                />
                <Gruppe605
                  className="gruppe-611"
                  
                />
              </div>
              <div className="gruppe-617" >
                <div className="gruppe-618" >
                  <div
                    className="check-current-yiel-ds basicsans-bold-white-20px"
                    
                  >
                    check current YIELDs&nbsp;&nbsp;&amp; earnings from reward pool for NFT holder
                  </div>
                </div>
              </div>
              <div className="overlap-group17" >
                <img
                  className="pfad-107"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-107@1x.png"
                />
              </div>
              <div className="gruppe-619" >
                <div
                  className="tradeable-on-opensea basicsans-regular-normal-astral-19px"
                  
                >
                  Tradeable on Opensea
                </div>
                <img
                  className="bild-6"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/bild-6@1x.png"
                />
              </div>
            </div>
            <Gruppe584 className="gruppe-106"  />
          </div>
          <div
            className="apy-for-nft-holder basicsans-bold-regal-blue-40px"
            
          >
            APY FOR NFT HOLDER
          </div>
          <Gruppe699  />
          <div className="gruppe-container" >
            <div className="gruppe-690" >
              <div className="gruppe-650" >
                <div className="overlap-group4-1" >
                  <div className="rechteck-251-1" ></div>
                  <div
                    className="level-4 basicsans-regular-normal-white-14px"
                    
                  >
                    LEVEL 4
                  </div>
                </div>
              </div>
              <Gruppe677
                gruppe4021Props={gruppe6771Data.gruppe4021Props}
                gruppe4022Props={gruppe6771Data.gruppe4022Props}
                gruppe4022Props2={gruppe6771Data.gruppe4022Props2}
                
              />
            </div>
            <div className="gruppe-689" >
              <div className="gruppe-651" >
                <div className="overlap-group-24" >
                  <div className="rechteck-251-2" ></div>
                  <div
                    className="level-5-4 basicsans-regular-normal-white-14px"
                    
                  >
                    LEVEL 5
                  </div>
                </div>
              </div>
              <Gruppe677
                className="gruppe-678"
                gruppe4021Props={gruppe6772Data.gruppe4021Props}
                gruppe4022Props={gruppe6772Data.gruppe4022Props}
                gruppe4022Props2={gruppe6772Data.gruppe4022Props2}
                
              />
            </div>
            <div className="gruppe-688" >
              <Gruppe652 >LEVEL 6</Gruppe652>
              <Gruppe677
                className="gruppe-679"
                gruppe4021Props={gruppe6773Data.gruppe4021Props}
                gruppe4022Props={gruppe6773Data.gruppe4022Props}
                gruppe4022Props2={gruppe6773Data.gruppe4022Props2}
                
              />
            </div>
            <Gruppe687
              gruppe652Props={gruppe6871Data.gruppe652Props}
              gruppe677Props={gruppe6871Data.gruppe677Props}
              
            />
            <Gruppe687
              className="gruppe-68-1"
              gruppe652Props={gruppe6872Data.gruppe652Props}
              gruppe677Props={gruppe6872Data.gruppe677Props}
              
            />
            <Gruppe687
              className="gruppe-68-1"
              gruppe652Props={gruppe6873Data.gruppe652Props}
              gruppe677Props={gruppe6873Data.gruppe677Props}
              
            />
            <div className="gruppe-686" >
              <div className="gruppe-656" >
                <div className="overlap-group-25" >
                  <div className="rechteck-251-3" ></div>
                  <div
                    className="level-10 basicsans-regular-normal-white-14px"
                    
                  >
                    LEVEL 10
                  </div>
                </div>
              </div>
              <Gruppe677
                className="gruppe-683"
                gruppe4021Props={gruppe6777Data.gruppe4021Props}
                gruppe4022Props={gruppe6777Data.gruppe4022Props}
                gruppe4022Props2={gruppe6777Data.gruppe4022Props2}
                
              />
            </div>
          </div>
          <div
            className="payments-to-nft-hold basicsans-bold-regal-blue-40px"
            
          >
            PAYMENTS TO NFT HOLDERS IN THE LAST MONTH FROM THE REWARD POOL
          </div>
          <div className="overlap-group-container-4" >
            <div className="overlap-group18" >
              <div className="rechteck-251-4" ></div>
              <div className="price basicsans-bold-white-18px" >
                $ 200
              </div>
            </div>
            <div className="overlap-group-9" >
              <div className="rechteck-251-5" ></div>
              <div className="price basicsans-bold-white-18px" >
                $ 400
              </div>
            </div>
            <div className="overlap-group2-2" >
              <div className="rechteck-251-6" ></div>
              <div className="price basicsans-bold-white-18px" >
                $ 600
              </div>
            </div>
            <div className="overlap-group21" >
              <div className="rechteck-251-7" ></div>
              <div className="price basicsans-bold-white-18px" >
                $ 800
              </div>
            </div>
            <div className="overlap-group2-2" >
              <div className="rechteck-251-8" ></div>
              <div className="price-1 basicsans-bold-white-18px" >
                $ 1.000
              </div>
            </div>
            <div className="overlap-group-9" >
              <div className="rechteck-251-9" ></div>
              <div className="price-2 basicsans-bold-white-18px" >
                $ 1.200
              </div>
            </div>
            <div className="overlap-group2-2" >
              <div className="rechteck-251-10" ></div>
              <div className="price-1 basicsans-bold-white-18px" >
                $ 1.400
              </div>
            </div>
          </div>
          <div className="overlap-group38" >
            <div className="overlap-group49" >
              <div className="overlap-group3-4" >
                <div className="d-hedge-1 basicsans-bold-astral-14px" >
                  D-hedge
                </div>
                <div className="rechteck-183" ></div>
                <div className="earn-1 basicsans-bold-white-14px" >
                  earn
                </div>
                <div className="rechteck-189" ></div>
              </div>
              <div className="overlap-group4-2" >
                <div className="gruppe-53" >
                  <div className="how-much basicsans-bold-astral-18px" >
                    How much?
                  </div>
                  <div className="rechteck-24" ></div>
                </div>
                <div className="price-3 basicsans-bold-astral-20px" >
                  $ 5000
                </div>
              </div>
              <div
                className="overlap-group49-item basicsans-bold-astral-18px"
                
              >
                Which stablecoin?
              </div>
              <div className="overlap-group-10" >
                <img
                  className="icon-ionic-ios-arrow-down"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-arrow-down-1@1x.png"
                />
                <img
                  className="schnittmenge-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-1-1@1x.png"
                />
                <img
                  className="icon-ionic-ios-arrow-down"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-arrow-down-1@1x.png"
                />
                <img
                  className="schnittmenge-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-1-1@1x.png"
                />
                <div className="rechteck-2" ></div>
                <img
                  className="icon-ionic-ios-arrow-down"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-arrow-down-1@1x.png"
                />
                <img
                  className="schnittmenge-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-1-1@1x.png"
                />
              </div>
              <div className="flex-row-4" >
                <div className="how-long basicsans-bold-astral-18px" >
                  How long?
                </div>
                <div className="pfad-container-4" >
                  <img
                    className="pfad-20"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-20@1x.png"
                  />
                  <img
                    className="pfad-19"
                    
                    src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-19@1x.png"
                  />
                </div>
              </div>
              <div className="overlap-group2-6" >
                <div className="address-1 basicsans-bold-astral-20px" >
                  1 Year
                </div>
                <img
                  className="icon-ionic-ios-arrow-down-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-arrow-down-1@1x.png"
                />
                <img
                  className="icon-ionic-ios-arrow-down-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-arrow-down-1@1x.png"
                />
                <div className="rechteck-2" ></div>
                <img
                  className="icon-ionic-ios-arrow-down-1"
                  
                  src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-ionic-ios-arrow-down-1@1x.png"
                />
              </div>
              <div
                className="overlap-group49-item basicsans-bold-astral-18px"
                
              >
                Your earnings
              </div>
              <div className="overlap-group-10" >
                <div className="price-4 basicsans-bold-white-20px" >
                  $ 1250
                </div>
                <div className="rechteck-26" ></div>
              </div>
            </div>
            <div className="flex-col-8" >
              <div
                className="calculate-your-earnings basicsans-bold-regal-blue-40px"
                
              >
                CALCULATE YOUR EARNINGS
              </div>
              <div className="overlap-group6" >
                <div
                  className="get-started-with-easy-pi basicsans-bold-white-23px"
                  
                >
                  Get Started with easyPI
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group34" >
            <Gruppe443  />
            <img
              className="pfad-80"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-80@1x.png"
            />
            <div className="pfad-container" >
              <img
                className="pfad-10"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-10-1@1x.png"
              />
              <img
                className="pfad-11"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-11-1@1x.png"
              />
            </div>
            <div className="proof-of-concept basicsans-bold-white-26px" >
              Proof of concept
            </div>
            <img
              className="sicherheit"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/sicherheit-1@1x.png"
            />
            <div
              className="we-are-testing-the-c basicsans-regular-normal-white-18px"
              
            >
              We are testing the Conceptsince <br />
              moth. Don&#39;t trust words,trust the
              <br />
              blockchain.
            </div>
            <div className="pfad-container-5" >
              <img
                className="pfad-12"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-12-1@1x.png"
              />
              <img
                className="pfad-13"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-13-1@1x.png"
              />
            </div>
            <div
              className="check-here basicsans-regular-normal-white-18px"
              
            >
              check here
            </div>
            <div className="rechteck-19" ></div>
            <div className="audited basicsans-bold-white-26px" >
              Audited
            </div>
            <img
              className="sicherheit-1"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/sicherheit-1@1x.png"
            />
            <div
              className="our-smart-contract-i basicsans-regular-normal-white-18px"
              
            >
              Our smart contract is official audited by CERTIK. All Information <br />
              you find here.
            </div>
            <div className="pfad-container-6" >
              <img
                className="pfad-12"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-12-1@1x.png"
              />
              <img
                className="pfad-13"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-13-1@1x.png"
              />
            </div>
            <div
              className="check-here-1 basicsans-regular-normal-white-18px"
              
            >
              check here
            </div>
            <img
              className="bild-2-1"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/bild-2@1x.png"
            />
            <div className="pfad-container" >
              <img
                className="pfad-10"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-10-1@1x.png"
              />
              <img
                className="pfad-11"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-11-1@1x.png"
              />
            </div>
            <div className="check-yourself basicsans-bold-white-40px" >
              CHECK <br />
              YOURSELF
            </div>
            <div className="pfad-container" >
              <img
                className="pfad-10"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-10-1@1x.png"
              />
              <img
                className="pfad-11"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-11-1@1x.png"
              />
            </div>
            <img
              className="element-3-1"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-3-1@1x.png"
            />
          </div>
          <div
            className="you-have-questions basicsans-bold-regal-blue-40px"
            
          >
            YOU HAVE QUESTIONS?
          </div>
          <div className="flex-row-5" >
            <div className="about-easy-pi basicsans-bold-astral-22px" >
              about easy PI
            </div>
            <img
              className="arrow-7"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/arrow-5-1@1x.png"
            />
          </div>
          <div className="flex-row" >
            <div
              className="about-earning-pool basicsans-bold-astral-22px"
              
            >
              about earning pool
            </div>
            <img
              className="arrow-6"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/arrow-5-1@1x.png"
            />
          </div>
          <div className="flex-row" >
            <div
              className="d-hedge-leverage-1 basicsans-bold-astral-22px"
              
            >
              D-Hedge &amp; leverage
            </div>
            <img
              className="arrow-5"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/arrow-5-1@1x.png"
            />
          </div>
          <div className="flex-row" >
            <div
              className="about-rewards-nft basicsans-bold-astral-22px"
              
            >
              about rewards &amp; NFT
            </div>
            <img
              className="arrow-5-1"
              
              src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/arrow-5-1@1x.png"
            />
          </div>
          <div className="overlap-group35" >
            <div className="icon-ionic-ios-videocam-1" >
              <img
                className="pfad-39-1"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-39@1x.png"
              />
              <img
                className="pfad-38-1"
                
                src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-38@1x.png"
              />
            </div>
            <div className="videos basicsans-bold-regal-blue-40px" >
              VIDEOS
            </div>
            <div
              className="how-to-start-erarning basicsans-regular-normal-astral-22px"
              
            >
              How to start erarning&nbsp;&nbsp;?
            </div>
            <div
              className="overlap-group35-item basicsans-regular-normal-astral-22px"
              
            >
              How to Claim &amp; cancel ?
            </div>
            <div
              className="overlap-group35-item basicsans-regular-normal-astral-22px"
              
            >
              How tobuy NFT ?
            </div>
            <div
              className="overlap-group35-item basicsans-regular-normal-astral-22px"
              
            >
              Get Money back for NFT ?
            </div>
            <div
              className="overlap-group35-item basicsans-regular-normal-astral-22px"
              
            >
              How to get rewards ?
            </div>
          </div>
          <img
            className="vereinigungsmenge-5"
            
            src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/vereinigungsmenge-5@1x.png"
          />
        </div>
      </div>
    </div>
  );
}

function Navigationsleiste(props) {
  const {
    linie1,
    schnittmenge2,
    e,
    asypi,
    security,
    iconMaterialSecurity,
    faq,
    iconMetroQuestion,
    tutorialVideos,
    pfad39,
    pfad38,
    pfad40,
    launchApp,
    earning,
    iconAwesomeCoins,
    nft,
    howTo,
    iconAwesomePlay,
    element5_1,
  } = props;

  return (
    <div className="navigationsleiste" >
      <div className="overlap-group30" >
        <img className="linie-1"  src={linie1} />
        <div className="rechteck-8" ></div>
        <img className="schnittmenge-2"  src={schnittmenge2} />
        <div className="gruppe-161 basicsans-regular-normal-astral-32px" >
          <div className="e" >
            {e}
          </div>
          <div className="asy-pi" >
            {asypi}
          </div>
        </div>
        <div
          className="security basicsans-regular-normal-regal-blue-19px"
          
        >
          {security}
        </div>
        <img className="icon-shield"  src={iconMaterialSecurity} />
        <div className="faq basicsans-regular-normal-regal-blue-19px" >
          {faq}
        </div>
        <img className="icon-metro-question"  src={iconMetroQuestion} />
        <div
          className="tutorial-videos basicsans-regular-normal-regal-blue-20px"
          
        >
          {tutorialVideos}
        </div>
        <div className="icon-ionic-ios-videocam" >
          <img className="pfad-39"  src={pfad39} />
          <img className="pfad-38"  src={pfad38} />
        </div>
        <img className="pfad-40"  src={pfad40} />
        <div className="launch-app basicsans-bold-white-23px" >
          {launchApp}
        </div>
        <div
          className="earning basicsans-regular-normal-regal-blue-19px"
          
        >
          {earning}
        </div>
        <img className="icon-awesome-coins"  src={iconAwesomeCoins} />
        <div className="gruppe-137" >
          <div className="nft basicsans-regular-normal-regal-blue-19px" >
            {nft}
          </div>
        </div>
        <div className="gruppe-875" >
          <div
            className="how-to basicsans-regular-normal-regal-blue-19px"
            
          >
            {howTo}
          </div>
        </div>
        <img className="icon-play"  src={iconAwesomePlay} />
        <img className="element-5_1"  src={element5_1} />
      </div>
    </div>
  );
}


function Komponente21(props) {
  const { className } = props;

  return <div className={`komponente-2-1 ${className || ""}`} ></div>;
}


function ChangeButton2(props) {
  const { src } = props;

  return (
    <div className="change-button" >
      <img className="gruppe-152"  src={src} />
    </div>
  );
}


function Gruppe702() {
  return (
    <div className="gruppe-702" >
      <div className="gruppe-163" >
        <img
          className="linktree-baum"
          
          src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/linktree-baum@1x.png"
        />
      </div>
      <div
        className="you-like-it-share-o basicsans-regular-normal-regal-blue-18px"
        
      >
        You like it?Share our Linktr.eewith Your friends
      </div>
    </div>
  );
}


function Gruppe584(props) {
  const { className } = props;

  return (
    <div className={`gruppe-584 ${className || ""}`} >
      <div className="launch-app-1 basicsans-bold-white-23px" >
        LAUNCH APP
      </div>
    </div>
  );
}


function InterestRates(props) {
  const { className, gruppe402Props } = props;

  return (
    <div className={`interest-rates-2 ${className || ""}`} >
      <Gruppe402
        spanText1={gruppe402Props.spanText1}
        
      />
    </div>
  );
}


function Gruppe402(props) {
  const { spanText1, className } = props;

  return (
    <div className={`gruppe-2 ${className || ""}`} >
      <div className="overlap-group" >
        <div className="rechteck-181" ></div>
        <img
          className="dai"
          
          src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/dai-10@1x.png"
        />
        <div className="dai-1 basicsans-regular-normal-astral-14px" >
          DAI
        </div>
        <div className="overlap-group-1" >
          <div className="apy basicsans-regular-normal-astral-14px" >
            APY
          </div>
          <div className="percent basicsans-bold-astral-38px" >
            <span className="span basicsans-bold-astral-38px-2">{spanText1}</span>
            <span className="span basicsans-bold-astral-18px">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}


function InterestRates2(props) {
  const { dai1, dai2, apy, spanText1, spanText2 } = props;

  return (
    <div className="interest-rates-3" >
      <div className="gruppe-402" >
        <div className="overlap-group1" >
          <div className="rechteck-181-1" ></div>
          <img className="dai-34"  src={dai1} />
          <div className="dai-35 basicsans-regular-normal-astral-14px" >
            {dai2}
          </div>
          <div className="overlap-group-2" >
            <div className="apy-17 basicsans-regular-normal-astral-14px" >
              {apy}
            </div>
            <div className="percent-1 basicsans-bold-astral-38px" >
              <span className="basicsans-bold-astral-38px-2">{spanText1}</span>
              <span className="basicsans-bold-astral-18px">{spanText2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Gruppe4243(props) {
  const { children } = props;

  return (
    <div className="gruppe-42" >
      <div className="x-leverage basicsans-bold-white-18px" >
        {children}
      </div>
    </div>
  );
}


function Gruppe6123(props) {
  const { element2, level2, className } = props;

  return (
    <div className={`gruppe-612 ${className || ""}`} >
      <img className="element-2"  src={element2} />
      <div className="level-2 basicsans-regular-normal-white-13px" >
        {level2}
      </div>
    </div>
  );
}


function Gruppe613() {
  return (
    <div className="gruppe-613" >
      <img
        className="element-2-1"
        
        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-4@1x.png"
      />
      <div className="level-8 basicsans-regular-normal-white-13px" >
        LEVEL 8
      </div>
    </div>
  );
}


function Gruppe616() {
  return (
    <div className="gruppe-616" >
      <img
        className="tutorial-video"
        
        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/tutorial-video-1@1x.png"
      />
      <div className="overlap-group16" >
        <div className="start-earning basicsans-bold-white-48px" >
          Start earning
        </div>
        <div className="see-how-it-works basicsans-bold-white-21px" >
          See how it works
        </div>
      </div>
    </div>
  );
}


function Gruppe605(props) {
  const { className } = props;

  return (
    <div className={`gruppe-605 ${className || ""}`} >
      <img
        className="element-2-2"
        
        src="https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-2-12@1x.png"
      />
      <div className="level-5 basicsans-regular-normal-white-6px" >
        LEVEL 5
      </div>
    </div>
  );
}


function Gruppe606(props) {
  const { element2, className } = props;

  return (
    <div className={`gruppe-606 ${className || ""}`} >
      <img className="element-2-3"  src={element2} />
      <div className="level-5-1 basicsans-regular-normal-white-6px" >
        LEVEL 5
      </div>
    </div>
  );
}


function Gruppe6074(props) {
  const { element2, className } = props;

  return (
    <div className={`gruppe-607 ${className || ""}`} >
      <img className="element-2-4"  src={element2} />
      <div className="level-5-2 basicsans-regular-normal-white-6px" >
        LEVEL 5
      </div>
    </div>
  );
}


function Gruppe699() {
  return (
    <div className="gruppe-699" >
      <div className="gruppe-698" >
        <div
          className="leverage-2x basicsans-regular-normal-astral-18px"
          
        >
          LEVERAGE 2x
        </div>
        <div className="chain-select" ></div>
      </div>
    </div>
  );
}


function Gruppe677(props) {
  const { className, gruppe4021Props, gruppe4022Props, gruppe4022Props2 } = props;

  return (
    <div className={`gruppe-677 ${className || ""}`} >
      <Gruppe402
        spanText1={gruppe4021Props.spanText1}
        className={gruppe4021Props.className}
        
      />
      <Gruppe402
        spanText1={gruppe4022Props.spanText1}
        className={gruppe4022Props.className}
        
      />
      <Gruppe409
        spanText1={gruppe4022Props2.spanText1}
        schnittmenge7={gruppe4022Props2.schnittmenge7}
        
      />
    </div>
  );
}


function Gruppe409(props) {
  const { spanText1, schnittmenge7 } = props;

  return (
    <div className="gruppe-3" >
      <div className="overlap-group2" >
        <div className="gruppe-403" >
          <div className="tether basicsans-regular-normal-astral-14px" >
            Tether
          </div>
          <div className="gruppe-401" >
            <div className="overlap-group-3" >
              <div
                className="apy-18 basicsans-regular-normal-astral-14px"
                
              >
                APY
              </div>
              <div className="percent-2 basicsans-bold-astral-38px" >
                <span className="basicsans-bold-astral-38px-2">{spanText1}</span>
                <span className="basicsans-bold-astral-18px">%</span>
              </div>
            </div>
          </div>
        </div>
        <img className="schnittmenge-7"  src={schnittmenge7} />
      </div>
    </div>
  );
}


function Gruppe652(props) {
  const { children, className } = props;

  return (
    <div className={`gruppe-65-2 ${className || ""}`} >
      <div className="overlap-group-4" >
        <div className="rechteck-251" ></div>
        <div className="level basicsans-regular-normal-white-14px" >
          {children}
        </div>
      </div>
    </div>
  );
}


function Gruppe687(props) {
  const { className, gruppe652Props, gruppe677Props } = props;

  return (
    <div className={`gruppe-687 ${className || ""}`} >
      <Gruppe652
        className={gruppe652Props.className}
        
      >
        {gruppe652Props.children}
      </Gruppe652>
      <Gruppe677
        className={gruppe677Props.className}
        gruppe4021Props={gruppe677Props.gruppe4021Props}
        gruppe4022Props={gruppe677Props.gruppe4022Props}
        gruppe4022Props2={gruppe677Props.gruppe4022Props2}
        
      />
    </div>
  );
}


function Gruppe443() {
  return (
    <div className="gruppe-443" >
      <div className="rechteck-54" ></div>
    </div>
  );
}

const gruppe4021Data = {
    spanText1: "22",
};

const interestRates1Data = {
    gruppe402Props: gruppe4021Data,
};

const gruppe4022Data = {
    spanText1: "32",
};

const interestRates2Data = {
    gruppe402Props: gruppe4022Data,
};

const gruppe4023Data = {
    spanText1: "32",
};

const interestRates3Data = {
    gruppe402Props: gruppe4023Data,
};

const gruppe4024Data = {
    spanText1: "32",
    className: "gruppe",
};

const gruppe4025Data = {
    spanText1: "32",
    className: "gruppe-1",
};

const gruppe4091Data = {
    spanText1: "33",
    schnittmenge7: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png",
};

const gruppe6771Data = {
    gruppe4021Props: gruppe4024Data,
    gruppe4022Props: gruppe4025Data,
    gruppe4022Props2: gruppe4091Data,
};

const gruppe4026Data = {
    spanText1: "32",
    className: "gruppe",
};

const gruppe4027Data = {
    spanText1: "32",
    className: "gruppe-1",
};

const gruppe4092Data = {
    spanText1: "33",
    schnittmenge7: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png",
};

const gruppe6772Data = {
    gruppe4021Props: gruppe4026Data,
    gruppe4022Props: gruppe4027Data,
    gruppe4022Props2: gruppe4092Data,
};

const gruppe4028Data = {
    spanText1: "32",
    className: "gruppe",
};

const gruppe4029Data = {
    spanText1: "32",
    className: "gruppe-1",
};

const gruppe4093Data = {
    spanText1: "33",
    schnittmenge7: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png",
};

const gruppe6773Data = {
    gruppe4021Props: gruppe4028Data,
    gruppe4022Props: gruppe4029Data,
    gruppe4022Props2: gruppe4093Data,
};

const gruppe6521Data = {
    children: "LEVEL 7",
    className: "gruppe-65-1-1",
};

const gruppe40210Data = {
    spanText1: "32",
    className: "gruppe",
};

const gruppe40211Data = {
    spanText1: "32",
    className: "gruppe-1",
};

const gruppe4094Data = {
    spanText1: "33",
    schnittmenge7: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png",
};

const gruppe6774Data = {
    className: "gruppe-68",
    gruppe4021Props: gruppe40210Data,
    gruppe4022Props: gruppe40211Data,
    gruppe4022Props2: gruppe4094Data,
};

const gruppe6871Data = {
    gruppe652Props: gruppe6521Data,
    gruppe677Props: gruppe6774Data,
};

const gruppe6522Data = {
    children: "LEVEL 8",
    className: "gruppe-65",
};

const gruppe40212Data = {
    spanText1: "32",
    className: "gruppe",
};

const gruppe40213Data = {
    spanText1: "32",
    className: "gruppe-1",
};

const gruppe4095Data = {
    spanText1: "33",
    schnittmenge7: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png",
};

const gruppe6775Data = {
    className: "gruppe-68",
    gruppe4021Props: gruppe40212Data,
    gruppe4022Props: gruppe40213Data,
    gruppe4022Props2: gruppe4095Data,
};

const gruppe6872Data = {
    gruppe652Props: gruppe6522Data,
    gruppe677Props: gruppe6775Data,
};

const gruppe6523Data = {
    children: "LEVEL 9",
    className: "gruppe-65-1",
};

const gruppe40214Data = {
    spanText1: "32",
    className: "gruppe",
};

const gruppe40215Data = {
    spanText1: "32",
    className: "gruppe-1",
};

const gruppe4096Data = {
    spanText1: "33",
    schnittmenge7: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png",
};

const gruppe6776Data = {
    className: "gruppe-68",
    gruppe4021Props: gruppe40214Data,
    gruppe4022Props: gruppe40215Data,
    gruppe4022Props2: gruppe4096Data,
};

const gruppe6873Data = {
    gruppe652Props: gruppe6523Data,
    gruppe677Props: gruppe6776Data,
};

const gruppe40216Data = {
    spanText1: "32",
    className: "gruppe",
};

const gruppe40217Data = {
    spanText1: "32",
    className: "gruppe-1",
};

const gruppe4097Data = {
    spanText1: "33",
    schnittmenge7: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-7-10@1x.png",
};

const gruppe6777Data = {
    gruppe4021Props: gruppe40216Data,
    gruppe4022Props: gruppe40217Data,
    gruppe4022Props2: gruppe4097Data,
};

const navigationsleisteData = {
    linie1: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/linie-1-1@1x.png",
    schnittmenge2: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/schnittmenge-2@1x.png",
    e: "e",
    asypi: "asyPI",
    security: "Security",
    iconMaterialSecurity: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-material-security@1x.png",
    faq: "FAQ",
    iconMetroQuestion: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-metro-question@1x.png",
    tutorialVideos: "Tutorial Videos",
    pfad39: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-39-1@1x.png",
    pfad38: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-38-1@1x.png",
    pfad40: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/pfad-40-1@1x.png",
    launchApp: "LAUNCH APP",
    earning: "Earning",
    iconAwesomeCoins: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-awesome-coins-2@1x.png",
    nft: "NFT",
    howTo: "How to",
    iconAwesomePlay: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/icon-awesome-play@1x.png",
    element5_1: "https://anima-uploads.s3.amazonaws.com/projects/62de68f61efa8a85b0477adb/releases/62de6b202f051f4a3e39be46/img/element-5-1@1x.png",
};


