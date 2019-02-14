import React, {Component} from 'react';
import './main-page.scss';

export class MainPage extends Component {
  constructor() {
    super();

    this.state = {};

    this.ref_textarea_source = React.createRef();
    this.ref_textarea_result = React.createRef();
  }

  transformTextToArray(text) {
    let result = this.ref_textarea_source.current.value.split('\n');
    result.forEach(item => {
      item.trim();
    });
    result = result.filter(item => {
      return !!item;
    });
    return result
  }

  handleDuplicateClick = () => {
    const array_fragment = this.transformTextToArray(this.ref_textarea_source.current.value.split('\n'));
    const array_duplicatedFragment = Array.from(new Set(array_fragment));
    this.ref_textarea_result.current.value = array_duplicatedFragment.join('\n');
  };

  render() {
    return (<div className='main-page'>
      <div>
        <div>
          <button onClick={() => {this.handleDuplicateClick()}}>去重</button>
        </div>
        <div>
          <label><input type='checkbox'/>高级（本功能尚未开发）</label>
        </div>
      </div>
      <div className='content'>
        <div className='content__source'>
          <textarea ref={this.ref_textarea_source}></textarea>
        </div>
        <div className='content__result'>
          <textarea ref={this.ref_textarea_result}></textarea>
        </div>
      </div>
    </div>);
  }
}





