import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ParcellesService } from '../services/parcelles.service';
import { NewParcelleDto } from '../common/new.parcelle.dto';
import { ParcelleDto } from '../common/parcelle.dto';

@Controller('parcelles')
export class ParcellesController {
  constructor(private readonly parcellesService: ParcellesService) {}

  @Post()
  async newParcelle(
    @Body(new ValidationPipe()) newParcelleDto: NewParcelleDto,
  ): Promise<void> {
    await this.parcellesService.createParcelle(newParcelleDto);
  }

  @Get()
  async listParcelles(): Promise<ParcelleDto[]> {
    return this.parcellesService.getParcelles();
  }

  @Get(':id/bandes')
  async getParcelleDetails(@Param('id') id: string): Promise<ParcelleDto> {
    return this.parcellesService.getParcelleDetails(id);
  }
}
