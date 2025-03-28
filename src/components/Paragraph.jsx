export default function Paragraph (props) {
    return (
      <p className={props.color}>
        {props.children}
      </p>
    );
}