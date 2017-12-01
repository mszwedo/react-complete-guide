import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {id: 1, name: 'Mike', age: 33},
                {id: 2, name: 'John', age: 20},
                {id: 3, name: 'Joe', age: 28},
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0
        };

        console.log("[App.js] Inside Constructor", props);
    }

    componentWillMount() {
        console.log("[App.js] Inside ComponentWillMount()", this.props);
    }

    componentDidMount() {
        console.log("[App.js] Inside ComponentDidMount()", this.props);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE App.js] Inside shouldComponentUpdate()", nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE App.js] Inside componentWillUpdate()", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE App.js] Inside componentDidUpdate()");
    }

    // state = {
    //     persons: [
    //         {id: 1, name: 'Mike', age: 33},
    //         {id: 2, name: 'John', age: 20},
    //         {id: 3, name: 'Joe', age: 28},
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // };

    togglePersonsHandler = () => {
        this.setState( (prevState, props) => {
            return {
                showPersons: !prevState.showPersons,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, personID) => {
        const personIndex = this.state.persons.findIndex(p => p.id === personID);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };

    render() {

        console.log("[App.js] Inside Render()", this.props);

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <Aux>
                <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </Aux>
        );
        //return React.createElement('div', {className: 'App'}, 'h1', 'Other Text');
    }
}

export default withClass(App, classes.App);
