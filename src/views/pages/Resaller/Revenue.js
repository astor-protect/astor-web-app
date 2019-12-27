import React, { Component } from 'react'
import './Resaller.css'

export class Revenue extends Component {
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
            <section className="options-section pb-5">
                <div className="container-fluid pb-3">
                    <div className="row justify-content-between">
                        <div className="col-sm-12 mb-3">
                            <h5>MES REVENUS</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Revenu Total</h5>
                                    <p className="card-text">250 000 FCFA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Utilisateurs</h5>
                                    <p className="card-text">5</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Produits revendus</h5>
                                    <p className="card-text">5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}