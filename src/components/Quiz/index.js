
export default function Quiz(props) {
    return <>
        <div>
            <h2>{props.vapros}</h2>
            {props.children}
        </div>
    </>;
}
