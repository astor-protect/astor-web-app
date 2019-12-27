import React, { Component, Fragment } from 'react'

class GestionTickets extends Component {

    render() {

        return (
            <section>
                <div className="container-fluid px-4" >
                    <div className="row">
                        <div className="col">
                            <h4 className="ml-2">Gestion des Tickets</h4>
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
                </div>
            </section>
        )
    }
}

export { GestionTickets };