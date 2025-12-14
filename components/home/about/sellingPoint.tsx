export default function SellingPoint({
    num, forWho, body, className
 } : {
    num: string;
    forWho: string;
    body: string;
    className: string;
}) {
    const baseStyles = "flex flex-col gap-4";
    const final = `
        ${className} 
        ${baseStyles}
    `;
    return (
        <div className={final}>
            <div>
                <h2 className={"text-4xl lg:text-8xl font-mono"}>{num}</h2>
                <hr className={"h-[1px] lg:h-[2px]"}/>
                <h3 className={"text-2xl lg:text-4xl font-display"}>{forWho}</h3>
            </div>
            <p>{body}</p>
        </div>
    )
}