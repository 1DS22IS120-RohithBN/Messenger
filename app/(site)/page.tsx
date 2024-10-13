import AuthLayout from "./components/AuthLayout";

export default function Home() {
  return (
   <div className=" bg-gray-100   flex flex-col min-h-screen justify-center items-center ">
    <div>LOGO</div>
    <p className="mt-4 text-2xl text-black  text-center">Welcome to messenger</p>
    <AuthLayout/>

   </div>
  );
}
