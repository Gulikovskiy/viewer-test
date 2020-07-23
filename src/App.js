import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import Card from "./components/card";
import { GLOBAL_ABI, GLOBAL_ADDRESS } from "./config";
import Button from "./components/button";

const App = () => {
  const [groupsWithCards, setGroupsWithCards] = useState([]);

  useEffect(() => {
    (async () => {
      const web3 = await new Web3(Web3.givenProvider || "ws://localhost:8545");
      const fetchedContract = await new web3.eth.Contract(
        GLOBAL_ABI,
        GLOBAL_ADDRESS
      );

      const fetchedIds = await fetchedContract.methods.getGroupIds().call();

      const groupsArray = await Promise.all(
        fetchedIds
          .map(
            async (item) => await fetchedContract.methods.getGroup(item).call()
          )
          .flat()
      );

      const cardsArray = await Promise.all(
        groupsArray
          .map((item) =>
            item.indexes.map((cardItem) =>
              fetchedContract.methods.getIndex(cardItem).call()
            )
          )
          .flat()
      );

      setGroupsWithCards(
        groupsArray.map(({ indexes, ...tailGroup }) => ({
          indexes,
          cards: cardsArray.filter(({ id }) =>
            indexes.some((index) => index === id)
          ),
          ...tailGroup,
        }))
      );
    })();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <a className="headerLogo" href="#something">
          Logotype
        </a>
        <Button text="Connect wallet" />
      </div>
      <h1 className="title">All Indexes</h1>
      {groupsWithCards.map((item) => (
        <div className="cardsContainer">
          <span className="cardsTitle">{item.name}</span>
          <div className="cards">
            {item.cards.map((card) => (
              <Card card={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
