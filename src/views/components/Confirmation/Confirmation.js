import React, { Component } from 'react';
import './Confirmation.css';

export class Confirmation extends Component {

    render() {

        return (
            <div className="confirmation-modal">
                <div  className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-3 p-5 content">
                            <h6 className="text-center">Etes vous sure de vouloir supprimer ?</h6>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-danger mr-3" onClick={(e)=>{this.props.confirmation(this.props.id);this.props.hideConfirmationModal()}}>Oui</button>
                                <button onClick={() => this.props.hideConfirmationModal()} className="btn btn-dark">Non</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
