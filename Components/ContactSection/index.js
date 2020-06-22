import React from "react";
import useTeamMates from "../../hooks/useTeamMates";
import TopStrokeText from "../TopStrokeText";
import TextUnderline from "../TextUnderline";

const ContactSection = () => {
  return (
    <section
      id="Contact"
      className="mainMargin spaceBefore flex-col justify-between"
    >
      <TopStrokeText>
        <div className="flex justify-between mx-0 content-start py-5 spaceAfter">
          <div className="sixty">
            <h2>Get in touch with us.</h2>
          </div>
          <div className="flex-col px-5">
            <h5 className="font-bold whitespace-no-wrap pb-2">Contact Us</h5>
            <a className="spanSpacer" href="tel:614.555.777">
              <TextUnderline>614.555.777</TextUnderline>
            </a>
            <a className="spanSpacer" href="mailto:garrett@gfnf.com">
              <TextUnderline>garrett@gfnf.com</TextUnderline>
            </a>
          </div>
          <div className="flex-col">
            <h5 className="font-bold whitespace-no-wrap pb-2">Follow Us</h5>
            <a className="spanSpacer" href="https://twitter.com/gfnf__">
              <TextUnderline>Twitter</TextUnderline>
            </a>
            <a className="spanSpacer" href="https://www.instagram.com/gfnf__/">
              <TextUnderline>Instagram</TextUnderline>
            </a>
  
          </div>
        </div>
      </TopStrokeText>
      <div className="flex justify-between spaceAfterSmall">
        <span className="footnote">© 2020 GFNF All Rights Reserved</span>
        <img id="bolt" className="h-8" src="/logo.svg"></img>
      </div>
    </section>
  );
};

export default ContactSection;
