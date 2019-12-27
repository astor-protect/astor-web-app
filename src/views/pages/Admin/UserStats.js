import React, { Component } from 'react'

class UsersStats extends Component {

    render() {

        return (
            <section>
                <div className="container-fluid px-4" >
                    <div className="row">
                        <div className="col">
                            <h4 className="ml-2">Statistiques Abonnés</h4>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-lg-4 col-sm-6 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Nombre d'abonnés</h5>
                                    <p className="card-text">57</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Montant Versé</h5>
                                    <p className="card-text">250 000 FCFA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Abonnement invalides</h5>
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

export { UsersStats };