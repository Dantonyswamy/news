import React from 'react';

class SearchBar extends React.Component {
    state = {term:''}
    onFormSubmit(event){
        event.preventDefault()        
        this.props.onSubmit(this.state.term)
   }
    render() {
        return (
            <div className="ui segment">
                <div className="ui form">                  
                    <form onSubmit = {(e) =>this.onFormSubmit(e)}>
                        <div className="field">
                            <label>News Search</label>
                            <input
                                type="text"
                                value={this.state.term}
                                onChange={e => this.setState({term:e.target.value})}></input>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar