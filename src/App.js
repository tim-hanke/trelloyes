import React, { Component } from 'react';
import List from './composition/List';
import './App.css';

function AppAlt(props) {
  let listSections = [];
  for (const list of props.store.lists) {
    let cardsArray = [];
    for (const cardId of list.cardIds) {
      cardsArray.push(props.store.allCards[cardId]);
    };
    listSections.push(
      <List
        key={list.id}
        header={list.header}
        cards={cardsArray}
      />
    )
  }
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listSections}
      </div>
    </main>
  );
}

class App extends Component {
  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App;