import React, { Component } from 'react'
import './Resaller.css'

export class CatalogueProduit extends Component {
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
                            <h5 className="text-center">MES PRODUITS</h5>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Produit 1</h5>
                                        <p class="card-text">Contrôle à distance du matériel et maintenance</p>
                                        <p class="card-text">Télésurveillance 24h/24 et 7j/7 par les centres de surveillance</p>
                                        <p class="card-text">Touche alerte agression</p>
                                        <p class="card-text">Appel de contrôle en moins de 30 secondes et information immédiate de l'abonné</p>
                                        <p class="card-text">Gardé le Contrôle à distance ! Pilotage par smartphone, tablette ou ordinateur</p>
                                        <p class="card-text">100% respect de la vie privée</p>
                                        <p class="card-text">L’espace abonné avec gestion des droits d’accès</p>
                                        <p class="card-text">Mycloud 30 GB de stockage</p>
                                        <button className="btn btn-danger">Revendre</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Produit 2</h5>
                                        <p class="card-text">Contrôle à distance du matériel et maintenance</p>
                                        <p class="card-text">Télésurveillance 24h/24 et 7j/7 par les centres de surveillance</p>
                                        <p class="card-text">Touche alerte agression</p>
                                        <p class="card-text">Appel de contrôle en moins de 30 secondes et information immédiate de l'abonné</p>
                                        <p class="card-text">Gardé le Contrôle à distance ! Pilotage par smartphone, tablette ou ordinateur</p>
                                        <p class="card-text">100% respect de la vie privée</p>
                                        <p class="card-text">L’espace abonné avec gestion des droits d’accès</p>
                                        <p class="card-text">Mycloud 30 GB de stockage</p>
                                        <button className="btn btn-danger">Revendre</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Produit 3</h5>
                                        <p class="card-text">Contrôle à distance du matériel et maintenance</p>
                                        <p class="card-text">Télésurveillance 24h/24 et 7j/7 par les centres de surveillance</p>
                                        <p class="card-text">Touche alerte agression</p>
                                        <p class="card-text">Appel de contrôle en moins de 30 secondes et information immédiate de l'abonné</p>
                                        <p class="card-text">Gardé le Contrôle à distance ! Pilotage par smartphone, tablette ou ordinateur</p>
                                        <p class="card-text">100% respect de la vie privée</p>
                                        <p class="card-text">L’espace abonné avec gestion des droits d’accès</p>
                                        <p class="card-text">Mycloud 30 GB de stockage</p>
                                        <button className="btn btn-danger">Revendre</button>
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