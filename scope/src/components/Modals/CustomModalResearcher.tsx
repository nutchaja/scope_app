import { Modal } from "@heroui/modal";
import { extendVariants } from "@heroui/system";

const CustomModalResearcher = extendVariants(Modal, {
    variants: {
        placement: {
            "side-right": {
                wrapper: "justify-end pt-10 pr-4 items-stretch",
                base: "mx-0 my-0 max-w-[250px] h-[480px]  rounded-3xl",
            },
        },
    },
});

export default CustomModalResearcher