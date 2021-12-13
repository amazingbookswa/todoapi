import  mongoose  from "mongoose";

const { Schema ,model } = mongoose;
const todoschema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
        required: true
    },
    date_time:{
        type: String,
        required: true
    }
});

const Todo = model('Todo', todoschema);
export { Todo };