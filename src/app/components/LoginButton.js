import { useFormStatus } from "react-dom";

export default function LoginButton() {
    const formStatus = useFormStatus();

    return (
        <button className="bg-amber-500 border-2 border-black p-2 hover:bg-amber-600 transition-colors">
            {formStatus.pending ? "Sending..." : "Submit"}
        </button>
    );
}
