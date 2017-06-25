/*
 * 博客首页
 */

require('./scss/index.scss')
import React,{ Component }  from 'react'
import { render } from 'react-dom'
import BlogList from './BlogList.js'
import Widget from './widget.js'

class Index extends Component {
	render() {
		return(
			<div className="container">
				{/*左侧列表展示*/}
				<div className="blog-list">
					<BlogList />
				</div>
				{/*右侧个人介绍*/}
				<div className="widgets">
					<Widget />
				</div>
			</div>
		)
	}
}

render(<Index />, document.getElementById('mod-index'))