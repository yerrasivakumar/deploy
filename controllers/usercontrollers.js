
const User = require('../model/Usermodel')


exports.UserRegistration = async (req,res) =>{
    try {

        const { email, password,name,
           } = req.body;


           if (!email || !password || !name) {
            return res.status(400).json({ message: 'All fields are required' });
          }
      
         
           const existingUser = await User.findOne({email});
           if (existingUser) {
             return res.status(400).json({ message: 'Email already registered' });
           }
      
       
       
           // Create a new user
           const user = new User({
             email,
             password,
             name,
            
           });
       
           // Save the user to the database
           await user.save();
       
           res.status(201).json({ message: 'user registered successfully' });
         } catch (error) {
           console.error(error);
           res.status(500).json({ message: 'Internal server error' });
         }
  }
  exports.userLogin = async(req,res) =>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({ email });
  
        if (!user) {
            return res.status(401).json({ message: 'Invalid email' });
        }
        res.json({user});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
 exports.getAll = async(req,res) =>{
    try {
    const user = await User.find()
    res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }
 exports.getoneUser = async(req,res) =>{

    try {
        const user = await User.findById(req.params.id)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 }