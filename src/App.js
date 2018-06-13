import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="window">
          <header class="toolbar toolbar-header">
            <h1 class="title">Header</h1>
          </header>
          <div class="window-content">
            <div class="pane-group">
              <div class="pane-sm sidebar">
                <nav class="nav-group">
                  <h5 class="nav-group-title">Favorites</h5>
                  <a class="nav-group-item active">
                    <span class="icon icon-home"></span>
                    connors
                  </a>
                  <span class="nav-group-item">
                    <span class="icon icon-download"></span>
                    Downloads
                  </span>
                  <span class="nav-group-item">
                    <span class="icon icon-folder"></span>
                    Documents
                  </span>
                  <span class="nav-group-item">
                    <span class="icon icon-signal"></span>
                    AirPlay
                  </span>
                  <span class="nav-group-item">
                    <span class="icon icon-print"></span>
                    Applications
                  </span>
                  <span class="nav-group-item">
                    <span class="icon icon-cloud"></span>
                    Desktop
                  </span>
                </nav>
              </div>
              <div class="pane">
                <table class="table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Kind</th>
                      <th>File Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    ...
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <footer class="toolbar toolbar-footer">
            <h1 class="title">Footer</h1>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
