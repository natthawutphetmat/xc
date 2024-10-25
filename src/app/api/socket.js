// /app/api/socket.js
import { Server } from "socket.io";

let io;

export default function handler(req, res) {
  if (!io) {
    io = new Server(res.socket.server); // สร้าง socket.io server
    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      // ฟังก์ชันสำหรับรับข้อความจากผู้ใช้
      socket.on("chatMessage", (msg) => {
        // ส่งข้อความไปที่ทุกคนที่เชื่อมต่อ
        io.emit("chatMessage", msg);
      });

      // เมื่อผู้ใช้ตัดการเชื่อมต่อ
      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }

  res.end();
}
