import React, { Component } from 'react'
import {WaitinList, PersonnelList, HotZones, CLientRecognition, Plaques} from '../../pages'
import {Facturation} from '../../pages';
import {NavLink, Route, Link, Switch} from 'react-router-dom';
import './Clientbb.css'

export class Erp extends Component {
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
                                <NavLink to="/my-space/erp/personnel"><li class="list-group-item">Personnel</li></NavLink>
                                <NavLink to="/my-space/erp/waiting-list"><li class="list-group-item">File d'attente</li></NavLink>
                                <NavLink to="/my-space/erp/hotzones"><li class="list-group-item">Hot zones</li></NavLink>
                                <NavLink to="/my-space/erp/clientrecognition"><li class="list-group-item">Fréquentation Cliente</li></NavLink>
                                <NavLink to="/my-space/erp/plaques"><li class="list-group-item">Plaques</li></NavLink>
                                <NavLink to="/my-space/erp/facturation"><li class="list-group-item">Facturation</li></NavLink>
                            </ul>
                        </div>
                        <div className="col-sm-10">
                            <Switch>
                                <Route path="/my-space/erp/personnel" exact component={() => <PersonnelList context={[]}  />} />
                                <Route path="/my-space/erp/waiting-list" component={() => <WaitinList context={[]}  />} />
                                <Route path="/my-space/erp/hotzones" exact component={() => <HotZones context={[]}  />} />
                                <Route path="/my-space/erp/clientrecognition" exact component={() => <CLientRecognition context={[]}  />} />
                                <Route path="/my-space/erp/facturation" exact component={() => <Facturation context={[]}  />} />
                                <Route path="/my-space/erp/plaques" exact component={() => <Plaques context={[]}  />} />
                                <Route path="/my-space/erp" exact component={() => <PersonnelList context={[]}  />} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}