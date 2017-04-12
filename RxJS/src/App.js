import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">         
        {/*<h1>{this.state.headerText}</h1>
        <h2>{this.state.contentText}</h2>*/}
        <h1>LISTify</h1>
        <Header/>
        <Movies/>
        <Cities/>
        <Extra/>
        <Last/>
        <One/>
      </div>
    );
  }
}

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Marco Seven",
          "age": 33
        },
        {
          "id": 2,
          "name": "Tom Cruise",
          "age": 54
        },
         {
          "id": 3,
          "name": "Brad Pitt",
          "age": 53
        }
      ]
    };
  }

  render(){
    return(
      <div>
        <table>
          <thead>
            <th>
              <td>ID</td>
              <td>NAME</td>
              <td>AGE</td>
            </th>
          </thead>
          <tbody>
            {this.state.data.map((person, i)=> <TableRow key={i} data={person} />)}
          </tbody>
        </table>
      </div>
    )
  }
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
        <table>
          <thead>
            <th>
              <td>ID</td>
              <td>CHARACTER</td>
              <td>MOVIE</td>
            </th>
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
            <th>
              <td>ID</td>
              <td>CITY</td>
              <td>RATING</td>
            </th>
          </thead>
          <tbody>
            {this.state.citydata.map((city, i)=> <CityTable key={i} citydata={city} />)}
          </tbody>
        </table>
      </div>
    );
  }
}




class TableRow extends React.Component{
  render(){
    return(
    <tr>
      <td>{this.props.data.id}</td>
      <td>{this.props.data.name}</td>
      <td>{this.props.data.age}</td>
    </tr>
    )
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

class Extra extends React.Component{
  constructor(){
    super()
    this.state= {
      data: [
        {
          "id": 1,
          "language": "REACT",
          "backedby": "FACEBOOK"
        },
        {
          "id": 2,
          "language": "ANGULAR",
          "backedby": "GOOGLE"
        }
      ]
    }
  }

  render(){
    return(
      <table>
        <thead>
          <th>
            <td>ID</td>
            <td>LANGUAGE</td>
            <td>BACKED BY</td>
          </th>
        </thead>
        <tbody>
          {this.state.data.map((extra, i) => <ExtraTable key={i} data={extra}/> )}
        </tbody>
      </table>
    );
  }
}

class ExtraTable extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.language}</td>
        <td>{this.props.data.backedby}</td>
      </tr>
    );
  }
}

class Last extends React.Component{
  constructor(){
    super()
    this.state = {
      data: [
        {
          "id":1,
          "name": "Coding + Family + Love",
          "passionlevel": "First"
        },
        {
          "id":2,
          "name": "Trading and Making Money",
          "passionlevel": "Very Close Second"
        },
        {
          "id":3,
          "name": "Basketball",
          "passionlevel": "Third"
        }
      ]
    }
  }

  render(){
    return(
      <table>
        <thead>
          <th>
            <td>ID</td>
            <td>NAME</td>
            <td>PASSIONLEVEL</td>
          </th>
        </thead>
        <tbody>
          {this.state.data.map((data, i) => <LastTable key={i} data={data}/> )}
        </tbody>
      </table>
    );
  }
}

class LastTable extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.passionlevel}</td>
      </tr>
    )
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
          <th>
            <td>ID</td>
            <td>PLACE</td>
          </th>
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

export default App;













