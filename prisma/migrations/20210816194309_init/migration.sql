-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon.name_unique" ON "Pokemon"("name");

-- AddForeignKey
ALTER TABLE "Image" ADD FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
