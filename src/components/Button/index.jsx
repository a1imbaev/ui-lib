import "./index.css"

// size = "sm" | "md" | "lg"

export function Button(props) {
    const { size = "md", variant = "primary", children } = props
    const className = `my-button my-button--${variant}`;

    return <button className={className}>{children}</button>;
}