// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse
  } from 'reactstrap';


const Character = props => {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(0);

    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed');
  
    const onEntering = () => setStatus('Opening...');
  
    const onEntered = () => setStatus('Opened');
  
    const onExiting = () => setStatus('Closing...');
  
    const onExited = () => setStatus('Closed');
  
    const toggle = () => setCollapse(!collapse);

    useEffect(() => {
      axios
        .get(
          `https://swapi.dev/api/people/${props.charId}/`
        )
        .then((res) => {
          console.log("Res: ", res);
          setData(res.data);
          
        })
        .catch((err) => {
          console.log("It broke? ...It broke. : ", err);
        });
    }, []);

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{marginBottom: '1rem'}}>{data.name}</Button>
            <h5>Information status: {status}</h5>
            <Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}
              > 
        <Card>
          <CardBody>
            <CardTitle>{data.name}</CardTitle>
                <CardSubtitle>Birth Date: {data.birth_year}</CardSubtitle>
                <CardText>{data.name} height is {data.height}cm with a mass of {data.mass}kg.
            </CardText>
            <h5>Likes: {like}</h5>
            <Button onClick={() => setLike(like + 1)}>Like</Button>
          </CardBody>
        </Card>
        </Collapse>

      </div>
      );
}

export default Character;
