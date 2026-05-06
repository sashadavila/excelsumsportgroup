type Props = {
    text: string;
    variant?: "primary" | "secondary";
};

function Button({ text, variant = "primary" }: Props) {
    return (
        <button className={`btn ${variant}`}>
            {text}
        </button>
    );
}

export default Button;