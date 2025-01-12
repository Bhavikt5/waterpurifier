import CustomerTable from "@/components/CustomerTable/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen ">
        <CustomerTable />
      </div>
    </>
  );
}
