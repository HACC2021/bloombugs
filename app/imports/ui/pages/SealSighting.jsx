import React from 'react';
import SealTop from '../components/SealTop';
import SealMiddle from '../components/SealMiddle';
import IdentifyingMarks from '../components/IdentifyingMarks';


export default class SealSighting extends React.Component {

  render() {
    return (
      <div>
        <SealTop/>
        <SealMiddle/>
        <IdentifyingMarks/>
      </div>
    );
  }
}
