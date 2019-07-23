import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    }); 
    console.log(response.data.results);
    // this.state.images.push(response.data.results);
    this.setState({ images: response.data.results });
  }
  
  // onSearchSubmit(term){
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 18d9b38dfc933f822475f0400313a6e45dc5b2197f8fcaa641ce049411329012'
  //     }
  //   }).then((response) => {
  //     console.log(response.data.results);
  //   });
  // }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found: {this.state.images.length} Images  */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App