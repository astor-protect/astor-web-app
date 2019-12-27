import React, { Component, Fragment } from 'react'
import {Footer} from '../../components'
import {ClientArea} from '../../pages'

export class ClientAreaLayout extends Component {

    render() {
        const { context } = this.props

        return (
            <Fragment>
                <ClientArea context={context} />
                <Footer context={context} />
            </Fragment>
        )
    }
}