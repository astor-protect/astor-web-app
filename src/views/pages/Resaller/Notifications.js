import React, { Component } from 'react'
import './Resaller.css'

export class Notifications extends Component {
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
                            <h5 className="text-center">ENVOYER DES NOTIFICATIONS</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group d-flex">
                                <textarea className="form-control mr-3" placeholder="Message à envoyer"></textarea>
                                <button className='btn btn-danger'>Envoyer</button>
                            </div>
                            <p>Sélectionnez des personnes pour envoyer des notifications</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Prénom</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Tel</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">*</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@tel</td>
                                        <td>@client</td>
                                        <td><input type="checkbox" className="form-check" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@tel</td>
                                        <td>@installateur</td>
                                        <td><input type="checkbox" className="form-check" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@tel</td>
                                        <td>@installateur</td>
                                        <td><input type="checkbox" className="form-check" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>@nom</td>
                                        <td>@prenom</td>
                                        <td>@email</td>
                                        <td>@tel</td>
                                        <td>@client</td>
                                        <td><input type="checkbox" className="form-check" /></td>
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