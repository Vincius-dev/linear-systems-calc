import { z } from "zod";

const EquationsSchema = z.object({
    equations: z.string().min(2, {
        message: "Please enter at least two equations.",
    }),
})

export default EquationsSchema;