import "../styles/DataCart.css"


interface DataCartProps {
    name: string | null | undefined;
    value: string | number | undefined;
    unit : string | undefined,
}


const DataCart : React.FC<DataCartProps> = ({ name, value, unit }) => {
    return(
        <section className="datacart">
            <p className="name">{name ? `${name}` : "N/A"}</p>
            <p className="value">{value == "undefined" ? "N/A" : `${value} ${unit ? unit : ""}`}</p>
        </section>
    )
}

export default DataCart