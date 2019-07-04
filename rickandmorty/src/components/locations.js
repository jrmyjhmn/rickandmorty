import React from 'react';

class Location extends React.Component {

    constructor() {
        super()
        this.state = {
            locations:[],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/location/')
        .then(results => results.json())
        .then(data => {
            this.setState({
                locations: data.results,
                locationId: data.results.id
            })
        return data
        })
    }

    handleClick(e) {

        console.log(e.target)
        console.log(this.state.locations[3])

    }

    render() {

        const { locations } = this.state
        const locationList = locations.map(location => <li onClick={this.handleClick} key={location.name+1}>{location.name}</li>)
        
        console.log(locations)

        return(
            <div>
                <div>{locationList}</div>
            </div>
        )
    }

}

export default Location