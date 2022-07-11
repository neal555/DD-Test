import React, { ReactNode } from "react";

type ModalProps = {
  visible: boolean;
  children: ReactNode;
};

export const Modal = (props: ModalProps) => {
  return (
    <div
      className={`${
        props.visible ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-modal h-full bg-transparent-light dark:bg-transparent-dark flex items-center justify-center flex-column color-white dark:color-blacks`}
    >
      <div className=" p-4 w-full max-w-md">
        <div className="relative rounded-lg shadow dark:bg-blue bg-transparent-light dark:bg-blue border-2 border-solid border-black dark:border-gray p-6">
          {props.children}
        </div>
      </div>
    </div>
  );
};
