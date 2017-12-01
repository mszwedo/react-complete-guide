import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log("[Persons.js] Inside Constructor", props);
    }

    componentWillMount() {
        console.log("[Persons.js] Inside ComponentWillMount()", this.props);
    }

    componentDidMount() {
        console.log("[Persons.js] Inside ComponentDidMount()", this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] Inside ComponentWillReceiveProps()", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE Persons.js] Inside shouldComponentUpdate()", nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     //return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside componentWillUpdate()", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE Persons.js] Inside componentDidUpdate()");
    }

    render() {
        console.log("[Persons.js] Inside render()", this.props);
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    name={person.name}
                    age={person.age}
                    position={index}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            </ErrorBoundary>
        });
    }
}

export default Persons;