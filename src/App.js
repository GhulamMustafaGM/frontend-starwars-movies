import React, { Component } from 'react'
import './Assets/App.css'
import Search from './Components/API/Search'
import Main from './Components/API/Main'
import M from 'materialize-css/dist/js/materialize'

// Created app class.
class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query:"",
      sort:""
    }
  }
  // Created lifecycle component 
  componentDidMount(){
    // Created materializeCSS, componentDidMount method, and the select movie item.
    document.addEventListener('DOMContentLoaded', function() {
      var movie = document.querySelectorAll('select');
      M.FormSelect.init(movie, {});
    });
  }

  render() { 
    return (
      <div>
        <Search/>
        <Main/>
      </div>
    );
  }
}

export default app;
