interface MainModel {
  myAccount: Account | {};
  login: Thunk<MainModel, LoginData>;
}
