import * as React from "react";

import { cn } from "@/lib/utils";

const Button = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button">
>(({ className, children, ...props }, ref) => {
	return (
		<button
			className={cn(className, "")}
			ref={ref}
			{...props}>
			{children}
		</button>
	);
});

Button.displayName = "Button";

export { Button };
