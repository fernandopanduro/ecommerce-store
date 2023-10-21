"use client";
import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  value: string;
};

const Currency = ({ value }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;