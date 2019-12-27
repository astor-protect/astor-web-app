import React, { Component } from 'react'
import './Clientbb.css'

export class CLientRecognition extends Component {
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
                            <h4>Fréquentation des Clients</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Lieux</th>
                                        <th scope="col">Numéro de Téléphone</th>
                                        <th scope="col">Fréquentation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@Lieux</td>
                                        <td>654565123</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@Lieux</td>
                                        <td>654565123</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@Lieux</td>
                                        <td>654565123</td>
                                        <td>5</td>
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