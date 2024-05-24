import { UserModel } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { TokenModel } from "../models/token.js";

//creating a new user
export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(8);
  try {
    const user = {
      fullname: req?.body?.fullname,
      email: req?.body?.email,
      phone: req?.body?.phone,
      dob: req?.body?.dob,
      gender: req?.body?.gender,
      password: bcrypt.hashSync(req?.body?.password, salt),
    };
    const userExist = await UserModel.findOne({ email: req?.body?.email });
    if (userExist) {
      return res.status(409).json({ message: "User already exist" });
    }
    await UserModel.create(user);
    res.status(201).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    next(error);
  }
};

//loging in as an existing user
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //find user email in database
    const user = await UserModel.findOne({ email });
    //return 404 if user is not found
    if (!user) {
      return res.status(404).json({ message: "User Not Found." });
    }
    //check if user password entered is correct
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Password!" });
    }
    // Generate access token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    //  //save users token
    //  await TokenModel.create({ userId: user._id });

//check if old tokens are valid
    let oldTokens = user.tokens || [];

    if (oldTokens.length) {
      oldTokens = oldTokens.filter(t => {
        const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000;
        if (timeDiff < 86400) {
          return t;
        }
      });
    }
  
    //save users token
    await UserModel.findByIdAndUpdate(user._id, {
      tokens: [...oldTokens, { token, signedAt: Date.now().toString() }],
    });

   
    // Return response
    res.status(200).json({ message: "Login successful", accessToken: token });
  } catch (error) {
    next(error);
  }
};

//getting a  user
export const getUser = async (req, res, next) => {
  try {
    const singleUser = await UserModel.findById(req.user.id);
    res.status(201).json({
      id: singleUser._id,
      email: singleUser.email,
      fullname: singleUser.fullname,
      dob: singleUser.dob,
    });
  } catch (error) {
    next(error);
  }
};


//updating a user
export const updateUser = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  try {
    // Find the user by ID
    const user = await UserModel.findById(req.user.id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the old password is correct
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect old password' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the password using findByIdAndUpdate
    await UserModel.findByIdAndUpdate(userId, { password: hashedPassword });

    res.status(200).json({ message: 'Password updated successfully' });

} catch (error) {
    next(error)
}
};

// logging out a user
export const logout = async (req, res, next) => {

  try {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
          return res
            .status(401)
            .json({ success: false, message: 'Authorization fail!' });
        }
    
        const tokens = req.user.tokens;
    
        const newTokens = tokens.filter(t => t.token !== token);
    
        await UserModel.findByIdAndUpdate(req.user._id, { tokens: newTokens });
        res.json({ success: true, message: 'Sign out successfully!' });
      }
  } catch (error) {
    next(error);
  }
};
