import { Fragment } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useBudget } from "../hooks/useBudget";
import ExpenseForm from "./ExpenseForm";

export default function ExpenseModal() {

    const { state, dispatch } = useBudget()


    return (
        <>
            <div className="fixed right-5 bottom-5 flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => dispatch({ type: 'show-modal'})}
                    className="cursor-pointer"
                >
                    <PlusCircleIcon className="w-16 h-16 text-blue-600 rounded-full" />
                </button>
            </div>

            <Transition appear show={state.modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => dispatch({type: 'close-modal'})}>
                    <TransitionChild
                        as={Fragment}
                        enter="duration-300 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-200 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <ExpenseForm />
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
