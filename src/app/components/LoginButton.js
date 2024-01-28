import { useFormStatus } from "react-dom";

export default function LoginButton() {
    const formStatus = useFormStatus();

    return <button>{formStatus.pending ? "Sending..." : "Submit"}</button>;
}
