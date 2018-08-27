import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson}/>
                <ul>
                    {this.props.personList.map( person => (
                    <li><Person 
                        key={person.id}
                        name={person.name} /> 
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personList: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: () => dispatch({type: 'ADD_PERSON', name:'Jason'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);