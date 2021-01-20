import React, {Component} from 'react';

class AdrCompot extends Component {
    render() {
        let { value, key} = this.props
        return (
            <div>
                {value.name}-{value.age}-{value.status.toString()}-{value.address.city}-{value.address.country}-{value.address.street}-{value.address.houseNumber}
            </div>
        );
    }
}

export default AdrCompot;