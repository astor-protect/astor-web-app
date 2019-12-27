import React, { Component } from 'react'
import './ClientArea.css'

export class Options extends Component {
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
            <section className="options-section pb-5">
                <div className="container-fluid pb-3">
                    <div className="row justify-content-between">
                        <div className="col mb-3">
                            <h5 className="text-center">Ajoutez des options supplémentaires à votre Abonnement</h5>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Caméras extérieures 10933.-CFA/Mois</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Caméras intérieures 5467.-CFA/Mois</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Détecteurs de fumée 2186.-CFA/Mois</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Répéteur de wifi 2733.-CFA/Mois</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Panneau Solaire 2733/Mois</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Espace de stockage</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Levé du tout par un agent de sécurité</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Notification sur trois numéro WhatsApp</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Garder lieux pendants 3 heurs</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Intervention par les forces de l'ordre</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Notification sur quatre adresse email</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Notification sur deux numéros de 20 SMS par mois</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#option" class="btn btn-danger">Activer cette Option</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}