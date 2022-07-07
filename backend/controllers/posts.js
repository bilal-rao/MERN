import PostMessage from "../models/postMessage.js"


export const getPosts = async (req, res) => {
    try {
        const postMesages = await PostMessage.find();
        res.status(200).json(postMesages);
    }
    catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createPosts = (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    res.send("Create Posts!")
    try {
        newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}