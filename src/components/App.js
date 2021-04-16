import React from 'react';
import SearchBar from './SearchBar';
import NewsList from './NewsList';
import newsApi from '../api/newsApi';
class App extends React.Component{
    state={newsAll:[]}
    onSearchSubmit = async(term) => {
       const response = await newsApi.get('/everything', {
            params:{q:term}            
       })        
        this.setState({newsAll: response.data.articles})
    }
    render() {
        return(
        <div className="ui container" style={{marginTop:'20px'}}>        
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                <NewsList news={this.state.newsAll}></NewsList>
    </div>
      )
    }    
}

export default App