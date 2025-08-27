'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { useState } from "react";

const schema = z.object({
  dia: z.string().min(1, "Campo obrigatório"),
  mes: z.string().min(1, "Campo obrigatório"),
  local: z.string().min(1, "Campo obrigatório"),
  cidade: z.string().min(1, "Campo obrigatório"),
  ingressoOnline: z.boolean(),
  linkCompra: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function FormDataAPI() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { ingressoOnline: false } });

  const ingressoOnline = watch("ingressoOnline");

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex gap-10">
        <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Cadastro datas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Dia:</label>
            <label className="block text-sm font-medium">Exemplos: (05 , 09, 10, 22, 30 )</label>
            <input type="text" {...register("dia" as keyof FormData)} className="w-full border p-2 rounded text-black mt-1" />
            {errors.dia && <p className="text-red-500 text-sm">{errors.dia?.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Mês:</label>
            <label className="block text-sm font-medium">Exemplos: (JAN, FEV, ABRIL, DEZ )</label>
            <input type="text" {...register("mes" as keyof FormData)} className="w-full border p-2 rounded text-black mt-1" />
            {errors.mes && <p className="text-red-500 text-sm">{errors.mes?.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Local:</label>
            <label className="block text-sm font-medium">Exemplos: (Vila Mix, Deu Liga, EXPOCRATO)</label>
            <input type="text" {...register("local" as keyof FormData)} className="w-full border p-2 rounded text-black mt-1" />
            {errors.local && <p className="text-red-500 text-sm">{errors.local?.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Cidade:</label>
            <label className="block text-sm font-medium">Exemplos: (São Paulo, Fortaleza, Crato)</label>
            <input type="text" {...register("cidade" as keyof FormData)} className="w-full border p-2 rounded text-black mt-1" />
            {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade?.message}</p>}
          </div>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" {...register("ingressoOnline")} />
            <span>Ingresso Online</span>
          </label>
        </div>
        {ingressoOnline && (
          <div>
            <label className="block text-sm font-medium">Link da Compra:</label>
            <input type="text" {...register("linkCompra")} className="w-full border p-2 rounded text-black mt-1" />
          </div>
        )}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Salvar</button>
      </form>
    </div>

    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Vídeo Destaque</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Link vídeo destaque:</label>
            <input type="text" {...register("linkCompra")} className="w-full border p-2 rounded text-black" />
          </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Atualizar</button>
      </form>
    </div>

    </div>
    
  );
}
