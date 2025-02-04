import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/default-database'),
    UserModule, // Add the UserModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
