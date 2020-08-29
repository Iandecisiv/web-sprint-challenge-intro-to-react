// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const Character = props => {
    const [data, setData] = useState([]);
    const [like, setLike] = useState(0);

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
        <Card>
          <CardBody>
    <CardTitle>{data.name}</CardTitle>
    <CardSubtitle>Species: {data.species}</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <h5>Likes: {like}</h5>
            <Button onClick={() => setLike(like + 1)}>Likes</Button>
          </CardBody>
        </Card>
      </div>
      );
}

export default Character;
