const ULRs = {
  register: 'authentication/register',
  login: 'authentication/login',
  logout: 'authentication/logout',
  currentUser: 'current',
  updateUser: 'users',
  userInfo: userId => `users/${userId}`,
  getMainCountryChatByName: countryName => `chats/${countryName}/main`,
  userCountries: userId => `countries/user/${userId}`,
  subscriptionToGroupMessages: chatId => `/countries/${chatId}/messages`,
  subscriptionToGroupEvents: chatId => `/countries/${chatId}/events`,
  subscriptionToUserErrors: userId => `/user/${userId}/errors`,
  joinToGroupChat: '/chat/events.joinChat',
  leaveOutGroupChat: '/chat/events.leaveChat',
  startTyping: '/chat/events.startTyping',
  stopTyping: '/chat/events.stopTyping',
  getPrivateChats: userId => `chats/user/${userId}/private`,
  createPrivateChat: 'chats/private',
  getChatsMessages: chatId =>
    `chats/${chatId}/messages?page=0&size=5&sort=creationDate,desc`,
};

export default ULRs;
