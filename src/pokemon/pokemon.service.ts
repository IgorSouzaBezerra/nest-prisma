import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePokemonDto) {
    return this.prisma.pokemon.create({ data });
  }

  async findAll() {
    return this.prisma.pokemon.findMany({
      include: {
        images: {
          select: {
            url: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.pokemon.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    this.prisma.pokemon.delete({
      where: { id },
    });
  }
}
