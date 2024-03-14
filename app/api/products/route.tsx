import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany();
  return NextResponse.json(products);
  // return NextResponse.json([
  //   { id: 1, name: "Milk", price: 30 },
  //   { id: 2, name: "Butter", price: 45 },
  // ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(newProduct, { status: 201 });
}
