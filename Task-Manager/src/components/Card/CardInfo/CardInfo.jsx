import React, { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import Editable from "../../Editable/Editable";
import "./CardInfo.css";

function CardInfo(props) {
  const [values, setValues] = useState({
    ...props.card,
  });

  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };

  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);

  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <h3>Edit Title</h3>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;