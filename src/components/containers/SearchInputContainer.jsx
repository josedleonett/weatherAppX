import React, { useContext, useState } from "react";
import SearchInputDisplay from "../presentational/SearchInputDisplay";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../context/Global.context";

const SearchInputContainer = () => {
  const { state } = useContext(ContextGlobal);
  const [input, setInput] = useState({
    value: "",
    placeholder: "Search places",
  });
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const inputOnChangeHandler = (event) => {
    setInput({ value: event.target.value });
  };

  const getLocationHandler = () => {
    // setSearchInput("");
    // setAddressList([]);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          navigate(`/location?lat=${latitude}&lon=${longitude}`);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <SearchInputDisplay
      submitHandler={submitHandler}
      placeholder={input.placeholder}
      inputValue={input.value}
      inputOnChangeHandler={inputOnChangeHandler}
      getLocationHandler={getLocationHandler}
    />
  );
};

export default SearchInputContainer;
