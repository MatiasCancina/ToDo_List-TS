import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure
} from '@nextui-org/react'

export const AdviceModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        onPress={onOpen}
        style={{
          cursor: 'pointer',
          fontSize: 16,
          fontWeight: 'bold'
        }}
      >
        Instructions
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        style={{ padding: 16 }}
      >
        <ModalContent>
          <>
            <ModalBody>
              <p>To edit the task, you must double-click on it.</p>
              <p>
                If you are on a mobile device, to delete the task, you need to
                single-click on the task, and a cross icon will appear to allow
                you to perform this action.
              </p>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}
