export type ComponentSizesType = "sm" | "md" | "lg";

export const componentSizes: Record<ComponentSizesType, string> = {
  sm: "h-7 text-sm",
  md: "h-10 text-lg",
  lg: "h-12 text-xl",
};

export const innerComponentSize: Record<ComponentSizesType, string> = {
  sm: "px-2 gap-2",
  md: "px-4 gap-4",
  lg: "px-5 gap-5",
};

export function ComponentErrorMessage({ error }: { error?: string }) {
  return Boolean(error) ? (
    <p className="text-red-600 text-sm">{error}</p>
  ) : null;
}
