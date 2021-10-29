/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";
import { useParams } from "react-router-dom";
import { ReactComponent as Star } from "../assets/Star.svg";
import { ReactComponent as Carrot } from "../assets/Carrot.svg";
import { Link } from "react-router-dom";
import { getRepositoryById } from "../models/SearchModel";

function Details({ className }) {
  const [fetchError, setFetchError] = useState(null);
  const [repoDetails, setRepoDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getRepositoryById(id)
      .then((results) => setRepoDetails(results))
      .catch((error) => setFetchError(error));
  }, []);

  let { name, author, language, stars, description } = repoDetails;

  return (
    <div className={className}>
      <span className="repo-name">{name}</span>
      <div className="stars-container">
        <Star className="star" />
        <span>{stars}</span>
      </div>
      <hr />
      <span className="author">Author: {author}</span>
      <span className="language">Language: {language}</span>
      <p className="description">{description}</p>
      <Link to={`/`}>
        <Carrot />
        Back To Search
      </Link>
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
  overflow-wrap: anywhere;

  .repo-name {
    grid-area: repo;
    padding: 10px 0 0 30px;
    font-size: 24px;
  }

  .stars-container {
    position: relative;
    justify-self: end;
    align-self: center;
    grid-area: stars;
    margin-right: 30px;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 13px;
    border: 3px solid ${(props) => props.theme.golden};
    border-radius: 4px;
    filter: drop-shadow(0px 4px 1px rgba(0,0,0,0.25));
    background-color: ${(props) => props.theme.golden};
    background-clip: content-box;

    span {
      font-size: 10px;
      font-weight: bold;
    }

    svg {
      fill: ${(props) => props.theme.golden};
    }

    .star {
      position: absolute;
      top: -8px;
      height: 23px;
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

  a {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    margin: 15px 5%;
    height: 12px;

    color: unset;
    text-decoration: unset;

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
      top: 50px;
      right: 30px;
    }
  }
`;
