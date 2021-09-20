import React from "react";
import Link from "next/link";
import Logo from "assets/icons/logo.svg";
import Image from "next/image";

interface Props {}

const Index = (props: Props) => {
  return (
    <header className="bg-blue-50 flex items-center justify-between h-14 px-8 shadow-md">
      <section>
        <div className="flex items-center mb-1">
          <div className="w-6 h-6 mr-2">
            <Image src={Logo} alt="배당금닷컴" className="inline-block pr-4" layout="responsive" />
          </div>
          <h1 className="inline-block text-2xl font-semibold tracking-wide">
            <Link href="/">배당금닷컴</Link>
          </h1>
        </div>
      </section>
      <button className="bg-white px-3 py-1 rounded-xl text-sm">
        아직 배당금닷컴 회원이 아니신가요?
      </button>
    </header>
  );
};

export default Index;
