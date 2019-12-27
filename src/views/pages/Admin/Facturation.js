import React, { Component, Fragment } from 'react'

class Facturation extends Component {

    render() {
        
        return (
            <section>
                <div className="container-fluid px-4" >
                    <div className="row">
                        <div className="col">
                            <h5 className="ml-2">GESTION DE LA FACTURATION</h5>
                        </div>
                    </div>
                    <div className="row bg-white pt-3 pb-4 mt-2 mx-2 px-4" style={{border: "solid 1px #f2f2f2 !important"}}>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h5 className="py-3">Générer une Facture</h5>
                            <form>
                                <select className="custom-select mb-2 " style={{ fontSize: "0.9rem" }} >
                                    <option value="USER" selected>Sélectionner un utilisateur</option>
                                    <option value="USER" >User name</option>
                                    <option value="USER" >User name</option>
                                    <option value="USER" >User name</option>
                                    <option value="USER" >User name</option>
                                    <option value="USER" >User name</option>
                                </select>    
                                <input className="form-control mb-2" placeholder="" type="text"  />
                                <input className="form-control mb-2" placeholder="" type="text"  />
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h5 className="py-3">Informations</h5>
                            <form >
                                <input className="form-control mb-2" type="text" name="abonnement" placeholder="Abonnement" />
                                <input className="form-control mb-2" type="text" name="password1" placeholder="Durée" />
                                <input className="form-control mb-2" type="text"  name="cost" placeholder="Montant" />
                                <button className="btn btn-danger mt-2" type="submit" >Générer la Facture</button>
                            </form>
                        </div>
                    </div>
                    {/* Historique de facturation */}
                    <div className="row mt-4 px-2 py-3">
                        <div className="col">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Abonnement</th>
                                        <th scope="col">Montant</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Dat</th>
                                    </tr>
                                </thead>
                                <tbody style={{ border: "solid 1px #e1e1e1", backgroundColor: "white" }}>
                                    <tr>
                                        <td>100</td>
                                        <td>Mon Abonnement</td>
                                        <td>34500 FCFA</td>
                                        <td>Abel Abel</td>
                                        <td>12 Fevrier 2019</td>
                                    </tr>
                                    <tr>
                                        <td>105</td>
                                        <td>Mon Abonnement</td>
                                        <td>34500 FCFA</td>
                                        <td>Abel Abel</td>
                                        <td>12 Fevrier 2019</td>
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

export {Facturation};