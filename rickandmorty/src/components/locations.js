import React from 'react';

class Location extends React.Component {

    constructor() {
        super()
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/location/')
        .then(response => response.json)
        .then(data => {
            this.setState({
                location: data
            })
        })
    }
    
    render() {

        const showLocations = this.state.locations.map(locations)

        return (
            <div>
                {showLocations}
            </div>
        )
    }
}

export default Location