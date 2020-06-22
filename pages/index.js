import Head from "next/head";
import styles from "./Styles.module.css";
import NavBar from "../Components/NavBar";
import TextUnderline from "../Components/TextUnderline";
import TopStrokeText from "../Components/TopStrokeText";
import TeamMate from "../Components/TeamMate";
import classNames from "classnames";
import useTeamMates from "../hooks/useTeamMates";
import SupportedTicker from "../Components/SupportedTicker";
import downArrow from "../public/down arrow.svg";
import ToolCarousel from "../Components/ToolCarousel";
import ContactSection from "../Components/ContactSection";

export default function Home() {
  const teamMates = useTeamMates();
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>GFNF</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/mxa3vft.css"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <section
          className={classNames(
            "mainMargin",
            "h-screen",
            "flex",
            "flex-col",
            "justify-between",
            "spaceAfter",
            "pt-12"
          )}
        >
          <NavBar></NavBar>
          <div>
            <h1 className={styles.outlineText}>
              AN ELITE TEAM OF BOTTING EXPERTS
            </h1>
            <h1>DELIVERING YOU THE BEST RESELLING TOOLS IN THE COMMUNITY</h1>
            <div className={classNames("flex", "justify-between", "relative")}>
              <div className={("relative", "flex")}>
                <div className={classNames("self-end", styles.soldOut)}>
                  <h3>Sold Out</h3>
                  <div className={styles.barAnim}></div>
                  <div className={styles.barAnim}></div>
                </div>
                <a href="/buy-now" className={classNames("self-end")}>
                  <div className="buttonGreen">
                    <h3>Buy Now</h3>
                  </div>
                </a>
              </div>
              <a
                href={"#Team"}
                className={classNames("relative", "w-6", "h-20")}
              >
                <img
                  className="absolute w-full h-full bottom-0 right-0"
                  src={downArrow}
                ></img>
              </a>
            </div>
          </div>
        </section>
        <section
          id="Team"
          className={classNames(styles.ltGray, "spaceBefore", "spaceAfter")}
        >
          <div className={classNames("mainMargin")}>
            <TopStrokeText>
              <h2 className={classNames("pt-4", "pb-12")}>All Star Lineup</h2>
            </TopStrokeText>
            <div className="w-full flex  flex-col md:flex-row relative">
              {teamMates.map(({ name, bio, img, handle }, index) => (
                <TeamMate
                  name={name}
                  bio={bio}
                  img={img}
                  handle={handle}
                  counter={`0${index + 1}`}
                ></TeamMate>
              ))}
            </div>
          </div>
        </section>
        <section>
          <SupportedTicker></SupportedTicker>
        </section>
        <section
          id="Features"
          className={classNames(styles.ltGray, "spaceBefore", "spaceAfter")}
        >
          <ToolCarousel></ToolCarousel>
          <div className="mainMargin"></div>
        </section>
        <ContactSection>
        </ContactSection>
      </main>
    </div>
  );
}
