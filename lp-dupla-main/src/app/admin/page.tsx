'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Image from "next/image";
import LogoImg from "../../../public/logo-png.png"
import FormDataAPI from "@/components/formadm";
import { TableDatas } from "@/components/tableDatas";

const schema = z.object({
  login: z.string().min(1, "Login é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatória"),
  
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [authError, setAuthError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data); // Debug
    console.log("Login digitado:", data.login);
    console.log("Senha digitada:", data.senha);
    
    if (data.login === "jc2025" && data.senha === "jc2025") {
      setIsLogin(true);
      setAuthError("");
    } else {
      setAuthError("Login ou senha incorretos");
    }
  };

  return (
    <div className="bg-gray-800 h-screen">
    <div className="flex justify-center items-center  ">
      {isLogin ? (
        <div className="flex flex-col gap-20 p-20 bg-gray-800 w-full">
        <FormDataAPI/>
        <TableDatas/>
        </div>
      ) : (
        <>
       <div className=" w-[20rem] mt-10 p-6 border rounded-lg shadow-lg ">
                  <div className="p-1 flex justify-center mb-10">
                      <Image src={LogoImg} alt="Logo"  width={200} height={200}/>
                  </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Usuário:</label>
                    <input type="text" {...register("login")} className="w-full border p-2 rounded text-black" />
                    {errors.login && <p className="text-red-500 text-sm">{errors.login.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Senha:</label>
                    <input type="password" {...register("senha")} className="w-full border p-2 rounded text-black" />
                    {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
                  </div>
                  {authError && <p className="text-red-500 text-sm">{authError}</p>}
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Entrar</button>
                </form>
            </div>
      </>)}
         
    </div>
    
    </div>
    
  );
}
