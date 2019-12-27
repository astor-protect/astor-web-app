import React, { Component } from 'react'
import './ClientArea.css'

export class Account extends Component {
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
            <section className="account-section pb-5">
                <div className="container-fluid">
                    <div className="row justify-content-between my-3">
                        <div className="col d-flex justify-content-end">
                            <h5 className="mr-3 mb-0 mt-2">Visibilité sur la centrale:</h5>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="row justify-content-center pb-4">
                        <div classNamea="col-sm-12">
                            <h5 className="text-center">Migrer vers d'autres formules d'Abonnement</h5>
                        </div>
                    </div>
                    <div className="row justify-content-between mb-5">
                        <div className="col-sm-12 col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <b className="text-dark">Abonnement 1</b>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <button className="btn btn-danger">Migrer vers cet Abonnement</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <b className="text-dark">Abonnement 2</b>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <button className="btn btn-danger">Migrer vers cet Abonnement</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <b className="text-dark">Abonnement 3</b>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <button className="btn btn-danger">Migrer vers cet Abonnement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}