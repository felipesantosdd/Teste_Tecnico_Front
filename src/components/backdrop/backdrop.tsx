import { Context } from '@/context/context';
import React, { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import loadding from "../../styles/loading.module.scss"

function Modal() {

    const { showModal } = useContext(Context)
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 999,
                display: showModal ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className={loadding.loader}>
                <span></span>
            </div>
        </div>
    );
}

export default Modal;
