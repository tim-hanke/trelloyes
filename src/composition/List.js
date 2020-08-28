import React from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
  const cardsDivs = props.cards.map((card) => (
    <Card
      key={card.id}
      listId={props.id}
      id={card.id}
      title={card.title}
      content={card.content}
      onDeleteCard={props.onDeleteCard}
    />
  ));
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cardsDivs}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.onRandomCard(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
