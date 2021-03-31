import React, { Component } from 'react'

import Header from 'parts/Header'
import DiscussForm from 'parts/DiscussForm'
import Footer from 'parts/Footer'

export default class DiscussProjectPage extends Component {

    state = {
        data: {
            name: "",
            company: "",
            email: "",
            phone: "",
            projectIdea: ""
        }
    }

    onChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    resetForm = () => {
        this.setState({
            data: {
                name: "",
                company: "",
                email: "",
                phone: "",
                projectIdea: ""
            }
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {

        const { data } = this.state

        return (
            <>
                <Header {...this.props}></Header>
                <DiscussForm data={data} onChange={this.onChange} resetForm={this.resetForm}></DiscussForm>
                <Footer></Footer>
            </>
        )
    }
}
