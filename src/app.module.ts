import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnackModule } from './snack/snack.module';

@Module({
  imports: [SnackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
