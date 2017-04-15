import React from 'react';

export default class Component1 extends React.Component{

  constructor(){
    super()
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Marco Seven"
        },
        {
          "id": 2,
          "name": "Tom Cruise"
        },
        {
          "id": 3,
          "name": "Chris Evans"
        }
      ]
    }
  }

  render(){
    return(
        <div>
          <table>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>NAME</strong></td>
            </tr>
            <tbody>
              {this.state.data.map((data, i) => <Component1Table key={i} data={data}/>)}
            </tbody>
          </table>
        </div>
      );
  }
}

class Component1Table extends React.Component{
  render(){
    return(
        <table>
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
          </tr>
        </table>
      );
  }
}










