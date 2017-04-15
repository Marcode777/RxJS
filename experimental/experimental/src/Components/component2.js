import React from 'react';

export default class Component2 extends React.Component{

  constructor(){
    super()
    this.state ={
      data: [
        {
          "id": 1,
          "cityname": "New York City"
        },
        {
          "id": 2,
          "cityname": "London"
        },
        {
          "id": 3,
          "cityname": "Paris"
        }
      ]
    }
  }

  render(){
    return(
        <div>
          <h3>Component2</h3>
          <table>
            <th>
              <td>ID</td>
              <td>CITY NAME</td>
            </th>
            <tbody>
              {this.state.data.map((data, i)=> <Component2Table key={i} data={data} />)}
            </tbody>
          </table>
        </div>
      );
  }
}


  class Component2Table extends React.Component{
    render(){
      return(
        <table>
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.cityname}</td>
          </tr>
        </table>
      );
    }
  }




