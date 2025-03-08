import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly repository: Repository<Photo>
  ) {}
  findAll() {
    return this.repository.find();
  }
}
