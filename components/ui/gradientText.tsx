export default function GradientText({children, className} : {
    children: React.ReactNode
    className?: string | null
}) {

    const gradientStyle: React.CSSProperties = {
        // todo: can probably put colours in props as well
        backgroundImage: "linear-gradient(90deg, var(--color-accent), var(--color-primary))",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundClip: "text",
        display: "inline-block",
        letterSpacing: "-1px"
    };

    const sizing = ""

    return (
        <p className={`w-fit ${className || ""}`} style={gradientStyle}>{children}</p>
    )
}