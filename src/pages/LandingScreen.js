import React from "react";
import "../App.css";
import paperUpload from "../assets/images/paperUpload.svg";
import arrow from "../assets/images/arrow.svg";
import message from "../assets/images/message.svg";
import garyBigIcon from "../assets/images/garyBigIcon.svg";

function IconDescription({ icon, description }) {
  return (
    <div className="icon-description">
      <img src={icon} alt="Paper Upload" />
      <p className="description">{description}</p>
    </div>
  );
}

function Button() {
  return <button className="rounded-btn">Get Started For Free!</button>;
}

const LandingScreen = () => {
  return (
    <div>
      <div className="img-bg content" style={{ height: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ fontFamily: "'Sen Black', sans-serif" }}>
            Welcome to StandardsGPT! -{" "}
          </p>
          <p
            style={{
              color: "var(--green-color)",
              fontFamily: "'Sen Black', sans-serif",
            }}
          >
            “Where Standards Come to Find You!"
          </p>
        </div>
        <div style={{ width: "64rem" }}>
          <h1 className="large-text" style={{ color: "var(--green-color)" }}>
            Say Goodbye to Clause Chaos:
          </h1>
          <h1 className="large-text">
            Meet Your New AI Standards Searching Savior
          </h1>
        </div>
        <div style={{ width: "44rem" }}>
          <p className="italic-desc">
            "Gary, our AI robot, has spent more time studying Australia's
            standards, legislation, and codes than most humans have spent
            binge-watching on Netflix. He`s the AI robot that puts Google to
            shame. With his lightning-fast search skills, he can find the clause
            numbers you need faster than you can say "Hey, Gary!"
          </p>
          <p>So sit back, relax, and let Gary do the heavy lifting!</p>
        </div>
        <Button />
        <p className="credit-card-desc">*No Credit Card Required*</p>
      </div>
      <div className="content" style={{ height: "50vh" }}>
        <div style={{ width: "70rem" }}>
          <p className="inquiry">
            Do you find yourself drowning in a sea of standards and regulations?
            Wish you had a robot sidekick to help you navigate the murky waters
            of compliance? Well, look no further! Our Aussie AI robot Gary has
            got you covered.
          </p>
        </div>
      </div>
      <div className="content">
        <h1 className="larger-text">How Does StandardsGPT Work?</h1>
        <IconDescription
          icon={paperUpload}
          description={
            "Simply upload the PDF version of the standard, legislation or code you need Gary to help you with. You can store these PDF’s on your account which means you only need to upload once and the PDF will be ready anytime you need!"
          }
        />
        <IconDescription
          icon={arrow}
          description={
            "Select the standard, legislation or code you would like Gary to search for you. You can select from your own personally uploaded library of documents or use the document you just uploaded."
          }
        />
        <IconDescription
          icon={message}
          description={
            "You’re good to go! Ask Gary anything, he’s also been trained to give you a clause and page number with every answer so you can double check yourself that he’s given you the correct information!"
          }
        />
      </div>
      <div className="img-bg content-row">
        <img className="gary-big-icon" src={garyBigIcon} />
        <div className="content" style={{width: '36rem', height: '75vh'}}>
          <h1 className="left-justified" style={{ color: "var(--green-color)" }}>Say G’day To Gary!</h1>
          <p className="italic-desc left-justified">
            Gary or “Gaz” as he likes to be called is your typical true blue
            hard workin’ Aussie. When he’s not helping you quickly find clauses
            to any of the Australia standards, legislations or codes there’s
            nothing he loves more than knocking the froth off a “digital cold
            one” in the arvo. He’s also a bit of a know it all when it comes to
            helping tradies on construction standards, but he can help with just
            about any category of standard you have. You can even ask him how is
            weekend was because well, robots have feelings too! So don’t be shy,
            say g’day to “Gary” today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
