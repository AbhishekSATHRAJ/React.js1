import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Accordions(props) {
  return (
  
    <Accordion >
      <Accordion.Item >
        <Accordion.Header>{props.data.title}</Accordion.Header>
        <Accordion.Body>
        <img src={props.data.image} alt={props.data.title} style={{display:"flex",width:"100px",height:"150px"}} />
        {props.data.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

export default Accordions;