import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { useParams } from "react-router-dom";
import { ReactComponent as Star } from "../assets/Star.svg";
import { ReactComponent as Carrot } from "../assets/Carrot.svg";
import { Link } from "react-router-dom";

function Details({ className }) {
  let { id } = useParams();
  const author = "Elijah Kramer";
  const language = "JavaScript";

  return (
    <div className={className}>
      <span className="repo-name">Repository Name: {id}</span>
      <div className="stars-container">
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
      </div>
      <hr />
      <span className="author">Author: {author}</span>
      <span className="language">Language: {language}</span>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae
        aliquet nec ullamcorper sit amet risus. Mollis aliquam ut porttitor leo
        a diam. Elementum sagittis vitae et leo. Ipsum dolor sit amet
        consectetur adipiscing. Duis ultricies lacus sed turpis tincidunt id.
        Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu
        vitae. Dictum fusce ut placerat orci nulla pellentesque dignissim enim
        sit. Mauris augue neque gravida in fermentum et sollicitudin. Habitant
        morbi tristique senectus et netus et malesuada fames ac. Sapien eget mi
        proin sed libero. Pretium fusce id velit ut tortor pretium viverra.
        Scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus
        vitae aliquet nec. Sed vulputate odio ut enim blandit volutpat. Quis
        imperdiet massa tincidunt nunc pulvinar sapien et ligula. Volutpat odio
        facilisis mauris sit amet massa vitae. Erat imperdiet sed euismod nisi
        porta lorem mollis. Nibh mauris cursus mattis molestie.
      </p>
      <div className="link-container">
        <Carrot />
        <Link to={`/`}>Back To Search</Link>
      </div>
    </div>
  );
}

Details.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.instanceOf(ThemeContext),
};

Details.defaultProps = {
  className: "",
};

export default styled(Details)`
  margin: 40px 5%;

  background-color: white;
  display: grid;
  grid-template-areas:
    "repo . stars"
    "divider divider divider"
    "author . language"
    "body body body";
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 40px 1px 20px 1fr;
  border: 4px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;

  .repo-name {
    grid-area: repo;
    padding: 10px 0 0 30px;
    font-size: 24px;
  }

  .stars-container {
    justify-self: end;
    grid-area: stars;
    padding: 10px 30px 0 0;

    display: grid;
    width: 70px;
    grid-template-columns: repeat(auto-fit, minmax(0px, max-content));

    svg {
      transform: rotate(20deg);
      fill: ${(props) => props.theme.golden};
    }

    .star {
      width: 20px;
      min-width: 20px;
    }
  }

  .author {
    grid-area: author;
    padding: 5px 0 0 30px;
    font-size: 18px;
    font-weight: 400;
    color: #545353;
  }

  .language {
    justify-self: end;
    grid-area: language;
    padding: 5px 30px 0 0;
    color: #545353;
  }

  .description {
    grid-area: body;
    padding: 20px 30px;
    font-size: 20px;
  }

  hr {
    justify-self: center;
    grid-area: divider;
    width: 95%;
    border-radius: 1px;
    margin: 0;
  }

  .link-container {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    margin: 15px 5%;
    height: 12px;
    cursor: pointer;

    a {
      color: unset;
      text-decoration: unset;
    }

    svg {
      fill: ${(props) => props.theme.pink};
    }
  }

  @media only screen and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;

    .language {
      padding: 5px 0 0 30px;
    }

    .stars-container {
      position: absolute;
      top: 80px;
      right: 30px;
    }
  }
`;
