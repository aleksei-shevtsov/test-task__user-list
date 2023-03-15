export interface IUserListState {
  users: IUser[];
  status: Status;
  inputValue: string;
  searchData: [] | IUser[];
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
  };
}

export enum Status {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
