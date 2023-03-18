interface Props {
  children: string;
}

export const Error = ({ children }: Props) => (
  <div className="flex h-full w-full items-center justify-center rounded bg-red-200 p-4">
    <h2 className="text-lg text-red-800">{children}</h2>
  </div>
);
