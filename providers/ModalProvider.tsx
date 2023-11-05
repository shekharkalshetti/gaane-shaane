"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import AuthModal from "@/components/authModal";
import UploadModal from "@/components/UploadModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};
