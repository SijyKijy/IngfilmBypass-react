import React from 'react';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', showVideo: false };

    this.errorMsgRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  checkUrl() {
    const reg = /(\d*)-(.*)\.html/;
    var res = reg.exec(this.state.value);
    if (res != null) {
      this.setState({ showVideo: true });
      this.setState({ value: res[1] });
    } else {
      alert('Invalid link');
    }
  }

  render() {
    if (this.state.showVideo) {
      return (
        <iframe
          title="BypassVideo"
          className="responsive-iframe"
          src={`http://ingfilm.ru/vdb/` + this.state.value + `.html`}
          frameborder="0"
          allowfullscreen=""
        />
      );
    } else {
      return (
        <div>
          <input type="text" ref value={this.state.value} onChange={this.handleChange} />
          <button
            onClick={() => {
              this.checkUrl();
            }}>
            Bypass
          </button>
        </div>
      );
    }
  }
}

export default VideoForm;
