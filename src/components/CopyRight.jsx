import React from 'react';
import './CopyRight.css';

export default function copyRight() {
    return (
        <div className="copyright">
            <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    )
}
