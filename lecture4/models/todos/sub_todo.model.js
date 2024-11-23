import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    username : String
})


export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
