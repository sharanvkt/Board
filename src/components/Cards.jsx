import React from "react";
import { CardsData } from "../data/data";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-9 mt-10">
      {CardsData.map((card, id) => {
        return (
          <div className="w-full grid-rows-3" key={id}>
            <Card
              title={card.title}
              backgroundColor={card.backgroundColor}
              numbers={card.numbers}
              icon={card.icon}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
