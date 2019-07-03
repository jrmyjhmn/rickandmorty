import React from 'react';

class Location extends React.Component {

    constructor() {
        super()
        this.state = {
            id: null,
            locations: [],
            residentsEarth: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/location/')
        .then(results => results.json())
        .then(data => {
            console.log(data)
            this.setState({
                locations: data.results,
                residentsEarth: data.results[0].residents
            })
            return data
        })

    }

    handleClick() {

    }

    render() {

        const { locations, residentsEarth } = this.state
        const locationList = locations.map(location => <li onClick={this.handleClick} key={location.name+1}>{location.name}</li>)
        const characterList = residentsEarth.map(resident => <li key={resident+1}>{resident}</li>)
        console.log(residentsEarth)
        console.log(locations)

        return(
            <div>
                <div>{locationList}</div>
                <div>{characterList}</div>
            </div>
        )
    }

}

export default Location