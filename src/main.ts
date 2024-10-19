import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestApplication, Logger } from '@nestjs/common';
import { AppModule } from './logger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await startCommunicationMicroservices(app);
  await app.listen(3011, () => {
    Logger.log('LOGGER SERVICE STARTED', 'logger-service');
  });
}

async function startCommunicationMicroservices(app: INestApplication) {
  const rabbitMqOptions: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_HOST],
      queue: 'logger-queue',
      queueOptions: {
        durable: false,
      },
    },
  };

  app.connectMicroservice(rabbitMqOptions);

  await app.startAllMicroservices();
}

bootstrap();
