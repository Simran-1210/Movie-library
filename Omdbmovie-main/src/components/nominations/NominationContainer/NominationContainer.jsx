import { useState, useEffect } from "react";
import "./nominationContainer.scss";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../store/actions/index";
import NominationRow from "../NominationRow/NominationRow";
import NominationCounter from "../NominationCounter/NominationCounter";

const NominationContainer = () => {
  // Local State
  const [delayNominationAnimation, setDelayNominationAnimation] =
    useState(false);

  // Redux States Hooks
  const nominationList = useSelector((state) => state.nominate.nominationList);
  // Redux Dispatch Hooks
  const setNominationsCompleted = useDispatch();
  const cancelNomination = useDispatch();
  const setNominationList = useDispatch();
  // console.log(nominationList);
  // Delays nomination entrance animations on first load.
  // Removes delay 1 second after page loads
  useEffect(() => {
    setDelayNominationAnimation(true);
    const timer = setTimeout(() => {
      setDelayNominationAnimation(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Checks when the list reaches 20
  useEffect(() => {
    if (nominationList === 20) {
      setNominationsCompleted(action.setNominationsCompleted(true));
    }
  }, [nominationList, setNominationsCompleted]);

  // Pulls Nomination List from local storage
  useEffect(() => {
    const localData = localStorage.getItem("nominationList");
    // console.log({ JSON: JSON.parse(localData) });
    if (localData) {
      setNominationList(action.storeAllNominations(JSON.parse(localData)));
    }
    // console.log(localData);
  }, [setNominationList]);

  // Saves resultsArray to local storage
  useEffect(() => {
    // console.log({ "Nomination List Updated": nominationList });
    localStorage.setItem("nominationList", JSON.stringify(nominationList));
  }, [nominationList]);

  const removeHandler = (title) => {
    cancelNomination(action.cancelNomination(title));
  };
  // console.log(nominationList);

  return (
    <section className="nom-container">
      <div className="nom-container__counter-wrapper">
        <NominationCounter nominationList={nominationList} />
      </div>

      {nominationList &&
        nominationList.map((nom, index) => {
          return (
            <NominationRow
              key={nom.imdbID}
              movieIndex={index + 1}
              img={nom.Poster}
              title={nom.Title}
              imdbID={nom.imdbID}
              imdbRating={nom.imdbRating}
              mpaa={nom.Rated}
              genres={nom.Genre}
              delay={index}
              runtime={nom.Runtime}
              remove={() => removeHandler(nom.Title)}
              delayNominationAnimation={delayNominationAnimation}
            />
          );
        })}
    </section>
  );
};

export default NominationContainer;
