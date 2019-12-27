import React, { Component } from 'react'
import './ClientArea.css'
import {Confirmation} from '../../components';

export class SavedVideos extends Component {

    render() {
        const {context} = this.props;
        return (
            <div className="row pb-5">
                <VideoItem context={context} />
                <VideoItem context={context} />
                <VideoItem context={context} />
                <VideoItem context={context} />
                <VideoItem context={context} />
                <VideoItem context={context} />
            </div>
        )
    }
}

export class VideoItem extends Component {
    state = {
        editing: false,
        showConfirmModal: false,
        languageEn: '',
        languageFr: 'font-weight-bold',
        role: ''
    }

    startRename = () => {
        this.setState({editing: true})
    }
    saveRename = () => {
        this.setState({editing: false})
    }

    showConfirmModal = () => {
        this.setState({ showConfirmModal: true })
    }
    hideConfirmModal = () => {
        this.setState({ showConfirmModal: false })
    }

    highlight = (language) => {
        language === 'fr' ? this.setState({
            languageEn: '',
            languageFr: 'font-weight-bold'
        }) : this.setState({
            languageEn: 'font-weight-bold',
            languageFr: ''
        })
    }

    componentDidMount() {
        const login = localStorage.getItem("login");
        this.setState({ role: login })
    }

    render() {
        const { context: { state: { contains: { default: language } } } } = this.props
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                {this.state.showConfirmModal && <Confirmation hideConfirmationModal={this.hideConfirmModal} />}
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <video width="100%" height="100%" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                            </video>
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                {this.state.editing ?
                                    <input className="form-control-sm" type="text" placeholder={language.clientbc.video.newname} /> :
                                    <h6 onDoubleClick={this.startRename} class="card-title">{language.clientbc.video.name}</h6>
                                }
                                <p class="card-text"><small class="text-muted">{language.clientbc.video.date}</small></p>
                                <div className="mt-2 d-flex">
                                    {this.state.editing ? 
                                        <button onClick={this.saveRename} className="btn btn-dark btn-sm mr-2">{language.clientbc.video.save}</button> :
                                        <button onClick={this.startRename} className="btn btn-dark btn-sm mr-2">{language.clientbc.video.rename}</button>
                                    }
                                    <button onClick={this.showConfirmModal} className="btn btn-danger btn-sm">{language.clientbc.video.delete}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}