import { Module } from '@nestjs/common';
import { DisposalController } from './disposal.controller';
import { DisposalService } from './disposal.service';

@Module({
  controllers: [DisposalController],
  providers: [DisposalService],
})
export class DisposalModule {}
