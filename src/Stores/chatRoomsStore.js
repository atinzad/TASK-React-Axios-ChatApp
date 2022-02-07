import { makeAutoObservable } from "mobx";
import axios from "axios";

class ChatRooms {
  rooms = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchRooms = async () => {
    try {
      const renderedRooms = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms = renderedRooms.data;
      console.log(this.rooms);
    } catch (error) {
      console.log("erorr in fetching data");
    }
  };

  createRoom = async (newRoom) => {
    try {
      await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      this.rooms.push(newRoom);
    } catch (error) {
      console.log("error in creating room");
    }
  };

  deleteRoom = async (id) => {
    // to do : call BE to delete a room
    try {
      await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      this.rooms = this.rooms.filter((room) => room.id !== id);
    } catch (error) {
      console.log("error in deleting room");
    }
  };

  addMessages = async (room, msg) => {
    try {
      room.messages.push(msg);
      await axios.post(
        `https://coded-task-axios-be.herokuapp.com/rooms/msg/${room.id}`,
        msg
      );
    } catch (error) {}
  };
}

const chatRooms = new ChatRooms();
chatRooms.fetchRooms();
export default chatRooms;
