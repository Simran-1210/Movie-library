import * as actionTypes from "./actionTypes";
import axios from "axios";

// Manually Stores all Nominations for Local Storage
export const clearAllNominations = () => {
  return {
    type: actionTypes.NOMINATIONS_CLEARED,
  };
};

// Manually Stores all Nominations for Local Storage
export const storeAllNominations = (localStorageList) => {
  // console.log(localStorageList);
  return {
    type: actionTypes.NOMINATIONS_STORED,
    localStorageList: localStorageList,
  };
};

// Tells reducer the nomination was canceled
export const setNominationsCompleted = () => {
  return {
    type: actionTypes.NOMINATIONS_COMPLETED,
  };
};

// Tells reducer all 5 nominations have been selected
export const cancelNomination = (movieTitle) => {
  return {
    type: actionTypes.NOMINATION_CANCELED,
    movieTitle: movieTitle,
  };
};

// Lets the reducer know the query to the API has started
export const nominationQueryStarted = () => {
  return {
    type: actionTypes.NOMINATED_STARTED,
  };
};

// Receives the result from OMDB API Call
export const nominationQuerySucceeded = (result) => {
  // console.log("Nomination ActionCreator Success:", result);
  return {
    type: actionTypes.NOMINATED_SUCCESS,
    omdbResult: result,
  };
};

// Fires if there is an error from the API
export const nominationQueryFailed = (error) => {
  return {
    type: actionTypes.NOMINATED_FAILED,
    error: error,
  };
};

// Searches the API asynchronously
export const queryOmdbNomination = (movieTitle, movieYear) => {
  return (dispatch) => {
    dispatch(nominationQueryStarted());

    // OMDB Movie API
    const apiKey = import.meta.env.VITE_OMDB_KEY;
    const omdbUrl = `https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&apikey=${apiKey}`;

    axios
      .get(omdbUrl)
      .then((res) => {
        const response = res.data;
        dispatch(nominationQuerySucceeded(response));
      })
      .catch((error) => {
        dispatch(nominationQueryFailed(error));
      });
  };
};
