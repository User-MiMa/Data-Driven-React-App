export default function Entry(props){

    return(
        <article>
            <img 
                src={props.entry.src}
                alt={props.entry.alt}
            />
            <h1>
                {props.entry.alt}
            </h1>
            <p>
                {props.entry.mnemonicTip}
            </p>
            <a href={props.entry.page}>
                Learn more about it here
            </a>
        </article>
    );
}