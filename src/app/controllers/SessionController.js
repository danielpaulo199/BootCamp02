import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionControler {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User Not Found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '1530dfb8d07a4e609de12d9a9670ce38', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionControler();
