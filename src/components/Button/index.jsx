import "./index.css"

export function Button(props) {
    const { size = "md", variant = "primary", type = "button", Onclick, disabled = false, children } = props
    const className = `my-button my-button--${variant} my-button--${size}`;

    return (
        <button className={className} type={type} onClick={Onclick} disabled={disabled}> {children} </button>
    );
}