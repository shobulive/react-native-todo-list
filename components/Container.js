import {
  Content,
  Footer,
  Header,
  Title,
  Container,
  Text,
  Row,
  Fab,
  Icon,
} from "native-base";
import React from "react";
import { TODO_STATUSES } from "../constants/TodoConstants";
import { TodoContext } from "../context/TodoContext";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

const AppContainer = () => {
  const { todos, setShowAddOption, showAddOption } = React.useContext(
    TodoContext
  );
  console.log(todos);
  return (
    <>
      <Container>
        <Header
          iosBarStyle="dark-content"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Title>Todo List</Title>
        </Header>
        <Content>
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} {...todo}></TodoItem>
          ))}
          {showAddOption && <AddItem></AddItem>}
        </Content>
        <Fab onPress={() => setShowAddOption(true)}>
          <Icon name="ios-add"></Icon>
        </Fab>
      </Container>
      <Footer
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Row>
          <Text style={{ fontSize: "12px", color: "#888" }}>Active:</Text>
          <Text style={{ fontSize: "12px" }}>
            {
              todos.filter(({ status }) => status === TODO_STATUSES.ACTIVE)
                .length
            }
          </Text>
        </Row>
        <Row style={{ justifyContent: "flex-end" }}>
          <Text style={{ fontSize: "12px", color: "#888" }}>Done:</Text>
          <Text style={{ fontSize: "12px" }}>
            {todos.filter(({ status }) => status === TODO_STATUSES.DONE).length}
          </Text>
        </Row>
      </Footer>
    </>
  );
};

export default AppContainer;
