import Link from 'next/link';

type CustomButtonProps = {
  href?: string;
  className?: string;
  type?: "default" | "icon";
  blank?: boolean;
  children: React.ReactNode;
};

const CustomButton = ({
  href,
  className,
  type,
  blank,
  children,
}: CustomButtonProps) => {
  const ariaAttr = {
    "aria-label": type == "icon" ? "icon-link" : "button"
  };

  return href ? (
    <Link
      href={href}
      target={blank != false ? "_blank" : "_self"}
      rel="noopener noreferrer"
      {...ariaAttr}
      className={
        " " +
        (type != "icon" ? "flex-center custom-button " : " ") +
        (className ? className : " ")
      }
    >
      {children}
    </Link>
  ) : (
    <button
      {...ariaAttr}
      className={
        "custom-button " +
        (type != "icon" && "custom-button ") +
        (className ? className : " ")
      }
    >
      {children}
    </button>
  );
};

export default CustomButton