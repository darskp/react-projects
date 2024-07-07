import React, {useEffect, useState} from "react";
import {
  fetchGithubProfile,
  fetchGithubUsers,
} from "./api-config/github-profile/getUserInfo";
import "./index.css";

const GithubProfile = () => {
  const [userData, setUserData] = useState({});
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [hideSuggestions, setHideSuggestions] = useState(false);

  const handleKeyDown = (event, suggestion) => {
    if (event.key === "Enter" || event.key === " ") {
      fetchUserData(suggestion);
    }
  };

  const fetchUserData = async (username) => {
    setHideSuggestions(true);
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetchGithubProfile(username);
      setUserData(response);
    } catch (err) {
      setErrorMessage("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  const fetchListOfUsers = async () => {
    try {
      const data = await fetchGithubUsers();
      setListOfUsers(data);
    } catch (err) {
      setErrorMessage("Error fetching list of users");
    }
  };

  const handleSearch = () => {
    if (username.trim() !== "") {
      fetchUserData(username);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value.trim() !== "") {
      const filteredSuggestions =
        listOfUsers &&
        listOfUsers
          ?.filter((user) =>
            user?.login.toLowerCase().includes(value.toLowerCase()),
          )
          .map((item) => item.login);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="main-container">
      <div>
        <input
          type="text"
          className="input"
          value={username}
          onChange={handleInputChange}
          name="username"
          placeholder="Search for a user"
          onFocus={() => setHideSuggestions(false)}
        />
        <button
          className="btn"
          disabled={username.trim() === ""}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        {!hideSuggestions &&
          suggestions.length > 0 &&
          suggestions?.map((suggestion, index) => (
            <div
              tabIndex={0}
              key={index}
              role="button"
              onKeyDown={(e) => handleKeyDown(e, suggestion)}
              onClick={() => {
                fetchUserData(suggestion);
                setUsername(suggestion);
              }}
              style={{display: "block", width: "100%", textAlign: "left"}}
            >
              {suggestion}
            </div>
          ))}
      </div>
      <div style={{marginTop: "200px"}} className="card-container">
        {loading && <p>Loading...</p>}
        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
        {userData && (
          <div>
            <h2>{userData?.location}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubProfile;
