import { Injectable } from '@nestjs/common';

@Injectable()
export class CrawlerService {
    constructor() { }
    public async crawl(): Promise<void> { }
}