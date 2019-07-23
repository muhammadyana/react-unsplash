import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  // console.log(this.state.term);
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
  // onInputClick(){
  //   console.log('Input was clicked');
  // }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term);
  }
  render(){
    return(
      <div className="ui segment">
        {/* <form onSubmit={(event) => this.onFormSubmit(event)} className='ui form'> */}
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term}
              // onChange={e => console.log(e.target.value)}
              onChange={(e) => this.setState({ term: e.target.value })}
              >
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar