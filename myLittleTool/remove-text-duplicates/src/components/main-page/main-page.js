import {uniqBy} from 'lodash';
import React, {Component} from 'react';
import './main-page.scss';

export class MainPage extends Component {
  constructor() {
    super();

    this.state = {};

    this.ref_useAdvance = React.createRef();
    this.ref_splitRegexp = React.createRef();
    this.ref_accordingToRegexp = React.createRef();
    this.ref_accordingToIndex = React.createRef();

    this.ref_textarea_source = React.createRef();
    this.ref_textarea_result = React.createRef();
  }

  componentDidMount() {
    // 初始化非受控表单
    this.ref_splitRegexp.current.value = '\\n';
    this.ref_accordingToRegexp.current.value = '.*';
    this.ref_accordingToIndex.current.value = 0;
  }

  /**
   * 将文字去重
   * @param text
   * @param split
   * @param accordingTo
   * @param accordingToIndex
   * @returns {*}
   */
  duplicate({text, split = new RegExp('\\n'), accordingTo = new RegExp('.*'), accordingToIndex = 0}) {
    const array_originalText = text.split(split);

    const array_dealtByAccordingTo = [];
    array_originalText.forEach((item) => {
      if (!item) {
        return;
      }
      const matched = item.match(accordingTo);
      if (!matched || !matched[accordingToIndex]) {
        return;
      }
      array_dealtByAccordingTo.push({origin: item, accordingTo: matched[accordingToIndex]});
    });
    console.log(accordingTo,array_originalText,array_dealtByAccordingTo);

    const array_uniq = uniqBy(array_dealtByAccordingTo, 'accordingTo').map(item => item.origin);

    return array_uniq.join('\n');
  }


  handleDuplicateClick = () => {
    if (!this.ref_useAdvance.current.checked) {
      this.ref_textarea_result.current.value = this.duplicate({text: this.ref_textarea_source.current.value});
    } else {
      const split = new RegExp(this.ref_splitRegexp.current.value);
      const accordingTo = new RegExp(this.ref_accordingToRegexp.current.value);
      const accordingToIndex = this.ref_accordingToIndex.current.value;
      this.ref_textarea_result.current.value = this.duplicate({
        text: this.ref_textarea_source.current.value,
        split, accordingTo, accordingToIndex,
      });
    }
  };

  render() {
    return (<div className='main-page'>
        <div>
          <div>
            <button onClick={() => {
              this.handleDuplicateClick()
            }}>去重
            </button>
          </div>
          <div className="advance-options">
            <div>
              <label><input type='checkbox' ref={this.ref_useAdvance}/>高级</label>
            </div>
            <div>
              <label>分隔符(RegExp)：<input type='text' ref={this.ref_splitRegexp}/></label>
            </div>
            <div>
              <label>根据(RegExp)：<input type='text' ref={this.ref_accordingToRegexp}/></label>
              <label>RegExp Index：<input type='number' ref={this.ref_accordingToIndex}/></label>
            </div>
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
      </div>
    );
  }
}





