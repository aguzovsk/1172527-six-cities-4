class User {
  constructor(datum) {
    this.id = Number.parseInt(datum.id);
    this.name = datum.name;
    this.isPro = JSON.parse(datum.is_pro);
    this.avatar = datum.avatar_url;
  }
}

export default User;
