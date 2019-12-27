import React, { Component } from 'react'
import './Resaller.css'

export class ClientList extends Component {
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
                            <h5>LISTE DES CLIENTS</h5>
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
                                        <th scope="col">Prénom</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Adresse</th>
                                        <th scope="col">Téléphone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@adress</td>
                                        <td>@tel</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@adress</td>
                                        <td>@tel</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@adress</td>
                                        <td>@tel</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@adress</td>
                                        <td>@tel</td>
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