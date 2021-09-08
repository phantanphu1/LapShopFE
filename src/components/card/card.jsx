import React from "react";
import "./card.scss";
import { Segment, Button, Icon } from "semantic-ui-react";
const Card = () => {
  return (
    <div className="card">
      <Segment>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.Hbh5G0O3o5Fq9dtzQPQGIwHaFm&pid=Api&P=0&w=212&h=162"
          alt=""
        />
        <h1>HP 430 2021</h1>
        <li>Chíp sử lý: Core i5</li>
        <Button color="red">
          <Icon name="eye" />
          XEM SẢN PHẨM
        </Button>
      </Segment>
      <Segment>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.Hbh5G0O3o5Fq9dtzQPQGIwHaFm&pid=Api&P=0&w=212&h=162"
          alt=""
        />
        <h1>HP 430 2021</h1>
        <li>Chíp sử lý: Core i5</li>
        <Button color="red">
          <Icon name="eye" />
          XEM SẢN PHẨM
        </Button>
      </Segment>
    </div>
  );
};

export default Card;
