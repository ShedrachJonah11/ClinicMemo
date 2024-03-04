"use client";
import React, { useState } from "react";
import bg from "../../../public/bgauth.png";
import star from "../../../public/star.svg";
import Image from "next/image";
import { Button, Card, CardBody, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { EyeFilledIcon } from "../../../public/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../public/EyeSlashFilledIcon";
import { createAccount, loginGoogle } from "@/application/api/apis";
import Loader from "@/components/Loader";

function Index() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [userData,setUserData] = useState<any>({
    email:"",
    first_name:"",
    last_name:"",
    password:"",
  });
  const [isLoading,setLoading]=useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const loginG = async ()=>{
    try{
    setLoading(true);
    const res = await loginGoogle();
    setLoading(false);
    if(window){
      window.location.href=res.authorization_url;
    }
    }catch(e){
      setLoading(false);
    }
  }
  
  const register= async ()=>{
    console.log(userData);
    if(userData){
      if(userData.email==""){
        //email toast
        return;
      }
      if(userData.first_name==""){
        //first name toast
        return;
      }
      if(userData.last_name==""){
        //last name toast
        return;
      }
      if(userData.password==""){
        ///pasword toast
        return;
      }
      try{
      
      setLoading(true);
      const res = await createAccount(userData);
      setLoading(false);
      console.log(res);
      //signed up successfully
      }catch(error:any){
        setLoading(false);
        console.log(error)
        if (error.response && error.response.data) {
          const { data } = error.response;
          
          if (data.detail === "REGISTER_INVALID_PASSWORD") {
            // Handle invalid password error
          } else if (data.detail === "REGISTER_USER_ALREADY_EXISTS") {
            // Handle user already exists error
          } else {
            // Handle other error scenarios
          }
        } else {
          // Handle other types of errors
        }
      }
    }
  }
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <Card className="w-96 sm:w-[450px]  p-6 opacity-75 ">
        <CardBody className="flex flex-col items-center">
          <Image src={star} alt="" className="mt-2" />

          <h1 className="text-lg font-bold mb-2">Sign up</h1>
          <p className="text-gray-500 mb-6">Start your 3-day free trial.</p>
          <Input
            type="name"
            label="First Name"
            placeholder="Enter your first name"
            className="mb-4"
            onChange={(e)=>{
              userData.first_name=e.target.value;
              setUserData(userData)
            }}
          />
          <Input
            type="name"
            label="Last Name"
            placeholder="Enter your last name"
            className="mb-4"
            onChange={(e)=>{
              userData.last_name=e.target.value;
              setUserData(userData)
            }}
          />
          <Input type="email" label="Email" placeholder="Enter your email" 
           onChange={(e)=>{
            userData.email=e.target.value;
            setUserData(userData)
          }}
          />
          <Input
            label="Password"
            placeholder="Create a password"
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="mt-4"
            onChange={(e)=>{
              userData.password=e.target.value;
              setUserData(userData)
            }}
          />

          <Button size="lg" className="w-full mt-6 bg-[#008080]" onClick={()=>{
             register();
          }}>
            <p className="text-white text-semibold ">Sign Up</p>
          </Button>

          <div className="flex items-center mt-6 mb-4">
            <div className="flex-1 border-t border-black"></div>
            <p className="mx-4">or</p>
            <div className="flex-1 border-t border-black"></div>
          </div>

          <Card className="w-full mb-4 " >
            <CardBody className="justify-center items-center" onClick={()=>{
            loginG();
          }}>
              <p>Sign up with Google</p>
            </CardBody>
          </Card>
          <div className="flex justify-center items-center">
            <p className="flex">
              Have an account already?
              <Link href={"/auth/login"} className="ml-1 text-[#008080]">
                login
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>

      {isLoading && <Loader type={'FULL'}/>}
    </div>
  );
}

export default Index;
