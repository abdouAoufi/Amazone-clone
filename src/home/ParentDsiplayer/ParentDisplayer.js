import React from "react";
import Modal from "../../components/Modal/Modal";
import Displayer from "../Displayer/Displayer";
import BackDrop from "../../components/BackDrop/BackDrop";

const ParentDisplayer = ({ show, click, product }) => {
  return (
    <div>
      <BackDrop show={show} clicked={click} />
      <Modal show={show}>
        {show ? (
          <Displayer
            title={product.name}
            price={product.price}
            rating={product.rating}
            imageSource={product.image}
            date={"12-03-2021"}
          />
        ) : null}
      </Modal>
    </div>
  );
};

export default ParentDisplayer;
