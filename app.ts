import express from "express"; // 导入express模块
import { useExpressServer, createExpressServer } from "routing-controllers";
import { json, urlencoded } from "body-parser";
import "reflect-metadata";
import ds from "./data-source";
import { UserController } from "./src/controllers/user.controller";

async function init() {
  const app = express(); // 使用express模块创建应用实例

  // 新增：初始化 DataSource
  await ds
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((e: any) => {
      console.log("Error during Data Source initialization:", e);
    });

  app.use(json());
  app.use(urlencoded({ extended: true }));

  // 将当前实例注册到 routing-controllers
  useExpressServer(app, {
    controllers: [UserController],
  });

  app.listen(3000, () => {
    console.log(`  App is running at http://localhost:3000\n`);
    console.log("  Press CTRL-C to stop\n");
  });
}

init();
