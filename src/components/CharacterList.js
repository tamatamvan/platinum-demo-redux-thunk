import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadCharas } from '../store/characters/characters.actions';

class CharacterList extends Component {

  componentDidMount () {
    this.props.loadCharas()
  }

  render() {
    if (this.props.charas.loading) {
      return <h1>Lagi Loading . . . </h1>;
    } else if (this.props.charas.error) {
      return <h1>Oops, ada error!</h1>;
    } else {
      return (
        <div>
          <h1>Nanti chara list di sini</h1>
          <ul>
            {
              this.props.charas.data.map(chara => (
                <li key={chara.url}>{ chara.name }</li>
              ))
            }
          </ul>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  charas: state.charas,
});

//https://redux.js.org/api-reference/bindactioncreators
const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadCharas,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);