import React, {Component} from 'react';

export default class Admin extends Component {
    render(){
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Welcome admin</div>

                        <div className="card-body">
                            I'm an admin component!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}