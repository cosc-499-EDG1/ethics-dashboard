interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  class_code: string;
}

interface Account {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  type: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}
