import Swal from 'sweetalert2'

export function SuccessAlert(text: string) {
    Swal.fire({
        title: 'Successo!',
        text: `${text}`,
        icon: 'success',
        confirmButtonText: 'Ok',
        color: 'white',
        background: '#252525'
    })
}

export function ErrorAlert(text: string) {
    Swal.fire({
        title: 'Erro!',
        text: `${text}`,
        icon: 'error',
        confirmButtonText: 'Ok',
        color: 'white',
        background: '#252525'
    })
}

export function WarningAlert(text: string) {
    Swal.fire({
        title: 'Aviso!',
        text: `${text}`,
        icon: 'warning',
        confirmButtonText: 'OK',
        color: 'white',
        background: '#252525'
    })
}
