import "./index.css"

// size = "sm" | "md" | "lg"

export function Button(props) {
    const { size = "md", variant = "primary", children } = props
    const className = `my-button my-button--${variant}`;
    const classSize = `my-butoon my-button--${size}`;

    return <button className={className} classSize={classSize}>{children}</button>;
}