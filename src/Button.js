

function Button ({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    if (primary && secondary) {
        throw new Error('Only one of primary and secondary should be provided')
    }

    return <button>{ children }</button>
}

export default Button;