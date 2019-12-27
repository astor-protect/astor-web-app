import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class AccountItem extends Component {

    render() {

        return (
            <tr key={this.props.iduser}>
                <td>{this.props.username}</td>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td>{this.props.email}</td>
                <td>{this.props.tel}</td>
                <td style={{ width: "200px", textAlign: "center" }}>
                        <Link to={`/dashboard/usersinfos/${this.props.id}`} style={{ backgroundColor: "rgb(226, 7, 19)" }} className="btn btn-danger btn-sm action">Consulter</Link>
                </td>
            </tr>
        )
    }
}

export default AccountItem;
