-- AlterTable
ALTER TABLE "Sujet" ADD COLUMN     "partieNumber" INTEGER;

-- CreateIndex
CREATE INDEX "Sujet_epreuve_year_month_partieNumber_idx" ON "Sujet"("epreuve", "year", "month", "partieNumber");
