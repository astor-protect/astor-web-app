import React, { Component } from 'react'
import './ClientArea.css'

export class Incidences extends Component {
    state = {
        role: ''
    }

    componentDidMount() {
        const login = localStorage.getItem("login");
        this.setState({ role: login })
    }

    render() {

        const { context: { state: { contains: { default: language } } } } = this.props
        const { context } = this.props
        const { role } = this.state;

        return (
            <section className="incident-section pb-5">
                <div className="container-fluid">
                    <div className="row justify-content-between pb-3">
                       <div className="col-sm-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Problème</th>
                                        <th scope="col">Types</th>
                                        <th scope="col">Lieux</th>
                                        <th scope="col">Détails</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Problème</td>
                                        <td>Types</td>
                                        <td>Lieux</td>
                                        <td>Détails sur l'incidence</td>
                                        <td>12 Janvier 2016</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Problème</td>
                                        <td>Types</td>
                                        <td>Lieux</td>
                                        <td>Détails sur l'incidence</td>
                                        <td>12 Janvier 2016</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Problème</td>
                                        <td>Types</td>
                                        <td>Lieux</td>
                                        <td>Détails sur l'incidence</td>
                                        <td>12 Janvier 2016</td>
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