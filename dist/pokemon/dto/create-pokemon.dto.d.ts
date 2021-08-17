import { Prisma } from '@prisma/client';
import { Pokemon } from '../entities/pokemon.entity';
export declare class CreatePokemonDto extends Pokemon {
    name: string;
    height?: number | null;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
