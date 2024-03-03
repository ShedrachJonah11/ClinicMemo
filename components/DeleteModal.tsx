import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import trash from "../public/trashcontain.svg";
import Image from "next/image";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Delete this conversation?
        </ModalHeader>

        <ModalBody>
          <p>
            Are you sure you want to delete this conversation? This action
            cannot be undone.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button className="border" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button className="bg-[#008080]" onPress={onClose}>
            <p className="text-white">Delete</p>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
