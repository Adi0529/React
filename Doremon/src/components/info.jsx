import doraemonTribute from "../assets/data.js";
import "./Info.css";

export default function Info() {
  return (
    <>
    <h2 className="text-center text-decoration-underline mt-3 fs-1">Details of Show</h2>
    <div className="container p-5 rounded text-center">
        <h3>Name: {doraemonTribute.name}</h3>
        <p className="fs-4"><strong>Creator:</strong> {doraemonTribute.creator}</p>
        <p className="fs-4"><strong>First Appearance:</strong> {doraemonTribute.firstAppearance}</p>
        <p className="fs-4"><strong>Origin:</strong> {doraemonTribute.origin}</p>
        <p className="fs-4"><strong>Description:<br/></strong> {doraemonTribute.description}</p>
        <p className="fs-4"><strong>Famous Quote:</strong></p>
        <blockquote className="blockquote">{doraemonTribute.famousQuote}</blockquote>
    </div>
    </>
  );
}