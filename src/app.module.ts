import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import Attribute from './entities/attribute.entity';
import User from './entities/user.entity';
import Device from './entities/device.entity';
import Banner from './entities/banner.entity';
import AuthToken from './entities/auth-token.entity';
import AttributeValue, {
  AttributeValueBit,
  AttributeValueFloat,
  AttributeValueInteger,
} from './entities/attribute-value.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '3306'),
      username: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME || 'test',
      synchronize: process.env.DATABASE_SYNCHRONIZE == 'true' || false,
      logging: process.env.DATABASE_LOGGING == 'true' || false,
      entities: [Attribute, User, Device, Banner, AuthToken, AttributeValue],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
