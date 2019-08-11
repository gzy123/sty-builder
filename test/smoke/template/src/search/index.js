'use strict'
import React from 'react'
import ReactDom from 'react-dom'
import './css/common.less'
import '../../common'
import logo from './images/alipay.png'
class Search extends React.Component {

    constructor(){
        super(...arguments)
        this.state = {
            Text: null
        }
    }

    loadCompent() {
        import('./text.js').then((res) => {
            this.setState({
                Text: res.default
            })
        })
    }
    render() {
      const {Text} = this.state  
      return <div class="text" onClick={ this.loadCompent.bind(this)}>
          <p>{Text ? <Text /> : ''}</p>
          <img src={logo}/>搜索内容
        </div>
    }
}

ReactDom.render(
    <Search />,
    document.getElementById('root')
)