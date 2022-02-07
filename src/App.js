import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import chatRooms from "./Stores/chatRoomsStore";
import { observer } from "mobx-react";

const App = () => {
  const rooms = chatRooms.rooms;

  /* const fetchRooms = async () => {
    const renderRooms = await axios.get(
      "https://coded-task-axios-be.herokuapp.com/rooms"
    );
    setRooms(renderRooms.data);
  };

  fetchRooms();
  */

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms} />}
            />
            <Route exact path="/" element={<ChatRoomsList rooms={rooms} />} />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default observer(App);
