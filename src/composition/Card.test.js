import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Card';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
    it('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                <Card
                    key={0}
                    title="First Card"
                    content="Lorem Ipsum"
                />   
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});