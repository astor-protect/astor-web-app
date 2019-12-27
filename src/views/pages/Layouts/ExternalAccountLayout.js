import React, { Component, Fragment } from 'react'
import { Footer } from '../../components'
import { Resaller } from '../../pages'

export class ExternalAccountLayout extends Component {

    render() {
        const { context } = this.props

        return (
            <Fragment>
                <Resaller context={context} />
                <Footer context={context} />
            </Fragment>
        )
    }
}