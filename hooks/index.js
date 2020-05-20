hooks = {
  cleanUser: (user) => {
    return({
      email: user.email,
      username: user.username,
      id: user.id,
    });
  }  
}

module.exports = hooks;