import jwt from 'jsonwebtoken';
import users from '../models/user.js';

const secret = 'test';

export const signin = (req, res) => {

  const { username, password } = req.body;
  try {
    const user = users.find((user) => user.username == username);
    
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username, id: user.id }, secret, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
