export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  googleId: string;
  spotifyId: string;
  premium: boolean;
}

export class User implements IUser {
  email: string;
  firstName: string;
  googleId: string;
  lastName: string;
  premium: boolean;
  spotifyId: string;

  constructor(email: string, firstName: string, googleId: string, lastName: string, premium: boolean, spotifyId: string) {
    this.email = email;
    this.firstName = firstName;
    this.googleId = googleId;
    this.lastName = lastName;
    this.premium = premium;
    this.spotifyId = spotifyId;
  }
}
