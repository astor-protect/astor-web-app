import React, { Component } from 'react'
import './Clientbb.css'

export class PersonnelList extends Component {
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
                        <div className="col-sm-12 mb-3">
                            <h4>Personnel</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Lieux</th>
                                        <th scope="col">Metéo</th>
                                        <th scope="col">Date/Heure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@Lieux</td>
                                        <td>@Metéo</td>
                                        <td>12 Janvier 2016, 16h</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@Lieux</td>
                                        <td>@Metéo</td>
                                        <td>12 Janvier 2016, 16h</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>@username</td>
                                        <td>@nom</td>
                                        <td>@Lieux</td>
                                        <td>@Metéo</td>
                                        <td>12 Janvier 2016, 16h</td>
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