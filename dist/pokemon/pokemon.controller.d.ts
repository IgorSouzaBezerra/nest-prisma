import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): Promise<import(".prisma/client").Pokemon>;
    findAll(): Promise<(import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Pokemon>;
    update(id: string, updatePokemonDto: UpdatePokemonDto): Promise<import(".prisma/client").Pokemon>;
    remove(id: string): Promise<void>;
}
