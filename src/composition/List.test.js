import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    const header = "First List";
    const cardObject = [{
        id: "a",
        title: "First card",
        content: "Lorem ipsum",
    }];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <List
                header={header}
                cards={cardObject}
            />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                <List
                    header={header}
                    cards={cardObject}
                />   
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});