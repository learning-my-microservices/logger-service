import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'logger' })
export class LoggerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  request: string;

  @Column()
  response: string;

  @Column({ name: 'service_name' })
  serviceName: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
