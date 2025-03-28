import { model, Schema } from "mongoose";

const schema=new Schema({
    title:String,
    desc:String
})

const Movie = model("Movies",schema);

export default Movie