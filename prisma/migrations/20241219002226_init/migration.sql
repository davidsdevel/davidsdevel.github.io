-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('PUBLISHED', 'DRAFTED');

-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "tags" TEXT[],
    "category" TEXT,
    "content" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" TIMESTAMP(3),
    "updated" TIMESTAMP(3),
    "status" "PostStatus" NOT NULL DEFAULT 'DRAFTED',
    "images" TEXT[],
    "thumbnail" TEXT,
    "slug" TEXT,
    "views" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_slug_key" ON "Url"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");
