import React, { Component } from 'react'
import { ClientList, Revenue } from '../../pages'
import { Facturation } from '../../pages';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Resaller.css'

export class ResallerErp extends Component {
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
                        <div className="col-sm-2">
                            <ul class="list-group" id="list-group">
                                <NavLink to="/resaller/erp/personnel"><li class="list-group-item">Clients</li></NavLink>
                                <NavLink to="/resaller/erp/facturation"><li class="list-group-item">Facturation</li></NavLink>
                                <NavLink to="/resaller/erp/revenue"><li class="list-group-item">Rapport des Revenus</li></NavLink>
                            </ul>
                        </div>
                        <div className="col-sm-10">
                            <Switch>
                                <Route path="/resaller/erp" exact component={() => <ClientList context={[]} />} />
                                <Route path="/resaller/erp/personnel" exact component={() => <ClientList context={[]} />} />
                                <Route path="/resaller/erp/facturation" component={() => <Facturation context={[]} />} />
                                <Route path="/resaller/erp/revenue" exact component={() => <Revenue context={[]} />} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}