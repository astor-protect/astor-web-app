import React, { Component } from 'react'
import './Resaller.css'

export class History extends Component {
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
                            <h5 className="text-center">HISTORIQUE DES PRELEVEMENTS</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Libellé</th>
                                        <th scope="col">Montant</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>@achat</td>
                                        <td>100 000 FCFA</td>
                                        <td>23/12/2019, 15h</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>@achat</td>
                                        <td>20 000 FCFA</td>
                                        <td>23/12/2019, 15h</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@achat</td>
                                        <td>50 000 FCFA</td>
                                        <td>23/12/2019, 15h</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>@achat</td>
                                        <td>150 000 FCFA</td>
                                        <td>23/12/2019, 15h</td>
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