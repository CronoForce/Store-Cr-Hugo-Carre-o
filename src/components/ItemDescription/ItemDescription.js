import React, { Component } from 'react';
import './ItemDescription.css'
import Portal from '../Portal';

class ItemDescription extends Component {
    render() {

        const { children, toggle, active } = this.props;

        return (
            <Portal>
                {active && (
                    <div className="portal">
                        <div className="portal-content">
                            <button className="btn-close" onClick={toggle}><i class="fas fa-times"></i></button>
                            <div>{children}</div>
                        </div>
                        <div className="portal-background" onClick={toggle}></div>
                    </div>
                )}
            </Portal>
        )
    }
}

export default ItemDescription;
