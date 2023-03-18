import Swal from 'sweetalert2'


export function SuccessAlert(message: string) {

    return (
        Swal.fire({
            icon: 'success',
            title: 'Boaa...',
            text: message,
            background: '#8AB7C5'
        })
    )
}