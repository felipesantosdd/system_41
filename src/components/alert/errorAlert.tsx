import Swal from 'sweetalert2'


export function ErrorAlert(message: string) {

    return (
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
        })
    )
}