import LABELS from "@labels";
import { Modal, type ModalProps } from "antd";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & ModalProps

export function LocalModal({ children, ...overrideProps }: Props) {
  return (
    <Modal
      closable={false}
      footer={null}
      mask={{ closable: true, blur: true }}
      destroyOnHidden
      styles={{ header: { marginBottom: 24 }, body: { overflowY: "auto", maxHeight: "80vh" } }}
      {...overrideProps}
      centered
      cancelText={LABELS.cancelButtonText}
    >
      {children}
    </Modal>
  )
}