import React, { Component } from 'react'
import './Resaller.css'

export class Agenda extends Component {
    state = {
        role: ''
    }

    componentDidMount() {
        const login = localStorage.getItem("login");
        this.setState({ role: login })
    }

    render() {

        // const { context: { state: { contains: { default: language } } } } = this.props
        // const { context } = this.props
        // const { role } = this.state;

        return (
            <section className="waitinlist-section pb-5">
                <div className="container-fluid pb-3">
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <h5 className="text-center">AGENDA DES INSTALLATEURS</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Prénom</th>
                                        <th scope="col">Tel</th>
                                        <th scope="col">Agenda</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@tel</td>
                                        <td><strong>@agenda content</strong></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@tel</td>
                                        <td><strong>@agenda content</strong></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@tel</td>
                                        <td><strong>@agenda content</strong></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@tel</td>
                                        <td><strong>@agenda content</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}