import UserToken from '../infra/typeorm/entities/Usertoken';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
}
