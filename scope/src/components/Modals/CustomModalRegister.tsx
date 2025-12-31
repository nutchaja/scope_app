import { Modal } from "@heroui/modal";
import { extendVariants } from "@heroui/system";

const CustomModalRegister = extendVariants(Modal, {
    variants: {
      placement: {
        "side-right": {
          wrapper: "justify-end pt-10 items-stretch",
          base: "mx-0 my-0 max-w-xl h-[840px]",
        },
      },
    },
  });

export default CustomModalRegister;
