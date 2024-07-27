import type { ButtonHTMLAttributes } from 'react'

type ButtonPropsHtml = ButtonHTMLAttributes<HTMLButtonElement>

const STYLES_BUTTON = {
  // Primary Button Style
  primary:
    'bg-blue-900 text-white rounded-md hover:bg-blue-500 hover:border-blue-900 hover:text-white',
}

interface ButtonProps extends ButtonPropsHtml {
  variant: keyof typeof STYLES_BUTTON
  text: string
  starIcon?: JSX.Element
  endIcon?: JSX.Element
}

export const Button = ({
  variant,
  text,
  starIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        {...props}
        className={`flex justify-center items-center gap-2 px-6 py-2 font-openSans font-regular text-sm min-h-[30px] transition
          ${STYLES_BUTTON[variant]}
        `}
      >
        {starIcon ?? starIcon}
        <div>{text}</div>
        {endIcon ?? endIcon}
      </button>
    </>
  )
}
