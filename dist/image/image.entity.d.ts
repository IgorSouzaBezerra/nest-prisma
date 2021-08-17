import { Prisma } from '@prisma/client';
export declare class Image implements Prisma.ImageUncheckedCreateInput {
    id?: number;
    pokemonId: number;
    url: string;
}
