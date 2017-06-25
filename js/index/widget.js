import './scss/widget.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Row, Col } from 'antd'
import getGithubData from './ajax'

export default 
class Widget extends Component {
    state = {
        githubData: {}
    }
    componentDidMount() {
        getGithubData().then((githubData)=>{
            this.setState({
                githubData
            })
        })
    }
    renderGithubDate() {
        let { githubData } = this.state
        if (githubData) {
            let { login, avatar_url, following,public_repos } = githubData
            return [
                <Row type='flex' justify='center' align='top'>
                    <img src={avatar_url} width='80' height='80' className='avatar' alt=""/>
                </Row>,
                <Row type='flex' justify='center' align='top'>
                    <Row type='flex' justify='center' align='top'>
                        <h2>{login}</h2>
                    </Row>
                </Row>,
                <Row type='flex' justify='center' align='top'>
                    <Col span={12}>
                        <Row>{public_repos}</Row>
                        <h3>项目数</h3>
                    </Col>
                    <Col span={12}>
                        <Row>{following}</Row>
                        <h3>关注数</h3>
                    </Col>
                </Row>
            ]
        }else{
            return
        }
    }
    render() {
        return (
            <div className='w-container'>
                <Row type='flex' justify='center' align='top'>
                    <h1>Github</h1>
                </Row>
                { this.renderGithubDate() }
            </div>
        )
    }
}