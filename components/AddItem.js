import React, { useContext, useEffect, useState } from "react";
import { Button, Icon, Input, Row, Separator } from "native-base";
import { TodoContext } from "../context/TodoContext";

export const AddItem = () => {
  const { addTodo, setShowAddOption, showAddOption } = useContext(TodoContext);
  const [text, setText] = useState("");
  const inputRef = React.createRef();
  const addHandler = () => {
    console.log(text);
    if (!text) {
      alert("Please select a text to enter");
    }
    addTodo(text);
    setShowAddOption(false);
  };
  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 8,
        }}
      >
        <Input
          autoFocus
          ref={inputRef}
          onChangeText={(text) => setText(text)}
        />
        <Button
          onPress={() => setShowAddOption(false)}
          style={{ backgroundColor: "rgba(52, 52, 52, 0.3)", margin: 5 }}
        >
          <Icon name="ios-close"></Icon>
        </Button>
        <Button
          onPress={() => addHandler()}
          style={{ backgroundColor: "rgba(52, 52, 52, 0.3)", margin: 5 }}
        >
          <Icon name="ios-checkmark"></Icon>
        </Button>
      </Row>
      <Separator style={{ height: 2 }}></Separator>
    </>
  );
};
