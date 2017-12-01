import React, { Component } from 'react';
import classes from './Person.css';
import withClass from "../../../hoc/withClass";
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log("[Person.js] Inside Constructor", props);
    }

    componentWillMount() {
        console.log("[Person.js] Inside ComponentWillMount()", this.props);
    }

    componentDidMount() {
        console.log("[Person.js] Inside ComponentDidMount()", this.props);
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log("[Person.js] Inside render()", this.props);
        const rnd = Math.random();
        if (rnd > 0.99) {
            throw new Error('Something went wrong');
        }

        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => {this.inputElement=inp}}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);