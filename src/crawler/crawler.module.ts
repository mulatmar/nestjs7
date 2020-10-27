import { Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
@Module({
  imports: [],
  providers: [CrawlerService],
})
export class CrawlerModule {}