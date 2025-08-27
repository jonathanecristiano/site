-- CreateTable
CREATE TABLE "datas" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "linkbuy" TEXT,

    CONSTRAINT "datas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoLink" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "VideoLink_pkey" PRIMARY KEY ("id")
);
