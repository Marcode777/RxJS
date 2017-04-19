import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      statetoprops: "this is statetoprops data, data coming from the main state",
      extradata: "this is also actual extradata coming from the main state"
    }
  }


  render() {
    return (
      <div className="App">         
        {/*<h1>{this.state.headerText}</h1>
        <h2>{this.state.contentText}</h2>*/}

        <h1>LISTify</h1>
        <Movies statetoprops={this.state.statetoprops} extradata={this.state.extradata}/>
        <Cities/>
        <One/>
        <Clock/>
        
      </div>
    );
  }
}

App.defaultProps={
  header: "default props for the header..."
}


class Movies extends React.Component{
  constructor(){
    super()
    this.state = {
    moviedata:[
        {
          "id": 1,
          "character": "Major",
          "movie": "Ghost in the Shell"
        },
        {
          "id": 2,
          "character": "Joy",
          "movie": "JOY"
        },
        {
          "id": 3,
          "character": "Ethan Hunt",
          "movie": "MI"
        }
      ]
    }
  }

 render(){
    return(
      <div>
       <h3>{this.props.statetoprops}</h3>
       <h3>{this.props.extradata}</h3>
        <table>
          <thead>
            <tr>
            <td><strong>ID</strong></td>
            <td><strong>CHARACTER</strong></td>
            <td><strong>MOVIE</strong></td>
            </tr>
          </thead>
          <tbody>
            {this.state.moviedata.map((person, i)=> <TableRow2 key={i} moviedata={person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}



class Cities extends React.Component{
  constructor(){
    super()
    this.state = {
      citydata: [
        {
          "id": 1,
          "city": "New York City",
          "rating": "AA+"
        },
         {
          "id": 2,
          "city": "Chicago",
          "rating": "AA"
        },
         {
          "id": 3,
          "city": "Los Angeles",
          "rating": "A"
        }
      ]
    }
  }

  render(){
    return(
      <div>
        <table>
          <thead>
            <tr>
            <td><strong>ID</strong></td>
            <td><strong>CITY</strong></td>
            <td><strong>RATING</strong></td>    
            </tr>
          </thead>
          <tbody>
            {this.state.citydata.map((city, i)=> <CityTable key={i} citydata={city} />)}
          </tbody>
        </table>
      </div>
    );
  }
}








class TableRow2 extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.moviedata.id}</td>
        <td>{this.props.moviedata.character}</td>
        <td>{this.props.moviedata.movie}</td>
      </tr>
    )
  }
}

class CityTable extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.citydata.id}</td>
        <td>{this.props.citydata.city}</td>
        <td>{this.props.citydata.rating}</td>
      </tr>
    );
  }
}


class One extends React.Component{
  constructor(){
    super()
    this.state = {
      data:[
        {
          "id": 1,
          "place": "Times Square"
        },
         {
          "id": 2,
          "place": "Union Square"
        },
         {
          "id": 3,
          "place": "Battery Park"
        }
      ]
    }
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
          <td><strong>ID</strong></td>
          <td><strong>PLACE</strong></td>
          </tr>
        </thead>
        <tbody>
         {this.state.data.map((data, i) => <OneTable  key={i} data={data} /> )}
        </tbody>
      </table>
    );
  }
}

class OneTable extends React.Component{
  render(){
    return(
      <table>
        <tr>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.place}</td>
        </tr>
      </table>
    );
  }
}

class Clock extends React.Component{
  constructor(){
    super()
    this.state = { 
      date: new Date()
    };
  }

  componentDidMount(){
    this.timeID= setInterval(
    () => {this.tick()}, 1000)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  render(){
    return(
      <div>
        <h3>The Time Current Time Is: {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}






export default App;













