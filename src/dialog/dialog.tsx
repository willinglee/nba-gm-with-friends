import * as Dialog from "@radix-ui/react-dialog";

export default () => (
  <Dialog.Root>
    <Dialog.Trigger />
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Close />
    </Dialog.Content>
  </Dialog.Root>
);
