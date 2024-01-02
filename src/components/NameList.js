import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

    const persons = [
        { id: 1, name: 'Bruce', age: 30, skill: 'React' },
        { id: 2, name: 'Clark', age: 25, skill: 'Angular' },
        { id: 3, name: 'Diana', age: 28, skill: 'Vue' }
    ]
    // const names = ['Bruce', 'Clark', 'Diana'];
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList