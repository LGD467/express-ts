/**
 * 用户服务类
 */
import db from "../../data-source";
import { User } from "../entities/user.entity";

export class UserService {
  userRepository;
  constructor() {
    this.userRepository = db.getRepository(User);
  }

  // 查询全部用户
  async queryList() {
    return await this.userRepository.findAndCount();
  }

  // 查询单个用户
  async queryById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
}
