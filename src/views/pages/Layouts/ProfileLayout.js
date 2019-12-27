import React, { Component, Fragment } from 'react'
import { Header } from '../../components'
import {Footer} from '../../components'
import {Profile} from '../../components'

export class ProfileLayout extends Component {

    render() {
        const { context } = this.props
        return (
            <Fragment>
                <Header context={context} />
                <Profile context={context} />
                <Footer context={context} />
            </Fragment>
        )
    }
}