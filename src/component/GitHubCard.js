import React from "react";
import Card from "react-bootstrap/Card";
import photo from './Jenni.jpg'
function GitHubCard() {
    const photoStyle = {
        width: 'auto',
        height: '300px'
    }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={photo} style={photoStyle}/>
      <Card.Body>
        <Card.Title>Jenni Ferguson</Card.Title>
        <Card.Text>
          Working mom of 3 who is just trying to get her homework done!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
