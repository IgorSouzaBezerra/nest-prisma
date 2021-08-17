import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePokemonDto): Promise<import(".prisma/client").Pokemon>;
    findAll(): Promise<(import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").Pokemon>;
    update(id: number, data: UpdatePokemonDto): Promise<import(".prisma/client").Pokemon>;
    remove(id: number): Promise<void>;
}
