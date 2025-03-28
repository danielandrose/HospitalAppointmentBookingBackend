import Movie from "../models/movie.model.js"

export const MovieIndex=(req,res)=>{
    res.send("Create a movie")
}

export const MovieCreate=async (req,res)=>{
    // id,title,desc

    const newMovie=new Movie({
        title:req.body.title,
        desc:req.body.desc
    })

    try{
        const movie=await newMovie.save();
        res.status(201).json(movie);
    }
    catch(err){
        res.status(404).json({message : error.message})
    }
}

export const MovieUpdate=(req,res)=>{
    res.send("Update a movie");
}

export const MovieDelete=(req,res)=>{
    res.send("Delete a movie")
}