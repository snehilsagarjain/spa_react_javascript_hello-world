import React from "react";
import { Button } from "@react-md/button";
import { NavLink } from "react-router-dom";
import "./frontpage.css";
export const HeroBanner = () => {
  //const logo = "https://cdn.auth0.com/blog/developer-hub/react-logo.svg";
  const slideImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];
  return (
    <>
      <Button id="outlined-button-5" theme="clear" themeType="outline">
        <NavLink to={`/sagar`}>
          <h1>
            <b>
              <u>WELCOME TO SAGAR FASHIONS</u>🙏
            </b>
          </h1>
        </NavLink>
      </Button>
      <div className="slideshow">
        {slideImages.map((each, index) => (
          <div key={index} className="slideshow-image">
            {/*"className=each-slide" */}
            <img className="lazy" src={each} alt="sample" />
          </div>
        ))}
        {/*
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Hello, React World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for React apps using <strong>Auth0</strong>.
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/spa/react/basic-authentication"
        className="button button--secondary"
      >
        Check out the React code sample →
    </a>*/}
      </div>
    </>
  );
};
