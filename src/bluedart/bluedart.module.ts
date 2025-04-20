import { Module } from '@nestjs/common';
import { BlueDartController } from './bluedart.controller';
import { BlueDartService } from './bluedart.service';

@Module({
  controllers: [BlueDartController],
  providers: [BlueDartService],
})
export class BlueDartModule {}