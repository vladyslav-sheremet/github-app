import './ErrorMessage.scss'

interface ErrorMessageProps {
    error: string
}

export const ErrorMessage = ({error}: ErrorMessageProps) => <p className='error'>{error}</p>