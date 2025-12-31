import { Modal } from "@heroui/modal";
import { extendVariants } from "@heroui/system";

const CustomModalLogin = extendVariants(Modal, {
    variants: {
        placement: {
            "side-right": {
                wrapper: "justify-end pt-10 items-stretch",
                base: "mx-0 my-0 max-w-xl h-[380px]",
            },
        },
    },
});

export default CustomModalLogin