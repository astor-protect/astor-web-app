import React, { Component, Fragment } from 'react'

class Accountance extends Component {

    render() {

        return (
            <section>
                <div className="container-fluid px-4" >
                    <div className="row">
                        <div className="col">
                            <h4 className="ml-2">Gestion de la Comptabilité</h4>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 col-lg-4 col-sm-6 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Montant</h5>
                                    <p className="card-text">250 000 FCFA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Dettes</h5>
                                    <p className="card-text">25 000 FCFA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 mb-2">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Nombre d'abonnés</h5>
                                    <p className="card-text">57</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 px-2 py-3">
                        <div className="col-sm-12"><h5 className="py-3">Historique des transactions</h5></div>
                        <div className="col-sm-12">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Désignation</th>
                                        <th scope="col">Montant</th>
                                        <th scope="col">Quantité</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody style={{ border: "solid 1px #e1e1e1", backgroundColor: "white" }}>
                                    <tr>
                                        <td>100</td>
                                        <td>Abonnement</td>
                                        <td>Désignation</td>
                                        <td>34500 FCFA</td>
                                        <td>0</td>
                                        <td>12 Janvier 2020</td>
                                    </tr>
                                    <tr>
                                        <td>100</td>
                                        <td>Achat outils</td>
                                        <td>Désignation</td>
                                        <td>50500 FCFA</td>
                                        <td>10</td>
                                        <td>12 Janvier 2020</td>
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

export { Accountance };