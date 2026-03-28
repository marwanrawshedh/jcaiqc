"use client";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";

interface RequestStatusToastProps {
  isError: boolean;
  message: string;
  onClose: () => void;
  show: boolean;
}

export const RequestStatusToast: React.FC<RequestStatusToastProps> = ({
  message,
  isError,
  onClose,
  show,
}) => {
  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-2"
    >
      <div
        className={`fixed top-5 right-5 z-50 max-w-sm w-full rounded-xl shadow-lg p-4
        ${isError ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl">{isError ? "❌" : "✅"}</span>
          <div className="flex-1">
            <p className="font-semibold">{isError ? "Error" : "Success"}</p>
            <p className="text-sm">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-gray-700"
          >
            ×
          </button>
        </div>
      </div>
    </Transition>
  );
};
