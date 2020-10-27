import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

import { configModule } from './configure.root';
import { TokenModule } from './token/token.module';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(
      process.env.MONGODB_WRITE_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    ),
    TokenModule,
    MailModule,
    CrawlerModule
  ]
})
export class AppModule {}
