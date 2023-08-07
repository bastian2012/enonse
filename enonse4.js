import React from 'react';

export default class lis extends React.Component {
  render() {
    let tab = ['qwery', 'wert', 'Bastien', 'Ritchy', 22];
    // let ane = "2023";
    // let total = 10;
    return (<>
      <h2>{tab.map(params => {
        return <p>{params}</p>
      })}</h2>
      {/* <h1>{ane + total}</h1> */}
    </>
    )
  }
      
}
