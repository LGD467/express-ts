// 导入TypeORM装饰器，用于定义实体和实体的属性
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

// 使用@Entity装饰器定义实体类User，对应数据库中的'user'表
@Entity("user")
export class User {
  // 使用@PrimaryGeneratedColumn装饰器定义自动生成的主键列id
  @PrimaryGeneratedColumn()
  id!: number;

  // 使用@PrimaryColumn装饰器定义主键列jobNo，列名为'job_no'
  @PrimaryColumn({ name: "job_no" })
  jobNo!: string;

  // 使用@Column装饰器定义普通列name
  @Column()
  name!: string;

  // 使用@Column装饰器定义普通列sex
  @Column()
  sex!: string;

  // 使用@Column装饰器定义普通列tel
  @Column()
  tel!: string;

  // 使用@Column装饰器定义普通列email
  @Column()
  email!: string;

  // 使用@Column装饰器定义普通列address
  @Column()
  address!: string;

  // 使用@Column装饰器定义普通列createdBy，列名为'created_by'
  @Column({ name: "created_by" })
  createdBy!: string;

  // 使用@Column装饰器定义普通列createdAt，列名为'created_at'，类型为'date'
  @Column({ type: "date", name: "created_at" })
  createdAt!: string;

  // 使用@Column装饰器定义普通列updatedBy，列名为'updated_by'
  @Column({ name: "updated_by" })
  updatedBy!: string;

  // 使用@Column装饰器定义普通列updatedAt，列名为'updated_at'，类型为'date'
  @Column({ type: "date", name: "updated_at" })
  updatedAt!: string;
}
