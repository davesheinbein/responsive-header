import React, { Component } from 'react';
// Components
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section'
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarBackdrop from '../../components/SidebarBackdrop/SidebarBackdrop';
// style
import './style/App.css';

class App extends Component {
  state = {
    sidebarOpen: false,
  }

  sidebarClickHandler = () => {
    this.setState(prevState => {
      return { sidebarOpen: !prevState.sidebarOpen }
    })
  }

  sidebarBackdropClickHandler = () => {
    this.setState({ sidebarOpen: false })
  }

  render() {
    let sidebarBackdrop

    if (this.state.sidebarOpen) {
      sidebarBackdrop = <SidebarBackdrop sidebarBackdropClickHandler={this.sidebarBackdropClickHandler} />
    }
    return (
      <div className='app'>
        <Header sidebarClickHandler={this.sidebarClickHandler} />
        <Sidebar show={this.state.sidebarOpen} />
        {sidebarBackdrop}
        <Section>
          This is a responsive header design! 
        </Section>
      </div>
    )
  }
}

export default App;