import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcryptjs';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: true })
  username: string;
  @Column({ select: false })
  password: string;
  @Column()
  avatar: string;
  @BeforeInsert()
  async encryptPwd() {
    this.password = await hashSync(this.password);
  }
}
