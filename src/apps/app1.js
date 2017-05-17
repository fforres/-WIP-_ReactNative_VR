import React, { Component } from 'react';
import { WebView } from 'react-native';
import html from './template';

class MyWeb extends Component {
  componentWillMount() {
    console.log(html);
  }
  componentDidMount() {
    const script = 'alert("jasd")';  // eslint-disable-line quotes
    this.webview.injectJavaScript(script);
  }
  render() {
    return (
      <WebView
        ref={webview => { this.webview = webview; }}
        source={{html,}}
        injectJavaScript={()=>'alert("Injected JS ")'}
        style={{marginTop: 20}}
      />
    );
  }
}

export default MyWeb
