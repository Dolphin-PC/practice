import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayNumber from '../components/DisplayNumber';

function mapStateToProps(state) {
  return {
    number: state.number,
  };
}

function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayNumber);

// import store from '../store';

// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//   render() {
//     return <DisplayNumber number={this.state.number} />;
//   }
// }
