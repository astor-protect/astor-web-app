import React, { Component, Fragment } from 'react'

class Approvisionnement extends Component {

    render() {

        return (
            <section>
                <div className="container-fluid px-4" >
                    <div className="row">
                        <div className="col">
                            <h4 className="ml-2">Gestion de l'Approvisionnement</h4>
                        </div>
                    </div>
                    <div className="row bg-white pt-3 pb-4 mt-2 mx-2 px-4" style={{ border: "solid 1px #f2f2f2 !important" }}>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <h5 className="py-3">Détails</h5>
                            <form >
                                <input className="form-control mb-2" type="text" name="abonnement" placeholder="Reference" />
                                <input className="form-control mb-2" type="text" name="password1" placeholder="Désignation" />
                                <input className="form-control mb-2" type="text" name="cost" placeholder="Prix" />
                                <input className="form-control mb-2" type="text" name="cost" placeholder="Quantité" />
                                <button className="btn btn-danger mt-2" type="submit" >Ajouter</button>
                            </form>
                        </div>
                    </div>

                    {/* Historique de facturation */}
                    <div className="row mt-4 px-2 py-3">
                        <div className="col-sm-12"><h5 className="py-3">Informations</h5></div>
                        <div className="col-sm-12">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Reference</th>
                                        <th scope="col">Désignation</th>
                                        <th scope="col">Prix</th>
                                        <th scope="col">Quantité</th>
                                    </tr>
                                </thead>
                                <tbody style={{ border: "solid 1px #e1e1e1", backgroundColor: "white" }}>
                                    <tr>
                                        <td>100</td>
                                        <td>Reference</td>
                                        <td>Désignation</td>
                                        <td>34500 FCFA</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <td>100</td>
                                        <td>Reference</td>
                                        <td>Désignation</td>
                                        <td>34500 FCFA</td>
                                        <td>200</td>
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

export { Approvisionnement };