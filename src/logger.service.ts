import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerEntity } from './entities/logger.entity';

@Injectable()
export class LoggerService {
  constructor(
    @InjectRepository(LoggerEntity)
    private repository: Repository<LoggerEntity>,
  ) {}

  async save(log: any): Promise<void> {
    const logSaved = this.repository.create(log);
    await this.repository.save(logSaved);
  }
}
