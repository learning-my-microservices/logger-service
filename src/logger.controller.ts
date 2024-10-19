import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LoggerService } from './logger.service';

@Controller()
export class AppController {
  constructor(private readonly service: LoggerService) {}

  @EventPattern('logger-create')
  async handleItemCreated(item: any): Promise<void> {
    await this.service.save(item);
  }
}
