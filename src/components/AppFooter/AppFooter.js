import React, {Component} from 'react'

import './AppFooter.css'

export default class AppFooter extends Component {
    render() {
        return (
            <div className="app-footer">

                <div className="pt-5">

                </div>

                <footer className="pt-5 pb-5">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <span>Частное фермерское хозяйство</span>
                                <span className="pt-3">«Малочны маёнтак», © 2013-2019</span>
                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        )
    }
}