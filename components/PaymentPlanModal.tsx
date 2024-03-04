import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Switch,
  Card,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import check from "../public/check .svg";
import checkx from "../public/checkX.svg";
import { getJSONdata, getPlan } from "@/application/utils/functions";
import { startUserSubcription } from "@/application/api/apis";
import Loader from "./Loader";

interface PaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPlanModal: React.FC<PaymentPlanModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);
  const [userData,setUserData]=useState<any>();
  const [isLoading,setLoader]=useState(false);

  const toggleBillingCycle = () => {
    setIsYearlyBilling((prev) => !prev);
  };
  useEffect(()=>{
    if(window){
      setUserData(getJSONdata("profile"));
     }
  },[])

  const subscribeUser= async ()=>{
    if(getPlan(userData?.roles || [])!=="Pro"){
      try{
        setLoader(true);
      const sub = await startUserSubcription("PLUS","YEARLY");
      setLoader(false);
      window.location.href=sub.url;
      console.log(sub);
      }catch(e){
        console.log(e);
      }
    }
  }
  return (
    <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent style={{ maxWidth: "800px" }}>
        <ModalBody>
          <section id="Pricing" className="h-auto md:h-full">
            <div className=" relative  flex flex-col justify-center items-center py-10 px-4 sm:px-0">
              <h1 className="text-black mb-10 text-4xl text-center font-semibold">
                Upgrade your plan
              </h1>
              <div className="flex mb-10">
                <h1
                  className={`mr-4 ${
                    isYearlyBilling ? "text-[#E67E22]" : "text-[#ccc]"
                  }`}
                >
                  Billed Yearly
                </h1>
                <Switch
                  className="mr-4"
                  checked={isYearlyBilling}
                  onChange={toggleBillingCycle}
                />
                <h1
                  className={`mr-4 ${
                    isYearlyBilling ? "text-[#ccc]" : "text-[#E67E22]"
                  }`}
                >
                  Billed Monthly
                </h1>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <motion.div
                  layout
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ ease: "linear", delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <Card className="w-full md:w-[350px] px-4 border py-4  mb-4">
                    <h3 className="mb-4 font-semibold ">Free</h3>
                    <h1 className="text-black text-4xl mb-2 font-bold">$0</h1>
                    <p className="mb-4 text-sm text-black">Per month</p>

                    <p className="text-sm mb-4 text-gray-400">
                      Perfect for individuals or Companies looking to try things
                      out.
                    </p>

                    <Button
                      variant="bordered"
                      className="border-[#008080] mb-6"
                    >
                      {getPlan(userData?.roles || [])==="Free"?"Active":"Get Started"}
                    </Button>

                    <Divider className="mb-4" />
                    <div className="flex  mb-2">
                      <Image src={checkx} alt="x" className="mr-4" />
                      <p className="text-black">5 sessions</p>
                    </div>
                    <div className="flex mb-2">
                      <Image src={checkx} alt="x" className="mr-4" />
                      <p className="text-black">1 account</p>
                    </div>
                    <div className="flex mb-2">
                      <Image src={checkx} alt="x" className="mr-4" />
                      <p className="text-black">Custom templates</p>
                    </div>
                    <div className="flex">
                      <Image src={check} alt="x" className="mr-4" />
                      <p className="text-black">Email support</p>
                    </div>
                  </Card>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ ease: "linear", delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <Card className="w-full md:w-[350px] px-4 py-4 border mb-4">
                    <h3 className="mb-4 font-semibold">Basic</h3>
                    <h1 className="text-black text-4xl mb-2 font-bold">
                      {isYearlyBilling ? "$119.99" : "$9.99"}
                    </h1>
                    <p className="mb-4 text-sm text-gray-400">
                      {" "}
                      {isYearlyBilling ? "Per year" : "Per month"}
                    </p>

                    <p className="text-sm mb-4 text-gray-400">
                      Perfect for individuals or Companies looking to try things
                      out.
                    </p>

                    <Button
                      variant="bordered"
                      className="border-[#008080] mb-6"
                      onClick={()=>{
                        subscribeUser();
                      }}
                    >
                      {getPlan(userData?.roles || [])==="Pro"?"Active":"Get Started"}
                    </Button>

                    <Divider className="mb-4" />
                    <div className="flex  mb-2">
                      <Image src={check} alt="x" className="mr-4" />
                      <p className="text-black">
                        {isYearlyBilling ? "2500 Summaries" : "200 Summaries"}
                      </p>
                    </div>
                    <div className="flex mb-2">
                      <Image src={check} alt="x" className="mr-4" />
                      <p className="text-black">
                        {isYearlyBilling
                          ? "Maximum of 20GB yearly"
                          : "Maximum of 1,600MB per month"}
                      </p>
                    </div>
                    <div className="flex mb-2">
                      <Image src={check} alt="x" className="mr-4" />
                      <p className="text-black">
                        {isYearlyBilling
                          ? "Maximum of 120,000 pages"
                          : "Maximum of 10,000 pages"}
                      </p>
                    </div>
                    <div className="flex">
                      <Image src={check} alt="x" className="mr-4" />
                      <p className="text-black">Try 3 days free</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </ModalBody>
      </ModalContent>
      {isLoading && <Loader type={'FULL'}/>}
    </Modal>
  );
};

export default PaymentPlanModal;
