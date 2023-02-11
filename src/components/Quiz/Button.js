import "./style.css";

export default function Button(props) {
    return <>
        <div className={`question-btn`} data-iscorrect={props.isCorrect} onClick={props.onClick}>
            <p>{props.children}</p>
        </div>
    </>;
}
