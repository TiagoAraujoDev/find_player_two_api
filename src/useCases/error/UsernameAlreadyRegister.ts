class UsernameAlreadyRegisterError extends Error {
  constructor() {
    super("Username already register");
  }
}

export { UsernameAlreadyRegisterError };
