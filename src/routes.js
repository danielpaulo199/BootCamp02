import User from './app/models/Users';

const { Router } = require('express');

const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Diego',
      email: 'diego@rock.com.br',
      password_hash: '12345678',
    });

    return res.json(user);
  } catch (error) {
    return res.send(error);
  }
});

export default routes;
