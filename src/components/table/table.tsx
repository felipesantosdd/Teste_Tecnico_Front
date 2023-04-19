import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridDeleteIcon, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Context } from '@/context/context';




export default function TableComponent() {

    const { columns, rows, handleGetBalances } = useContext(Context)

    useEffect(() => {
        handleGetBalances()
        console.log(rows)
    }, [])



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{
                height: 685,
                width: '800px',
                marginTop: '50px',
                marginX: '10px',
                background: 'rgba(87, 143, 199, 0.8)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(25, 118, 210, 0.3)',
                zIndex: 5,
            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 11,
                            },
                        },
                    }}
                    pageSizeOptions={[11]}
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
}