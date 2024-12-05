/**
 * 用户 controller
 */
import { Controller, Get, Param, HttpError } from "routing-controllers";
import { UserService } from "../services/user.service";

@Controller("/user")
export class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  @Get("/queryList")
  queryList() {
    return this.userService.queryList();
  }

  @Get("/queryById/:id")
  async queryById(@Param("id") id: string) {
    try {
      const userId = parseInt(id, 10);
      const user = await this.userService.queryById(userId);

      if (!user) {
        throw new HttpError(404, "User not found");
      }
      return user;
    } catch (error) {
      throw new HttpError(500, "Internal Server Error");
    }
  }
}
