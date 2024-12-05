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
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
  });

  // 将当前实例注册到 routing-controllers
  useExpressServer(app, {
    controllers: [UserController],
  });

  app.listen(3000, () => {
    console.log(`  App is running at http://localhost:3000\n`);
  });
}

init();
