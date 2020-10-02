import { Button, Icon, Row, Separator, Text } from "native-base";
import React, { useContext } from "react";
import { TODO_STATUSES } from "../constants/TodoConstants";
import { TodoContext } from "../context/TodoContext";

export const TodoItem = ({ text, status, index }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 8,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...(status === TODO_STATUSES.DONE
              ? { textDecorationLine: "line-through" }
              : {}),
          }}
        >
          {text}
        </Text>
        {status !== TODO_STATUSES.DONE && (
          <Button
            onPress={() => updateTodo(index, null, TODO_STATUSES.DONE)}
            style={{ backgroundColor: "rgba(52, 52, 52, 0.3)", margin: 5 }}
          >
            <Icon name="ios-close"></Icon>
          </Button>
        )}
        <Button
          onPress={() => deleteTodo(index)}
          style={{ backgroundColor: "rgba(52, 52, 52, 0.3)", margin: 5 }}
        >
          <Icon name="ios-trash"></Icon>
        </Button>
      </Row>
      <Separator style={{ height: 2 }}></Separator>
    </>
  );
};
